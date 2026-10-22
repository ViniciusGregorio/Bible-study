const viewport = document.getElementById('viewport');
const world = document.getElementById('world');
const svg = document.getElementById('connections');
const nodesEl = document.getElementById('nodes');
const details = document.getElementById('detailsPanel');
const timeline = document.getElementById('timeline');
const ageTable = document.getElementById('ageTable');
const searchInput = document.getElementById('searchInput');
const sourceFilter = document.getElementById('sourceFilter');
const viewMode = document.getElementById('viewMode');
const showVariants = document.getElementById('showVariants');
const showPeopleGroups = document.getElementById('showPeopleGroups');
const quizQuestion = document.getElementById('quizQuestion');
const quizAnswers = document.getElementById('quizAnswers');
const quizFeedback = document.getElementById('quizFeedback');
const quizScore = document.getElementById('quizScore');

const byId = new Map(PEOPLE.map(p => [p.id, p]));
let selectedId = null;
let positions = new Map();
let worldSize = { width: 4200, height: 1800 };
let scale = .55;
let offsetX = 40;
let offsetY = 40;
let dragging = false;
let pointerStart = null;
let originStart = null;
let lineageHighlight = new Set();
let lineageEdgeKeys = new Set();
let quizState = { correct: 0, total: 0, current: null, locked: false };

const MAIN_TYPES = new Set(['parent', 'ancestor']);
const AGE_ORDER = ['adam','seth','enosh','kenan','mahalalel','jared','enoch_seth','methuselah','lamech_seth','shem','arphaxad','shelah','eber','peleg','reu','serug','nahor1','terah','sarai','abraham','ishmael','isaac','jacob','joseph'];

function normalize(value='') {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
}
function edgeKey(r){ return `${r.from}>${r.to}:${r.relation}:${r.variant?'v':'n'}`; }
function primaryRelations() {
  const types = new Set(MAIN_TYPES);
  const genealogyModes = new Set(['jesusMatthew','jesusLuke','chronicles4','chronicles5','levites','chronicles7','benjaminSaul','postexilic']);
  if (genealogyModes.has(viewMode?.value)) types.add('genealogy');
  return RELATIONSHIPS.filter(r => types.has(r.relation) && !r.variant);
}

function descendantsOf(rootId) {
  const children = new Map();
  primaryRelations().forEach(r => {
    if (!children.has(r.from)) children.set(r.from, []);
    children.get(r.from).push(r.to);
  });
  const out = new Set([rootId]);
  const stack = [rootId];
  while (stack.length) {
    const id = stack.pop();
    (children.get(id) || []).forEach(child => {
      if (!out.has(child)) { out.add(child); stack.push(child); }
    });
  }
  return out;
}

function modeIds() {
  const mode = viewMode.value;
  if (mode === 'all') return new Set(PEOPLE.map(p => p.id));
  if (mode === 'nations') {
    const ids = new Set(['noah']);
    PEOPLE.forEach(p => {
      const refs = (p.refs || []).join(' ');
      if (/Gênesis 10/.test(refs)) ids.add(p.id);
    });
    if (showVariants.checked) ids.add('cainan2');
    return ids;
  }
  const preset = VIEW_PRESETS[mode];
  if (preset?.ids?.length) return new Set(preset.ids);
  return new Set(PEOPLE.map(p => p.id));
}

function visibleIds() {
  const ids = modeIds();
  if (!showPeopleGroups.checked) {
    PEOPLE.filter(p => p.entityType === 'people').forEach(p => ids.delete(p.id));
  }
  if (!showVariants.checked) ids.delete('cainan2');
  return ids;
}

function rootForMode(){
  return ({nations:'noah',terah:'terah',abraham:'abraham',ishmael:'ishmael',esau:'esau',israel:'jacob',egypt:'jacob',davidic:'judah',jesusMatthew:'abraham',jesusLuke:'adam',chronicles4:'judah',chronicles5:'reuben',levites:'levi',chronicles7:'issachar',benjaminSaul:'benjamin',postexilic:'perez'}[viewMode.value] || 'adam');
}

