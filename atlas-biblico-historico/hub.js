// Interface v0.5 — foco em Jesus, cobertura bíblica, história e tradições.
const personById = new Map(PEOPLE.map(p => [p.id, p]));
let focusExpanded = false;
let selectedTraditionId = null;

function esc(value='') {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}
function norm(value='') {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
}

/* Tabs */
function activateTab(tab) {
  document.querySelectorAll('.atlas-tab').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.atlas-page').forEach(p => p.classList.toggle('active', p.dataset.page === tab));
  if (tab === 'genealogy') {
    requestAnimationFrame(() => {
      if (typeof render === 'function') render();
      if (typeof fitView === 'function') fitView();
    });
  }
  window.location.hash = tab;
}
document.querySelectorAll('.atlas-tab').forEach(btn => btn.addEventListener('click', () => activateTab(btn.dataset.tab)));
document.querySelectorAll('[data-go-tab]').forEach(btn => btn.addEventListener('click', () => activateTab(btn.dataset.goTab)));
const requestedTab = location.hash.replace('#','');
if (['jesus','genealogy','canon','history','traditions','study'].includes(requestedTab)) activateTab(requestedTab);

/* Jesus focus */
const focusKeys = {
  common1: new Set(['adam','noah','shem','abraham']),
  common2: new Set(['abraham','judah','boaz','david']),
  matthew: new Set(['david','solomon','joram_king','uzziah','josiah_king','jeconiah','zerubbabel','joseph_mary','jesus']),
  luke: new Set(['david','nathan_david','neri','shealtiel','zerubbabel','heli','joseph_mary','jesus']),
  chronicles: new Set(['david','solomon','joram_king','ahaziah_king','joash_king','amaziah_king','uzziah','josiah_king','jehoiakim','jeconiah','pedaiah','zerubbabel','anani'])
};
function personPill(id, sourceClass='') {
  const p = personById.get(id);
  if (!p) return `<span class="focus-person missing">${esc(id)}</span>`;
  const refs = (p.refs || []).join(' • ');
  return `<button class="focus-person ${sourceClass}" data-focus-person="${esc(id)}" title="${esc(refs)}">
    <span>${esc(p.name)}</span>${p.aliases?.length ? `<small>${esc(p.aliases[0])}</small>` : ''}
  </button>`;
}
function sequenceHTML(seq, keySet, sourceClass) {
  if (focusExpanded || seq.length <= 10) {
    return seq.map((id,i) => `${i ? '<span class="seq-arrow">→</span>' : ''}${personPill(id, sourceClass)}`).join('');
  }
  const keep = seq.map((id,i) => keySet.has(id) || i===0 || i===seq.length-1);
  let out='', hidden=0;
  seq.forEach((id,i) => {
    if (!keep[i]) { hidden++; return; }
    if (out) out += '<span class="seq-arrow">→</span>';
    if (hidden) {
      out += `<button class="generation-gap" data-expand-focus title="Mostrar as gerações omitidas nesta visualização compacta">+${hidden} gerações</button><span class="seq-arrow">→</span>`;
      hidden=0;
    }
    out += personPill(id, sourceClass);
  });
  return out;
}
function renderJesusFocus() {
  const matt = document.getElementById('focusMatthew').checked;
  const luke = document.getElementById('focusLuke').checked;
  const chr = document.getElementById('focusChronicles').checked;
  const root = document.getElementById('jesusFocus');
  root.innerHTML = `
    <article class="focus-stage common-stage">
      <div class="focus-stage-title"><span>1</span><div><strong>Adão → Abraão</strong><small>Gênesis + Lucas 3</small></div></div>
      <div class="focus-sequence">${sequenceHTML(JESUS_FOCUS.commonAdamToAbraham, focusKeys.common1, 'common')}</div>
    </article>
    <article class="focus-stage common-stage">
      <div class="focus-stage-title"><span>2</span><div><strong>Abraão → Davi</strong><small>Rute 4 • 1 Crônicas 2 • Mateus 1 • Lucas 3</small></div></div>
      <div class="focus-sequence">${sequenceHTML(JESUS_FOCUS.commonAbrahamToDavid, focusKeys.common2, 'common')}</div>
    </article>
    <div class="fork-label"><span>Davi</span><strong>as genealogias passam a seguir caminhos diferentes</strong></div>
    ${matt ? `<article class="focus-stage matthew-stage">
      <div class="focus-stage-title"><span>M</span><div><strong>Davi → Jesus segundo Mateus</strong><small>linha por Salomão • Mateus 1</small></div></div>
      <div class="focus-sequence">${sequenceHTML(JESUS_FOCUS.matthew.slice(JESUS_FOCUS.matthew.indexOf('david')), focusKeys.matthew, 'matthew')}</div>
    </article>` : ''}
    ${luke ? `<article class="focus-stage luke-stage">
      <div class="focus-stage-title"><span>L</span><div><strong>Davi → Jesus segundo Lucas</strong><small>linha por Natã • Lucas 3 lida em direção cronológica</small></div></div>
      <div class="focus-sequence">${sequenceHTML(JESUS_FOCUS.lukeDavidToJesus, focusKeys.luke, 'luke')}</div>
    </article>` : ''}
    ${chr ? `<article class="focus-stage chronicles-stage">
      <div class="focus-stage-title"><span>C</span><div><strong>Linha real / pós-exílica de 1 Crônicas</strong><small>controle paralelo; não termina em Jesus</small></div></div>
      <div class="focus-sequence">${sequenceHTML(JESUS_FOCUS.chroniclesRoyal, focusKeys.chronicles, 'chronicles')}</div>
    </article>` : ''}
  `;
  root.querySelectorAll('[data-expand-focus]').forEach(b => b.addEventListener('click', () => {
    focusExpanded = true;
    document.getElementById('toggleFocusDensity').textContent='Compactar gerações';
    renderJesusFocus();
  }));
  root.querySelectorAll('[data-focus-person]').forEach(btn => btn.addEventListener('click', () => {
    const p = personById.get(btn.dataset.focusPerson);
    if (!p) return;
    document.getElementById('jesusNotes').innerHTML = `
      <article class="focus-note selected-person-note">
        <span class="note-label">Pessoa selecionada</span>
        <h4>${esc(p.name)}</h4>
        ${p.summary ? `<p>${esc(p.summary)}</p>` : ''}
        ${(p.refs||[]).map(r=>`<span class="ref-chip">${esc(r)}</span>`).join('')}
        ${p.note ? `<div class="note small">${esc(p.note)}</div>` : ''}
      </article>
      ${JESUS_FOCUS.notes.map(n=>`<article class="focus-note"><strong>${esc(n.title)}</strong><p>${esc(n.text)}</p></article>`).join('')}
    `;
  }));
}
function renderJesusNotes() {
  document.getElementById('jesusNotes').innerHTML = JESUS_FOCUS.notes.map(n=>`
    <article class="focus-note"><strong>${esc(n.title)}</strong><p>${esc(n.text)}</p></article>`).join('');
}
['focusMatthew','focusLuke','focusChronicles'].forEach(id => document.getElementById(id).addEventListener('change', renderJesusFocus));
document.getElementById('toggleFocusDensity').addEventListener('click', () => {
  focusExpanded = !focusExpanded;
  document.getElementById('toggleFocusDensity').textContent = focusExpanded ? 'Compactar gerações' : 'Expandir gerações';
  renderJesusFocus();
});

