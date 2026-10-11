(() => {
 'use strict';
 const body=document.body,world=document.getElementById('painted-world'),journey=document.getElementById('journey');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const inner=body.classList.contains('inner-page');
 let worldHeight=0,travel=0,openingCrop=0,maxScroll=1,framePending=false;
 const video=document.getElementById('showreel-video'),playButton=document.getElementById('reel-play');
 body.classList.add('js');
 function updateWorld(){
   framePending=false;
   const scroll=Math.max(0,window.scrollY);
   let offset=openingCrop+(travel-openingCrop)*Math.min(1,scroll/maxScroll);
   if(reduced.matches){
     if(inner) offset=openingCrop;
     else{
       const inset=parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||120;
       const top=id=>document.getElementById(id).getBoundingClientRect().top+scroll-inset;
       offset=scroll+1<top('about')?openingCrop:scroll+1<top('works')?Math.min(travel,worldHeight*.425):scroll+1<top('process')?Math.min(travel,worldHeight*.64):scroll+1<top('connect')?Math.min(travel,worldHeight*.76):travel;
     }
   }
   world.style.transform='translate3d(0,'+(-offset).toFixed(2)+'px,0)';
 }
 function scheduleWorld(){if(!framePending){framePending=true;requestAnimationFrame(updateWorld);}}
 function measureWorld(){
   const height=innerHeight,width=Math.max(innerWidth,height*.8);
   worldHeight=width*2167/726;travel=Math.max(0,worldHeight-height);
   if(inner) openingCrop=Math.min(travel,worldHeight*.425);
   else{
     const reel=document.querySelector('.reel-frame');
     const reelBottom=document.querySelector('.opening').offsetTop+reel.offsetTop+reel.offsetHeight;
     openingCrop=Math.max(0,Math.min(worldHeight*.2,worldHeight*.38-reelBottom-32,travel));
   }
   document.documentElement.style.setProperty('--world-w',width+'px');document.documentElement.style.setProperty('--world-h',worldHeight+'px');
   maxScroll=Math.max(1,document.documentElement.scrollHeight-document.documentElement.clientHeight);scheduleWorld();
 }
 reduced.addEventListener('change',scheduleWorld);
  const atmosphere = document.getElementById('atmosphere');
  const starField = document.createElement('div');
  starField.className = 'star-field';
  let seed = 719;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  for (let index = 0; index < 30; index++) {
    const angle = random() * Math.PI * 2;
    const radius = Math.sqrt(random());
    const x = 0.55 + Math.cos(angle) * radius * 0.27;
    const y = 0.49 + Math.sin(angle) * radius * 0.063;
    if (Math.abs(x - 0.62) < 0.05 && Math.abs(y - 0.507) < 0.024) continue;
    const star = document.createElement('i');
    star.className = index % 7 === 0 ? 'star large' : 'star';
    star.style.left = `${x * 100}%`;
    star.style.top = `${y * 100}%`;
    star.style.setProperty('--period', `${(6 + random() * 5).toFixed(2)}s`);
    star.style.setProperty('--delay', `${(-random() * 10).toFixed(2)}s`);
    starField.append(star);
  }
  atmosphere.append(starField);
  for (const depth of ['far','middle','near']) {
    const wrapper = document.createElement('div');
    wrapper.className = `fog-wrap fog-${depth}`;
    const fog = document.createElement('img');
    fog.className = 'fog'; fog.src = '/assets/fog.png'; fog.alt = ''; fog.width = 2172; fog.height = 724;
    wrapper.append(fog); atmosphere.append(wrapper);
  }
  for (const side of ['left','right']) {
    const wrapper = document.createElement('div');
    wrapper.className = `branch-wrap branch-${side}`;
    const branch = document.createElement('img');
    branch.className = 'branch'; branch.src = '/assets/branches.png'; branch.alt = ''; branch.width = 1536; branch.height = 1024;
    wrapper.append(branch); atmosphere.append(wrapper);
  }

 measureWorld();window.addEventListener('resize',measureWorld,{passive:true});window.addEventListener('scroll',scheduleWorld,{passive:true});new ResizeObserver(measureWorld).observe(journey);
 const reveals=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveals.unobserve(entry.target);}}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(element=>reveals.observe(element));
 // Muted autoplay remains ambient: background motion and click sparks stay active.
 let reelVisible = true, resumeReel = false;
 if(video && playButton){
   const outro=document.getElementById('reel-outro'),replayButton=document.getElementById('reel-replay'),status=document.getElementById('reel-status');
   const hideOutro = () => {
     if(outro) outro.hidden=true;
     video.inert=false;
     if(status) status.textContent='';
   };
   const syncReel = () => {
     playButton.hidden = !video.paused || video.ended;
     body.classList.toggle('film-playing', !video.paused && !video.muted);
   };
   const playReel = () => video.play().catch(() => { playButton.hidden=false; });
   const pauseAmbientReel = () => { if(!video.paused){resumeReel=true;video.pause();} };
   playButton.addEventListener('click',playReel);
   for(const event of ['play','pause','ended','volumechange']) video.addEventListener(event,syncReel);
   video.addEventListener('ended',()=>{
     resumeReel=false;
     if(!outro) return;
     const focusInPlayer=document.activeElement===video || document.activeElement===playButton;
     outro.hidden=false;
     video.inert=true;
     if(status) status.textContent='Showreel finished. Skye Gui — Game & Interactive Design.';
     if(focusInPlayer) replayButton?.focus({preventScroll:true});
   });
   video.addEventListener('play',hideOutro);
   video.addEventListener('seeking',()=>{if(!video.ended) hideOutro();});
   replayButton?.addEventListener('click',()=>{
     resumeReel=false;
     hideOutro();
     video.currentTime=0;
     playButton.focus({preventScroll:true});
     playReel();
   });
   video.muted=true;video.defaultMuted=true;
   playReel();
   new IntersectionObserver(entries=>{
     reelVisible=entries[0].isIntersecting;
     if(!reelVisible) pauseAmbientReel();
     else if(resumeReel && !document.hidden){resumeReel=false;playReel();}
   },{threshold:.15}).observe(video);
   document.addEventListener('visibilitychange',()=>{
     if(document.hidden) pauseAmbientReel();
     else if(reelVisible && resumeReel){resumeReel=false;playReel();}
   });
 }
 document.addEventListener('visibilitychange',()=>body.classList.toggle('page-hidden',document.hidden));
 window.addEventListener('load',measureWorld,{once:true});
})();