function computeLayout(ids) {
  const rels = primaryRelations().filter(r => ids.has(r.from) && ids.has(r.to));
  const childMap = new Map();
  const hasParent = new Set();
  rels.forEach(r => {
    if (!childMap.has(r.from)) childMap.set(r.from, []);
    childMap.get(r.from).push(r.to);
    hasParent.add(r.to);
  });
  childMap.forEach(children => children.sort((a,b) => (byId.get(a)?.name||a).localeCompare(byId.get(b)?.name||b,'pt-BR')));

  const root = rootForMode();
  const pos = new Map();
  let leafIndex = 0;
  const X_STEP = 225;
  const Y_STEP = viewMode.value === 'all' ? 82 : 92;
  const MARGIN_X = 160;
  const MARGIN_Y = 130;
  const visited = new Set();

  function walk(id, depth) {
    if (!ids.has(id) || visited.has(id)) return null;
    visited.add(id);
    const children = (childMap.get(id) || []).filter(x => ids.has(x));
    const childYs = [];
    children.forEach(child => {
      const y = walk(child, depth + 1);
      if (y != null) childYs.push(y);
    });
    let y;
    if (childYs.length) y = childYs.reduce((a,b)=>a+b,0) / childYs.length;
    else { y = MARGIN_Y + leafIndex * Y_STEP; leafIndex++; }
    pos.set(id,{x:MARGIN_X + depth*X_STEP,y,depth});
    return y;
  }

  if (ids.has(root)) walk(root,0);

  // Reachable secondary genealogical roots are placed in their own lane.
  [...ids].filter(id => !visited.has(id) && hasParent.has(id)).forEach(id => {
    if (pos.has(id)) return;
    const incomingVisible = rels.find(r => r.to===id && pos.has(r.from));
    if (incomingVisible) return;
    walk(id, 1);
  });

  // Variant-only Cainã: visually between Arfaxade and Salá when possible.
  if (ids.has('cainan2') && !pos.has('cainan2')) {
    const a=pos.get('arphaxad'), b=pos.get('shelah');
    if (a && b) pos.set('cainan2',{x:(a.x+b.x)/2,y:Math.min(a.y,b.y)-105,depth:(a.depth+b.depth)/2});
  }

  // Context spouses without a visible primary-parent path are placed near their partner.
  const spouseRels = RELATIONSHIPS.filter(r=>r.relation==='spouse' && ids.has(r.from) && ids.has(r.to));
  const spouseCount = new Map();
  let progress=true, guard=0;
  while(progress && guard++<5){
    progress=false;
    spouseRels.forEach(r=>{
      const pairs=[[r.from,r.to],[r.to,r.from]];
      pairs.forEach(([partner,id])=>{
        if(pos.has(id) || !pos.has(partner)) return;
        const visibleParent = rels.some(pr=>pr.to===id && ids.has(pr.from));
        if(visibleParent) return;
        const base=pos.get(partner);
        const n=(spouseCount.get(partner)||0);
        spouseCount.set(partner,n+1);
        const dy=(n%2===0?-1:1)*(105+Math.floor(n/2)*78);
        pos.set(id,{x:base.x,y:base.y+dy,depth:base.depth,context:true});
        progress=true;
      });
    });
  }

  // Any remaining context/isolate goes to a safe lane.
  [...ids].filter(id=>!pos.has(id)).forEach(id => {
    pos.set(id,{x:MARGIN_X,y:MARGIN_Y + leafIndex*Y_STEP,depth:0,context:true});
    leafIndex++;
  });

  let maxX=1200,maxY=900;
  pos.forEach(p=>{maxX=Math.max(maxX,p.x+210);maxY=Math.max(maxY,p.y+150);});
  worldSize={width:maxX+160,height:maxY+140};
  world.style.width=`${worldSize.width}px`;
  world.style.height=`${worldSize.height}px`;
  svg.setAttribute('width',worldSize.width);
  svg.setAttribute('height',worldSize.height);
  svg.setAttribute('viewBox',`0 0 ${worldSize.width} ${worldSize.height}`);
  return pos;
}

function relationMatchesSource(r, source) { return source === 'all' || (r.sourceTags || []).includes(source); }
function isContextNode(id, ids){
  const hasPrimaryParent = primaryRelations().some(r=>r.to===id && ids.has(r.from));
  const hasSpouse = RELATIONSHIPS.some(r=>r.relation==='spouse' && (r.from===id||r.to===id) && ids.has(r.from) && ids.has(r.to));
  return hasSpouse && !hasPrimaryParent;
}