/* History */
function historyBucket(e) {
  if (e.sort < 30) return 'Israel';
  if (e.sort < 600) return 'Igreja';
  if (e.sort < 1400) return 'Medieval';
  if (e.sort < 1700) return 'Reforma';
  if (e.sort < 1900) return 'Avivamentos';
  return 'Pentecostal';
}
function renderHistory() {
  const filter = document.getElementById('historyEraFilter').value;
  const q = norm(document.getElementById('historySearch').value.trim());
  const rows = HISTORY_EVENTS.filter(e => (filter==='all' || historyBucket(e)===filter) &&
    (!q || norm(`${e.date} ${e.era} ${e.title} ${e.summary}`).includes(q)));
  document.getElementById('historyTimeline').innerHTML = rows.map(e => `
    <article class="history-event kind-${esc(e.kind)}">
      <div class="history-date">${esc(e.date)}</div>
      <div class="history-dot"></div>
      <div class="history-card">
        <span class="history-era">${esc(e.era)}</span>
        <h3>${esc(e.title)}</h3>
        <p>${esc(e.summary)}</p>
      </div>
    </article>`).join('') || '<div class="no-results">Nenhum marco encontrado com esse filtro.</div>';
}
function renderRulers() {
  document.getElementById('rulerTracks').innerHTML = RULER_TRACKS.map(track => `
    <article class="ruler-track">
      <div class="ruler-heading"><h3>${esc(track.name)}</h3>${track.note?`<p>${esc(track.note)}</p>`:''}</div>
      <div class="ruler-strip">
        ${track.items.map(r=>`<div class="ruler-card"><strong>${esc(r.name)}</strong><span>${esc(r.period)}</span>${r.why?`<small>${esc(r.why)}</small>`:''}</div>`).join('')}
      </div>
    </article>`).join('');
}
document.getElementById('historyEraFilter').addEventListener('change', renderHistory);
document.getElementById('historySearch').addEventListener('input', renderHistory);

