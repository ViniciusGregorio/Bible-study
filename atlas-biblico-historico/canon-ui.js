// v0.5 — painel de cobertura bíblica e catálogo de pessoas não genealógicas.
(function(){
  const escCanon = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  const normCanon = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();

  const statusLabels = {
    'complete':'completo',
    'complete-review':'completo • revisão',
    'complete-core':'núcleo completo',
    'strong':'cobertura forte',
    'core':'núcleo indexado',
    'partial':'parcial'
  };

  function renderCoverage(){
    const host=document.getElementById('bibleCoverage');
    if(!host) return;
    host.innerHTML=BIBLE_COVERAGE.map(x=>`<article class="coverage-card">
      <div class="coverage-head"><div><h3>${escCanon(x.book)}</h3><div class="coverage-scope">${escCanon(x.scope)}</div></div><span class="coverage-status ${escCanon(x.status)}">${escCanon(statusLabels[x.status]||x.status)}</span></div>
      <p>${escCanon(x.detail)}</p>
    </article>`).join('');
  }

  function renderFigures(){
    const host=document.getElementById('canonFigures');
    if(!host) return;
    const q=normCanon(document.getElementById('canonSearch')?.value);
    const section=document.getElementById('canonSectionFilter')?.value || 'all';
    const rows=BIBLICAL_FIGURES.filter(x => (section==='all'||x.section===section) && (!q || normCanon(`${x.name} ${(x.aliases||[]).join(' ')} ${x.role} ${x.summary} ${(x.refs||[]).join(' ')}`).includes(q)));
    host.innerHTML=rows.map(x=>`<article class="canon-figure">
      <span class="figure-section">${escCanon(x.section)}</span>
      <h3>${escCanon(x.name)}</h3>
      <div class="figure-role">${escCanon(x.role)}</div>
      ${x.summary?`<p>${escCanon(x.summary)}</p>`:''}
      <div class="refs">${(x.refs||[]).map(r=>`<span class="ref-chip">${escCanon(r)}</span>`).join('')}</div>
    </article>`).join('') || '<div class="no-results">Nenhuma pessoa encontrada com esse filtro.</div>';
  }

  const canonicalTotal = PEOPLE.length + BIBLICAL_FIGURES.length;
  const topCount=document.getElementById('canonicalCount'); if(topCount) topCount.textContent=canonicalTotal;
  const pc=document.getElementById('canonGenealogyCount'); if(pc) pc.textContent=PEOPLE.length;
  const rc=document.getElementById('canonRelationshipCount'); if(rc) rc.textContent=RELATIONSHIPS.length;
  const fc=document.getElementById('canonFigureCount'); if(fc) fc.textContent=BIBLICAL_FIGURES.length;
  const cc=document.getElementById('canonCoverageCount'); if(cc) cc.textContent=BIBLE_COVERAGE.length;

  document.getElementById('canonSearch')?.addEventListener('input',renderFigures);
  document.getElementById('canonSectionFilter')?.addEventListener('change',renderFigures);
  renderCoverage();
  renderFigures();
})();