function render() {
  const ids = visibleIds();
  positions = computeLayout(ids);
  nodesEl.innerHTML='';
  svg.innerHTML='';
  const term=normalize(searchInput.value.trim());
  const source=sourceFilter.value;

  RELATIONSHIPS.forEach(r => {
    if (!ids.has(r.from) || !ids.has(r.to)) return;
    if (r.variant && !showVariants.checked) return;
    const a=positions.get(r.from), b=positions.get(r.to);
    if (!a || !b) return;
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    const sx=a.x+72, sy=a.y, tx=b.x-72, ty=b.y;
    let d;
    if (r.relation==='spouse') {
      d=`M ${a.x} ${a.y} L ${b.x} ${b.y}`;
      path.classList.add('edge','spouse');
    } else if (r.relation==='mother') {
      const mx=(a.x+b.x)/2;
      d=`M ${sx} ${sy} C ${mx} ${sy}, ${mx} ${ty}, ${tx} ${ty}`;
      path.classList.add('edge','mother');
    } else {
      const mx=(sx+tx)/2;
      d=`M ${sx} ${sy} C ${mx} ${sy}, ${mx} ${ty}, ${tx} ${ty}`;
      path.classList.add('edge');
      if (r.relation==='ancestor') path.classList.add('ancestor');
      if (r.relation==='genealogy') path.classList.add('genealogy');
    }
    if (r.variant) path.classList.add('variant-edge');
    if (!relationMatchesSource(r,source)) path.classList.add('muted-edge');
    if (selectedId && (r.from===selectedId || r.to===selectedId)) path.classList.add('highlight');
    if (lineageEdgeKeys.has(edgeKey(r))) path.classList.add('lineage-edge');
    path.setAttribute('d',d);
    svg.appendChild(path);
  });

  PEOPLE.forEach(p => {
    if (!ids.has(p.id)) return;
    const xy=positions.get(p.id); if(!xy) return;
    const el=document.createElement('button');
    el.className='node';
    if (p.entityType==='people') el.classList.add('people-node');
    if (p.note) el.classList.add('noted');
    if (p.id===selectedId) el.classList.add('selected');
    if (p.id==='cainan2') el.classList.add('variant-node');
    if (isContextNode(p.id,ids)) el.classList.add('context-node');
    if (lineageHighlight.has(p.id)) el.classList.add('lineage-node');
    const hay=normalize([p.name,...(p.aliases||[])].join(' '));
    const termMatch=!term || hay.includes(term);
    const sourceMatch=source==='all' || (p.sourceTags||[]).includes(source);
    if (!termMatch || !sourceMatch) el.classList.add('muted');
    el.style.left=`${xy.x}px`; el.style.top=`${xy.y}px`;
    const kind=p.entityType==='people' ? 'povo/clã' : (p.id==='cainan2' ? 'variante' : '');
    el.innerHTML=`<span class="name">${p.name}</span>${p.aliases?.length?`<span class="alias">${p.aliases.slice(0,2).join(' • ')}</span>`:''}${kind?`<span class="kind">${kind}</span>`:''}`;
    el.addEventListener('click',ev=>{ev.stopPropagation();selectPerson(p.id);});
    nodesEl.appendChild(el);
  });
}

function lineageToRoot(id){
  const nodes=[]; const edges=[]; const seen=new Set(); let cur=id;
  while(cur && !seen.has(cur)){
    seen.add(cur); nodes.push(cur);
    if(cur==='adam') break;
    let incoming=RELATIONSHIPS.find(r=>r.to===cur && r.relation==='parent' && !r.variant);
    if(!incoming) incoming=RELATIONSHIPS.find(r=>r.to===cur && r.relation==='ancestor' && !r.variant);
    if(!incoming) break;
    edges.push(edgeKey(incoming)); cur=incoming.from;
  }
  return {nodes,edges,complete:nodes.includes('adam')};
}

function relationNameList(items){
  return items.map(r=>`${byId.get(r.from)?.name||r.from}${r.variant?' <span class="mini-variant">variante</span>':''}`).join(' • ');
}

