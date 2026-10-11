(() => {
 'use strict';
 const navigation = document.querySelector('.navigation');
 document.addEventListener('keydown',event=>{if(event.key==='Tab')document.body.classList.add('keyboard-navigation');});
 document.addEventListener('pointerdown',()=>document.body.classList.remove('keyboard-navigation'),{passive:true});
 const syncNavigation = () => navigation.classList.toggle('is-scrolled',window.scrollY>80);
 window.addEventListener('scroll',syncNavigation,{passive:true});
 syncNavigation();
 const toggle = document.getElementById('works-toggle');
 const menu = document.getElementById('works-menu');
 const currentWork = document.body.dataset.page;
 if(currentWork && currentWork !== 'about') menu.querySelector(`a[href="/projects/${currentWork}/"]`)?.setAttribute('aria-current','page');
 function setMenu(open, focusFirst=false) {
   toggle.setAttribute('aria-expanded', String(open)); menu.hidden = !open;
   navigation.classList.toggle('menu-open',open);
   if(open && focusFirst) menu.querySelector('a').focus();
 }
 toggle.addEventListener('click', () => setMenu(menu.hidden));
 toggle.addEventListener('keydown', event => { if(event.key === 'ArrowDown') {event.preventDefault();setMenu(true,true);} });
 menu.addEventListener('keydown', event => {
   const links = [...menu.querySelectorAll('a')], index = links.indexOf(document.activeElement);
   if(event.key === 'ArrowDown' || event.key === 'ArrowUp') {event.preventDefault();links[(index + (event.key === 'ArrowDown' ? 1 : links.length-1))%links.length].focus();}
 });
 document.addEventListener('pointerdown', event => {if(!event.target.closest('.works-disclosure')) setMenu(false);});
 document.addEventListener('keydown', event => {if(event.key === 'Escape' && !menu.hidden) {setMenu(false);toggle.focus();}});
 document.addEventListener('focusin', event => {if(!event.target.closest('.works-disclosure')) setMenu(false);});
 menu.addEventListener('click', event => {if(event.target.closest('a')) setMenu(false);});
 if(!document.body.classList.contains('inner-page')) {
   const links = {home:document.querySelector('[data-nav=home]'),works:toggle,process:document.querySelector('[data-nav=process]')};
   const observer = new IntersectionObserver(entries => {
     const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio-a.intersectionRatio)[0];
     if(visible) Object.entries(links).forEach(([key,link]) => {const active = key === visible.target.dataset.navSection;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
   },{rootMargin:'-15% 0px -45% 0px',threshold:[0,.05,.2]});
   for(const [key,id] of [['home','home'],['works','works'],['process','process']]) {const section=document.getElementById(id);section.dataset.navSection=key;observer.observe(section);}
 }
 const dialog = document.getElementById('image-dialog');
 const gallery = document.querySelector('[data-gallery]');
 const thumbs = gallery ? [...gallery.querySelectorAll('[data-gallery-image]')] : [];
 let imageIndex=0;
 let images=thumbs.map(button => ({src:button.dataset.src,alt:button.dataset.alt}));
 function renderLarge() {
   const img=document.getElementById('image-large');img.src=images[imageIndex].src;img.alt=images[imageIndex].alt;
   document.getElementById('image-count').textContent=`${imageIndex+1} / ${images.length}`;
   document.getElementById('image-prev').disabled=images.length<2;document.getElementById('image-next').disabled=images.length<2;
 }
 function openLarge() {renderLarge();dialog.showModal();document.body.classList.add('modal-open');}
 thumbs.forEach((button,index) => button.addEventListener('click',() => {
   imageIndex=index;thumbs.forEach((thumb,i) => thumb.setAttribute('aria-pressed',String(i===index)));
   const selected=document.getElementById('gallery-selected');selected.src=button.dataset.src;selected.alt=button.dataset.alt;
   document.getElementById('gallery-caption').textContent=button.dataset.caption;
   document.getElementById('gallery-position').textContent=`${String(index+1).padStart(2,'0')} / ${String(thumbs.length).padStart(2,'0')}`;
 }));
 gallery?.querySelector('[data-enlarge]').addEventListener('click',openLarge);
 document.querySelectorAll('[data-single-image]').forEach(button => button.addEventListener('click',() => {images=[{src:button.dataset.singleImage,alt:button.dataset.alt}];imageIndex=0;openLarge();}));
 if(dialog) {
   document.getElementById('image-close').addEventListener('click',()=>dialog.close());
   dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
   dialog.addEventListener('click',event=> {if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
   for(const [id,step] of [['image-prev',-1],['image-next',1]]) document.getElementById(id).addEventListener('click',()=>{imageIndex=(imageIndex+step+images.length)%images.length;renderLarge();});
   dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();document.getElementById(event.key==='ArrowLeft'?'image-prev':'image-next').click();}});
 }
 const shell=document.querySelector('[data-game]');
 if(shell) {
   const stage=shell.querySelector('.game-stage'), cover=shell.querySelector('.game-cover'), status=shell.querySelector('[data-game-status]');
   const restart=shell.querySelector('[data-game-restart]'), stop=shell.querySelector('[data-game-stop]'), start=shell.querySelector('[data-game-start]'), fullscreen=shell.querySelector('[data-game-fullscreen]');
   let frame=null, timer=null;
   function loadGame() {
     frame?.remove();clearTimeout(timer);cover.hidden=true;status.textContent='Loading the game…';restart.disabled=true;stop.hidden=false;
     frame=document.createElement('iframe');frame.title=`Play ${shell.dataset.title}`;frame.allow='autoplay; fullscreen';frame.allowFullscreen=true;
     frame.addEventListener('load',()=>{status.textContent='Click inside the game to play.';restart.disabled=false;clearTimeout(timer);});
     frame.src=shell.dataset.game;stage.append(frame);
     timer=setTimeout(()=>{status.textContent='Still loading? You can restart or open the game in a new tab.';restart.disabled=false;},20000);
   }
   start.addEventListener('click',loadGame);restart.addEventListener('click',loadGame);
   stop.addEventListener('click',()=>{frame?.remove();frame=null;clearTimeout(timer);cover.hidden=false;stop.hidden=true;restart.disabled=true;status.textContent='Ready when you are.';start.focus();});
   if(!shell.requestFullscreen) fullscreen.hidden=true;
   else fullscreen.addEventListener('click',async()=>{try{if(document.fullscreenElement===shell)await document.exitFullscreen();else await shell.requestFullscreen();}catch{status.textContent='Fullscreen is unavailable. You can keep playing here.';}});
   document.addEventListener('fullscreenchange',()=>{fullscreen.textContent=document.fullscreenElement===shell?'Exit fullscreen ↙':'Fullscreen ↗';});
 }
})();