/* Traditions graph */
const traditionById = new Map(TRADITION_NODES.map(n=>[n.id,n]));
const traditionFigureMap = new Map(TRADITION_FIGURES.map(x=>[x.tradition,x.names]));
const traditionLevels = [
  ['apostolic'],
  ['pre_nicene','nicene'],
  ['church_east','oriental_orthodox','chalcedonian'],
  ['eastern_orthodox','roman_catholic'],
  ['lutheran','reformed','anglican','anabaptist'],
  ['presbyterian','congregational','puritan','baptist','pietist','moravian','methodist'],
  ['great_awakening','holiness','restoration','adventist'],
  ['pentecostal','classical_pentecostal','oneness','charismatic','neo_pentecostal','evangelical'],
  ['global_christianity']
];
function traditionPositions() {
  const pos = new Map();
  const xStep=220, yStep=126, marginX=105, marginY=74;
  let maxRows=1;
  traditionLevels.forEach((level, col) => {
    maxRows=Math.max(maxRows,level.length);
    const total=(level.length-1)*yStep;
    level.forEach((id,row) => pos.set(id,{x:marginX+col*xStep,y:marginY+row*yStep-total/2+((maxRows-1)*yStep)/2}));
  });
  // recenter consistently after maxRows known
  traditionLevels.forEach((level,col)=>{
    const total=(level.length-1)*yStep;
    const center=marginY+((maxRows-1)*yStep)/2;
    level.forEach((id,row)=>pos.set(id,{x:marginX+col*xStep,y:center-total/2+row*yStep}));
  });
  return {pos,width:marginX*2+(traditionLevels.length-1)*xStep,height:marginY*2+(maxRows-1)*yStep};
}
function renderTraditionMap() {
  const host=document.getElementById('traditionMap');
  const {pos,width,height}=traditionPositions();
  const pathHtml=TRADITION_EDGES.map(e=>{
    const a=pos.get(e.from), b=pos.get(e.to);
    if(!a||!b)return '';
    const sx=a.x+82, sy=a.y, tx=b.x-82, ty=b.y, mx=(sx+tx)/2;
    return `<path class="tradition-edge type-${esc(e.type)}" d="M ${sx} ${sy} C ${mx} ${sy}, ${mx} ${ty}, ${tx} ${ty}" />`;
  }).join('');
  const nodeHtml=TRADITION_NODES.map(n=>{
    const p=pos.get(n.id); if(!p)return '';
    return `<button class="tradition-node ${selectedTraditionId===n.id?'selected':''}" data-tradition="${esc(n.id)}" style="left:${p.x}px;top:${p.y}px">
      <strong>${esc(n.name)}</strong><small>${esc(n.period)}</small>
    </button>`;
  }).join('');
  host.innerHTML=`<div class="tradition-world" style="width:${width}px;height:${height}px">
    <svg class="tradition-svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${pathHtml}</svg>
    ${nodeHtml}
  </div>`;
  host.querySelectorAll('[data-tradition]').forEach(btn=>btn.addEventListener('click',()=>selectTradition(btn.dataset.tradition)));
}
function selectTradition(id){
  selectedTraditionId=id;
  const n=traditionById.get(id); if(!n)return;
  const incoming=TRADITION_EDGES.filter(e=>e.to===id);
  const outgoing=TRADITION_EDGES.filter(e=>e.from===id);
  const figures=traditionFigureMap.get(id)||[];
  document.getElementById('traditionDetails').innerHTML=`
    <p class="eyebrow">${esc(n.period)}</p>
    <h3>${esc(n.name)}</h3>
    <p>${esc(n.summary)}</p>
    ${figures.length?`<div class="tradition-detail-block"><strong>Nomes associados</strong><p>${figures.map(esc).join(' • ')}</p></div>`:''}
    ${incoming.length?`<div class="tradition-detail-block"><strong>Recebe influência / origem</strong>${incoming.map(e=>`<p><span class="relation-tag">${esc(e.type)}</span> ${esc(traditionById.get(e.from)?.name||e.from)} — ${esc(e.label)}</p>`).join('')}</div>`:''}
    ${outgoing.length?`<div class="tradition-detail-block"><strong>Relações posteriores</strong>${outgoing.map(e=>`<p><span class="relation-tag">${esc(e.type)}</span> ${esc(traditionById.get(e.to)?.name||e.to)} — ${esc(e.label)}</p>`).join('')}</div>`:''}
  `;
  renderTraditionMap();
}
function renderBrazil() {
  document.getElementById('brazilPentecostal').innerHTML = BRAZIL_PENTECOSTAL.map(x=>`
    <article class="brazil-card">
      <span class="brazil-year">${esc(x.year)}</span>
      <h3>${esc(x.name)}</h3>
      <span class="brazil-type">${esc(x.type)}</span>
      <p>${esc(x.origin)}</p>
      <div><strong>Nomes:</strong> ${x.figures.map(esc).join(', ')}</div>
      <small>${esc(x.note)}</small>
    </article>`).join('');
}

document.getElementById('historyCount').textContent=HISTORY_EVENTS.length;
document.getElementById('traditionCount').textContent=TRADITION_NODES.length;
renderJesusNotes();
renderJesusFocus();
renderHistory();
renderRulers();
renderTraditionMap();
renderBrazil();

function renderApostolicFigures(){
  const host=document.getElementById('apostolicFigures');
  if(!host)return;
  host.innerHTML=APOSTOLIC_FIGURES.map(x=>`<article class="apostolic-card">
    <span>${esc(x.role)}</span><h3>${esc(x.name)}</h3><p>${esc(x.summary)}</p>
    <div>${x.refs.map(r=>`<span class="ref-chip">${esc(r)}</span>`).join('')}</div>
  </article>`).join('');
}
renderApostolicFigures();
