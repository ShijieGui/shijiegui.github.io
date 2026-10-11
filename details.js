(() => {
  'use strict';
  const stageButtons = [...document.querySelectorAll('[data-process-stage]')];
  const projectTabs = [...document.querySelectorAll('[data-process-project]')];
  const canvas = document.getElementById('process-canvas');
  const range = document.getElementById('process-compare');
  const beforeImage = document.getElementById('process-stage-image');
  const finalImage = document.getElementById('process-final-image');
  const heading = document.getElementById('process-stage-name');
  let projects = [];
  let projectSlug = 'island';
  let stageKey = '01';
  const pairsFor = project => project.pairs || project.stages.map((stage, index) => ({
    key: String(index + 1).padStart(2, '0'), label: stage.label,
    draft: {src: stage.src, thumb: stage.src, alt: `Blank placeholder for ${project.name} ${stage.label.toLowerCase()}`},
    final: {src: stage.src, alt: `Blank placeholder for ${project.name} ${stage.label.toLowerCase()}`}
  }));
  function updateComparison() {
    const value = Number(range.value);
    canvas.style.setProperty('--compare', `${value}%`);
    range.setAttribute('aria-valuetext', `Draft ${value} percent; final ${100 - value} percent`);
    document.querySelector('.blank-label').hidden = true;
  }
  if (canvas && range) {
  range.addEventListener('input', updateComparison);
  function renderProcess() {
    const project = projects.find(item => item.slug === projectSlug);
    if (!project) return;
    const pairs = pairsFor(project);
    const pair = pairs.find(item => item.key === stageKey) || pairs[0];
    stageKey = pair.key;
    const pending = Boolean(project.pending);
    document.getElementById('process-project-name').textContent = project.name;
    projectTabs.forEach(tab => {
      const selected = tab.dataset.processProject === projectSlug;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    document.getElementById('process-panel').setAttribute('aria-labelledby', `process-tab-${projectSlug}`);
    stageButtons.forEach((button, index) => {
      const item = pairs[index];
      button.dataset.processStage = item.key;
      const selected = item.key === stageKey;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
      button.querySelector('img').src = item.draft.thumb || item.draft.src;
      button.querySelector('strong').textContent = item.label;
      button.querySelector('.stage-status').textContent = pending ? 'Placeholder' : 'Draft ↔ Final';
      const mark = button.querySelector('.placeholder-mark');
      if (mark) mark.hidden = !pending;
    });
    finalImage.src = pair.final.src;
    finalImage.alt = pair.final.alt;
    beforeImage.src = pair.draft.src;
    beforeImage.alt = pair.draft.alt;
    heading.replaceChildren(document.createTextNode(pending ? pair.label : `Draft · ${pair.key}`));
    if (pending) {
      const status = document.createElement('small');
      status.textContent = ' — placeholder';
      heading.append(status);
    }
    const finalLabel = document.getElementById('process-final-label');
    finalLabel.hidden = pending;
    finalLabel.textContent = `Final · ${pair.key}`;
    canvas.dataset.final = String(pending);
    const pendingLabel = document.querySelector('.pending-process-label');
    pendingLabel.hidden = !pending;
    document.getElementById('pending-process-title').textContent = pair.label;
    document.getElementById('process-preview-note').textContent = pending ? `${project.name} · All process images will be added.` : 'Four scenes · Draft and final matched by number.';
    range.disabled = pending;
    document.getElementById('comparison-hint').hidden = pending;
    updateComparison();
  }
  fetch('process.json').then(response => {
    if (!response.ok) throw Error('Unable to load process images');
    return response.json();
  }).then(data => {
    projects = data.projects;
    projectTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => { projectSlug = tab.dataset.processProject; range.value = 50; renderProcess(); });
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % projectTabs.length;
        else if (event.key === 'ArrowLeft') next = (index + projectTabs.length - 1) % projectTabs.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = projectTabs.length - 1;
        else return;
        event.preventDefault();
        projectTabs[next].click();
        projectTabs[next].focus();
      });
    });
    stageButtons.forEach(button => button.addEventListener('click', () => { stageKey = button.dataset.processStage; range.value = 50; renderProcess(); }));
    renderProcess();
  }).catch(() => {
    document.getElementById('process-error').hidden = false;
    projectTabs.forEach(tab => { tab.disabled = true; });
    stageButtons.forEach(button => { button.disabled = true; });
  });

  }

  // Keep the precise native artwork cursor and click sparks; no following element.
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const canAnimate = () => finePointer.matches && !reduced.matches && !document.body.classList.contains('motion-off');
  document.addEventListener('pointerdown', event => {
    if (event.button !== 0 || !canAnimate() || event.target.closest('video,input,[data-social-bubble]')) return;
    const burst = document.createElement('div');
    burst.className = 'click-burst'; burst.setAttribute('aria-hidden', 'true');
    burst.style.left = `${event.clientX}px`; burst.style.top = `${event.clientY}px`;
    for (let index = 0; index < 6; index++) {
      const spark = document.createElement('i');
      const angle = index * Math.PI / 3 - Math.PI / 2;
      const radius = index % 2 ? 22 : 29;
      spark.style.setProperty('--spark-x', `${Math.cos(angle) * radius}px`);
      spark.style.setProperty('--spark-y', `${Math.sin(angle) * radius}px`);
      burst.append(spark);
    }
    document.body.append(burst);
    const existing = document.querySelectorAll('.click-burst');
    if (existing.length > 6) existing[0].remove();
    setTimeout(() => burst.remove(), 700);
  }, { passive: true });
})();