function selectPerson(id) {
  selectedId=id;
  render();
  const p=byId.get(id); if(!p) return;
  const incoming=RELATIONSHIPS.filter(r=>r.to===id && r.relation!=='spouse');
  const outgoing=RELATIONSHIPS.filter(r=>r.from===id && r.relation!=='spouse');
  const fathers=incoming.filter(r=>MAIN_TYPES.has(r.relation));
  const mothers=incoming.filter(r=>r.relation==='mother');
  const children=outgoing.filter(r=>MAIN_TYPES.has(r.relation));
  const motherOf=outgoing.filter(r=>r.relation==='mother');
  const spouses=RELATIONSHIPS.filter(r=>r.relation==='spouse' && (r.from===id || r.to===id)).map(r=>({r,other:byId.get(r.from===id?r.to:r.from)}));
  const age=AGES[id];
  const sameNames=PEOPLE.filter(x=>x.id!==id && normalize(x.name.split(' / ')[0])===normalize(p.name.split(' / ')[0]));
  const variantRels=[...incoming,...outgoing].filter(r=>r.variant);
  const lineage=lineageToRoot(id);

  details.innerHTML=`
    <div class="person-kicker">${p.entityType==='people'?'Povo / clã':'Pessoa / linhagem'}</div>
    <h2 class="person-title">${p.name}</h2>
    <p class="aliases">${p.aliases?.length?'Variações: '+p.aliases.join(', '):'Sem variações cadastradas neste recorte.'}</p>
    ${p.summary?`<p class="summary">${p.summary}</p>`:''}

    <div class="detail-actions">
      ${lineage.complete?`<button class="button small" id="showLineage">Destacar linhagem até Adão</button>`:''}
      ${lineageHighlight.size?`<button class="button small secondary" id="clearLineage">Limpar destaque</button>`:''}
    </div>

    <div class="info-block"><h3>Relações registradas</h3>
      ${fathers.length?`<p><strong>Pai/origem:</strong> ${relationNameList(fathers)}</p>`:''}
      ${mothers.length?`<p><strong>Mãe:</strong> ${mothers.map(r=>byId.get(r.from)?.name||r.from).join(' • ')}</p>`:''}
      ${children.length?`<p><strong>Filhos/descendência:</strong> ${children.map(({to,variant})=>`${byId.get(to)?.name||to}${variant?' <span class="mini-variant">variante</span>':''}`).join(', ')}</p>`:'<p>Nenhuma descendência nomeada cadastrada neste recorte.</p>'}
      ${motherOf.length?`<p><strong>Mãe de:</strong> ${motherOf.map(r=>byId.get(r.to)?.name||r.to).join(', ')}</p>`:''}
      ${spouses.length?`<p><strong>Casamento/contexto:</strong> ${spouses.map(x=>x.other?.name).filter(Boolean).join(', ')}</p>`:''}
    </div>

    ${age?`<div class="info-block"><h3>Idades registradas</h3>
      ${age.ageAtNamedDescendant!=null?`<p><strong>Ao gerar o descendente destacado:</strong> ${age.ageAtNamedDescendant} anos</p>`:''}
      ${age.lifespan!=null?`<p><strong>Vida total:</strong> ${age.lifespan} anos</p>`:''}
      <span class="ref-chip">${age.ref}</span>${age.note?`<div class="note small">${age.note}</div>`:''}
    </div>`:''}

    <div class="info-block"><h3>Referências</h3>${(p.refs||[]).map(r=>`<span class="ref-chip">${r}</span>`).join('')}</div>

    ${p.unnamedChildrenMentioned?`<div class="info-block"><h3>Genealogia não exaustiva</h3><div class="note">A passagem também menciona outros filhos e filhas sem nomeá-los. Por isso, “todos os descendentes” no atlas significa todos os descendentes identificáveis/nomeados nas fontes selecionadas.</div></div>`:''}
    ${p.note?`<div class="info-block"><h3>Observação</h3><div class="note">${p.note}</div></div>`:''}
    ${variantRels.length?`<div class="info-block"><h3>Relação variante</h3>${variantRels.map(r=>`<div class="variant-box"><strong>${byId.get(r.from)?.name} → ${byId.get(r.to)?.name}</strong><br>${(r.refs||[]).join(' • ')}${r.note?`<br><span>${r.note}</span>`:''}</div>`).join('')}</div>`:''}
    ${sameNames.length?`<div class="info-block"><h3>Não confundir</h3><p>Há homônimos no atlas: ${sameNames.slice(0,6).map(x=>x.name+' ('+(x.refs?.[0]||'')+')').join('; ')}${sameNames.length>6?'…':''}</p></div>`:''}
    ${p.entityType==='people'?`<div class="info-block"><h3>Como ler este nó</h3><p>Algumas genealogias também organizam povos, clãs e nações. Este nó não deve ser interpretado automaticamente como um indivíduo biográfico.</p></div>`:''}
  `;
  document.getElementById('showLineage')?.addEventListener('click',()=>{
    viewMode.value='all';
    lineageHighlight=new Set(lineage.nodes); lineageEdgeKeys=new Set(lineage.edges); render();
    requestAnimationFrame(()=>centerOn(id,.78));
  });
  document.getElementById('clearLineage')?.addEventListener('click',()=>{lineageHighlight.clear();lineageEdgeKeys.clear();render();selectPerson(id);});
}

