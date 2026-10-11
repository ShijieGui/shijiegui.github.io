(() => {
  'use strict';
  const field = document.getElementById('social-field');
  const canvas = document.getElementById('social-fragments');
  if (!field || !canvas) return;
  const context = canvas.getContext('2d');
  const buttons = [...field.querySelectorAll('[data-social-bubble]')];
  const status = document.getElementById('social-status');
  const fallback = document.getElementById('social-link-fallback');
  const emailDialog = document.getElementById('email-dialog');
  const emailAddress = document.getElementById('email-address');
  const copyButton = emailDialog?.querySelector('[data-email-copy]');
  const copyStatus = emailDialog?.querySelector('.email-copy-status');
  let emailTrigger = null;
  let copyTimer = null;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const active = new Map();
  let bursts = [];
  let width = 1;
  let height = 1;
  let frame = 0;
  let visible = false;
  const paused = () => reduced.matches || document.hidden || document.body.classList.contains('motion-off') || document.body.classList.contains('film-playing');
  function activateContact(button) {
    const name = button.querySelector('.bubble-name').textContent;
    if (button.dataset.socialBubble === 'email') {
      emailTrigger = button;
      if (!emailDialog.open) emailDialog.showModal();
      document.body.classList.add('modal-open');
      status.textContent = 'Email address opened.';
      return;
    }
    const address = button.dataset.socialUrl;
    if (!address) return;
    // Keep the burst short enough to retain the click's transient activation.
    // A direct link remains available if a browser blocks the new window.
    let destination;
    try {
      destination = window.open('about:blank', '_blank');
      if (destination) {
        destination.opener = null;
        destination.location.replace(address);
      }
    } catch {
      destination?.close();
      destination = null;
    }
    if (destination) {
      fallback.hidden = true;
      status.textContent = `${name} opened in a new tab.`;
    } else {
      const link = document.createElement('a');
      link.href = address;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = `Open ${name} ↗`;
      fallback.replaceChildren(document.createTextNode('Your browser kept the new tab closed. '), link);
      fallback.hidden = false;
      status.textContent = `Use the Open ${name} link below the bubbles.`;
      link.focus();
    }
  }
  function resetCopy() {
    clearTimeout(copyTimer);
    if (copyButton) {
      copyButton.replaceChildren(document.createTextNode('Copy email '));
      const symbol = document.createElement('span');
      symbol.setAttribute('aria-hidden', 'true');
      symbol.textContent = '⧉';
      copyButton.append(symbol);
      copyButton.disabled = false;
    }
    if (copyStatus) copyStatus.textContent = '';
  }
  emailDialog?.querySelector('[data-email-close]').addEventListener('click', () => emailDialog.close());
  emailDialog?.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    resetCopy();
    emailTrigger?.focus({preventScroll:true});
  });
  emailDialog?.addEventListener('click', event => {
    if (event.target !== emailDialog) return;
    const bounds = emailDialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) emailDialog.close();
  });
  copyButton?.addEventListener('click', async () => {
    clearTimeout(copyTimer);
    copyButton.disabled = true;
    let copied = false;
    try {
      await navigator.clipboard.writeText(emailAddress.value);
      copied = true;
    } catch {
      emailAddress.focus();
      emailAddress.select();
      try { copied = document.execCommand('copy'); } catch { /* Show manual selection below. */ }
    }
    if (copied) {
      copyButton.textContent = 'Copied ✓';
      copyStatus.textContent = 'Email address copied.';
      copyTimer = setTimeout(resetCopy, 2200);
    } else {
      copyButton.disabled = false;
      copyStatus.textContent = 'Select the address above and copy it with Ctrl/Cmd+C.';
    }
  });
  function finish(button, animate = true) {
    const state = active.get(button);
    if (!state) return;
    clearTimeout(state.timer);
    active.delete(button);
    const node = button.closest('.social-node');
    node.classList.remove('is-bursting', 'is-acknowledged');
    button.removeAttribute('aria-disabled');
    if (animate && !paused()) {
      node.classList.add('is-returning');
    } else node.classList.remove('is-returning');
    if (!active.size) status.textContent = 'The bubbles are ready again.';
  }
  buttons.forEach(button => button.addEventListener('animationend', event => {
    if (event.animationName === 'bubble-return') button.closest('.social-node').classList.remove('is-returning');
  }));
  function resetEffects() {
    for (const button of active.keys()) finish(button, false);
    field.querySelectorAll('.is-returning').forEach(node => node.classList.remove('is-returning'));
    bursts = [];
    cancelAnimationFrame(frame);
    frame = 0;
    if (context) context.clearRect(0, 0, width, height);
  }
  function measure() {
    resetEffects();
    const bounds = field.getBoundingClientRect();
    width = Math.max(1, bounds.width);
    height = Math.max(1, bounds.height);
    const density = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * density);
    canvas.height = Math.round(height * density);
    if (context) context.setTransform(density, 0, 0, density, 0, 0);
  }
  function random(min, max) { return min + Math.random() * (max - min); }
  function makeBurst(button) {
    const bounds = button.getBoundingClientRect();
    const area = field.getBoundingClientRect();
    const x = bounds.left + bounds.width / 2 - area.left;
    const y = bounds.top + bounds.height / 2 - area.top;
    const radius = (bounds.width + bounds.height) / 4;
    const particles = [];
    const compact = Math.min(width < 500 ? 0.65 : 1, height / 420);
    for (let index = 0; index < 64; index++) {
      const angle = index * Math.PI * 2 / 64 + random(-0.1, 0.1);
      const edge = index < 42;
      const start = edge ? radius * random(.8, 1) : random(2, radius * .43);
      const speed = random(100, 240) * compact;
      particles.push({x:x+Math.cos(angle)*start,y:y+Math.sin(angle)*start,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,size:random(.7,2.1),life:random(.95,1.7),gold:index%9===0,shard:index%5===0,angle:random(0,Math.PI),twist:random(-2,2)});
    }
    return {x,y,radius,particles,start:performance.now()};
  }
  function draw(now) {
    frame = 0;
    if (!context || paused() || !visible) { resetEffects(); return; }
    context.clearRect(0, 0, width, height);
    bursts = bursts.filter(burst => now - burst.start < 1800);
    for (const burst of bursts) {
      const time = Math.max(0, (now - burst.start) / 1000);
      if (time < .42) {
        context.strokeStyle = `rgba(223,234,223,${(1-time/.42)*.55})`;
        context.lineWidth = 1;
        for (let piece = 0; piece < 12; piece++) {
          const angle = piece * Math.PI / 6 + time * .25;
          context.beginPath();
          context.arc(burst.x,burst.y,burst.radius*(1+time*.55),angle,angle+.17);
          context.stroke();
        }
      }
      for (const particle of burst.particles) {
        const life = Math.min(1, time / particle.life);
        if (life >= 1) continue;
        const travel = (1-Math.exp(-time*2.3))/2.3;
        const x = particle.x + particle.vx * travel;
        const y = particle.y + particle.vy * travel - 13 * time * time;
        const opacity = Math.pow(1-life,1.25) * .95;
        const size = particle.size * (1-life*.55);
        context.save();
        context.translate(x,y);
        context.rotate(particle.angle + time * particle.twist);
        context.fillStyle = particle.gold ? `rgba(225,204,151,${opacity})` : `rgba(219,237,235,${opacity})`;
        context.shadowColor = particle.gold ? '#dec497' : '#bededc';
        context.shadowBlur = particle.shard ? 3 : 7;
        if (particle.shard) context.fillRect(-size*.45,-size*2,size*.9,size*4);
        else {
          context.beginPath();context.arc(0,0,size,0,Math.PI*2);context.fill();
        }
        context.restore();
      }
    }
    if (bursts.length) frame = requestAnimationFrame(draw);
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    if (active.has(button)) return;
    const node = button.closest('.social-node');
    node.classList.remove('is-returning');
    fallback.hidden = true;
    if (paused() || !context) {
      node.classList.add('is-acknowledged');
      active.set(button,{timer:setTimeout(() => finish(button,false),900)});
      activateContact(button);
      return;
    }
    const burst = makeBurst(button);
    node.classList.add('is-bursting');
    button.setAttribute('aria-disabled','true');
    status.textContent = `${button.querySelector('.bubble-name').textContent} bubble dissolved into light.`;
    active.set(button,{timer:setTimeout(() => finish(button),1900)});
    bursts.push(burst);
    if (!frame) frame = requestAnimationFrame(draw);
    setTimeout(() => activateContact(button), 320);
  }));
  new ResizeObserver(measure).observe(field);
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    field.classList.toggle('social-resting',!visible);
    if (!visible) resetEffects();
  }, {threshold:0.05}).observe(field);
  new MutationObserver(() => { if (paused()) resetEffects(); }).observe(document.body,{attributes:true,attributeFilter:['class']});
  reduced.addEventListener('change', () => { if (paused()) resetEffects(); });
  measure();
})();