function renderTimeline() {
  timeline.innerHTML=EVENTS.slice().sort((a,b)=>a.order-b.order).map((e,i)=>`
    <article class="timeline-card ${e.people?.length?'clickable':''}" data-event-index="${i}">
      <span class="stage">${e.stage}</span><h3>${e.title}</h3><p>${e.summary}</p>
      <div>${e.refs.map(r=>`<span class="ref-chip">${r}</span>`).join('')}</div>
    </article>`).join('');
  [...timeline.querySelectorAll('.timeline-card')].forEach((el,i)=>{
    const e=EVENTS.slice().sort((a,b)=>a.order-b.order)[i];
    if(!e.people?.length) return;
    el.addEventListener('click',()=>{
      const id=e.people.find(x=>byId.has(x)); if(!id)return;
      viewMode.value='all'; selectedId=id; render(); selectPerson(id); centerOn(id,.85);
    });
  });
}

function renderAges() {
  ageTable.innerHTML=AGE_ORDER.filter(id=>AGES[id]&&byId.has(id)).map(id=>{
    const p=byId.get(id), a=AGES[id];
    return `<article class="age-card"><h3>${p.name}</h3>
      <div class="age-values">
        ${a.ageAtNamedDescendant!=null?`<span><strong>${a.ageAtNamedDescendant}</strong><small>anos ao gerar a linha</small></span>`:''}
        ${a.lifespan!=null?`<span><strong>${a.lifespan}</strong><small>anos de vida</small></span>`:''}
      </div><span class="ref-chip">${a.ref}</span>${a.note?`<p>${a.note}</p>`:''}</article>`;
  }).join('');
}

function updateStats() {
  document.getElementById('peopleCount').textContent=PEOPLE.length;
  document.getElementById('relationCount').textContent=RELATIONSHIPS.length;
  const variantStat=document.getElementById('variantCount'); if(variantStat) variantStat.textContent=RELATIONSHIPS.filter(r=>r.variant).length;
}

function applyTransform(){world.style.transform=`translate(${offsetX}px, ${offsetY}px) scale(${scale})`;}
function fitView(){
  const rect=viewport.getBoundingClientRect();
  const sx=(rect.width-50)/worldSize.width, sy=(rect.height-50)/worldSize.height;
  scale=Math.max(.08,Math.min(.82,Math.min(sx,sy)));
  offsetX=(rect.width-worldSize.width*scale)/2;
  offsetY=(rect.height-worldSize.height*scale)/2;
  applyTransform();
}
function centerOn(id, desired=.75){
  const p=positions.get(id); if(!p) return;
  const rect=viewport.getBoundingClientRect();
  scale=Math.max(.20,Math.min(1.2,desired));
  offsetX=rect.width/2-p.x*scale;
  offsetY=rect.height/2-p.y*scale;
  applyTransform();
}

function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}
function buildQuizPool(){
  const pool=[];
  const parents=RELATIONSHIPS.filter(r=>r.relation==='parent'&&!r.variant&&byId.get(r.from)?.entityType!=='people'&&byId.get(r.to)?.entityType!=='people');
  parents.forEach(r=>{
    pool.push({type:'parent',prompt:`Quem é o pai/ancestral direto registrado de ${byId.get(r.to).name}?`,correct:r.from});
    pool.push({type:'child',prompt:`Qual destas pessoas aparece como filho/descendente direto de ${byId.get(r.from).name}?`,correct:r.to,parent:r.from});
  });
  RELATIONSHIPS.filter(r=>r.relation==='mother'&&!r.variant).forEach(r=>{
    if(byId.has(r.from)&&byId.has(r.to)) pool.push({type:'mother',prompt:`Quem aparece como mãe de ${byId.get(r.to).name}?`,correct:r.from});
  });
  return pool;
}
const QUIZ_POOL=buildQuizPool();
function newQuizQuestion(){
  quizState.locked=false;
  const q=QUIZ_POOL[Math.floor(Math.random()*QUIZ_POOL.length)];
  quizState.current=q;
  let candidateIds=PEOPLE.filter(p=>p.entityType!=='people'&&p.id!==q.correct).map(p=>p.id);
  if(q.type==='child'&&q.parent){
    const sibs=RELATIONSHIPS.filter(r=>r.relation==='parent'&&r.from===q.parent&&!r.variant).map(r=>r.to).filter(x=>x!==q.correct);
    candidateIds=[...sibs,...candidateIds.filter(x=>!sibs.includes(x))];
  }
  const wrong=shuffle(candidateIds).slice(0,3);
  const options=shuffle([q.correct,...wrong]);
  quizQuestion.textContent=q.prompt;
  quizAnswers.innerHTML=options.map(id=>`<button class="quiz-answer" data-id="${id}">${byId.get(id)?.name||id}</button>`).join('');
  quizFeedback.textContent='';
  quizAnswers.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>answerQuiz(btn.dataset.id)));
}
function answerQuiz(id){
  if(quizState.locked)return;
  quizState.locked=true;quizState.total++;
  const ok=id===quizState.current.correct;if(ok)quizState.correct++;
  quizAnswers.querySelectorAll('button').forEach(btn=>{
    btn.disabled=true;
    if(btn.dataset.id===quizState.current.correct)btn.classList.add('correct');
    else if(btn.dataset.id===id)btn.classList.add('wrong');
  });
  quizFeedback.innerHTML=`${ok?'✓ Correto.':'✗ A resposta correta é <strong>'+byId.get(quizState.current.correct).name+'</strong>.'} <button id="nextQuiz" class="text-button">Próxima →</button>`;
  quizScore.textContent=`${quizState.correct}/${quizState.total}`;
  document.getElementById('nextQuiz').addEventListener('click',newQuizQuestion);
}

actionSetup();
function actionSetup(){
  viewport.addEventListener('wheel',e=>{
    e.preventDefault();
    const rect=viewport.getBoundingClientRect();
    const mx=e.clientX-rect.left,my=e.clientY-rect.top,old=scale;
    scale=Math.max(.07,Math.min(1.7,scale*(e.deltaY<0?1.09:.91)));
    offsetX=mx-((mx-offsetX)/old)*scale;
    offsetY=my-((my-offsetY)/old)*scale;
    applyTransform();
  },{passive:false});
  viewport.addEventListener('pointerdown',e=>{
    if(e.target.closest('.node'))return;
    dragging=true;viewport.setPointerCapture(e.pointerId);viewport.classList.add('dragging');
    pointerStart={x:e.clientX,y:e.clientY};originStart={x:offsetX,y:offsetY};
  });
  viewport.addEventListener('pointermove',e=>{
    if(!dragging)return;
    offsetX=originStart.x+(e.clientX-pointerStart.x);offsetY=originStart.y+(e.clientY-pointerStart.y);applyTransform();
  });
  viewport.addEventListener('pointerup',()=>{dragging=false;viewport.classList.remove('dragging');});

  searchInput.addEventListener('input',render);
  sourceFilter.addEventListener('change',render);
  viewMode.addEventListener('change',()=>{selectedId=null;lineageHighlight.clear();lineageEdgeKeys.clear();render();fitView();});
  showVariants.addEventListener('change',()=>{render();fitView();});
  showPeopleGroups.addEventListener('change',()=>{render();fitView();});
  document.getElementById('resetView').addEventListener('click',fitView);
  document.getElementById('focusMainline').addEventListener('click',()=>{viewMode.value='mainline';selectedId=null;lineageHighlight.clear();lineageEdgeKeys.clear();render();fitView();});
  document.getElementById('newQuiz')?.addEventListener('click',newQuizQuestion);
}

updateStats();renderTimeline();renderAges();render();newQuizQuestion();requestAnimationFrame(fitView);
