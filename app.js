/* VexSort — shared interactions (multi-page) */
(function(){
  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Mobile nav */
  const toggle=document.getElementById('navToggle'), links=document.getElementById('navLinks');
  if(toggle&&links){
    toggle.addEventListener('click',()=>links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
  }

  /* Scroll reveal */
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  /* Animated hero stats */
  function animateStats(){
    document.querySelectorAll('.hero-stats .n').forEach(el=>{
      if(el.dataset.done)return; el.dataset.done='1';
      if(el.dataset.count!==undefined){
        const target=+el.dataset.count, suffix=el.dataset.suffix||'';
        if(REDUCE){el.textContent=target+suffix;return;}
        const dur=1900,t0=performance.now();
        (function step(t){const p=Math.min((t-t0)/dur,1);const v=Math.round((1-Math.pow(1-p,3))*target);el.textContent=v+suffix;if(p<1)requestAnimationFrame(step);})(t0);
      } else if(el.dataset.type!==undefined){
        const str=el.dataset.type;
        if(REDUCE){el.textContent=str;return;}
        el.textContent='';let i=0;
        (function tick(){el.textContent=str.slice(0,i)+(i<str.length?'\u258c':'');i++;if(i<=str.length){setTimeout(tick,160);}else{el.textContent=str;}})();
      }
    });
  }

  /* Boot animation (home only) */
  const bootWord=document.getElementById('bootWord'), bootStage=document.getElementById('bootStage');
  if(bootWord&&bootStage){
    'VexSort'.split('').forEach((ch,i)=>{const s=document.createElement('span');s.textContent=ch;if(i>=3)s.classList.add('r');s.style.animationDelay=(0.08*i+0.5)+'s';bootWord.appendChild(s);});
    if(!REDUCE){for(let i=0;i<14;i++){const p=document.createElement('span');p.className='part';const sz=5+Math.random()*10;p.style.width=sz+'px';p.style.height=sz+'px';p.style.left=(40+Math.random()*260)+'px';p.style.top=(40+Math.random()*40)+'px';p.style.setProperty('--sx',(Math.random()*500-250)+'px');p.style.setProperty('--sy',(Math.random()*400-200)+'px');p.style.setProperty('--sr',(Math.random()*360)+'deg');p.style.animationDelay=(Math.random()*0.3)+'s';if(Math.random()>0.5)p.style.borderRadius='50%';bootStage.appendChild(p);}}
    setTimeout(()=>{const b=document.getElementById('boot');if(b)b.classList.add('done');animateStats();},REDUCE?200:2500);
  } else if(document.querySelector('.hero-stats')){
    animateStats();
  }

  /* Scroll-spy: Home vs About (home page only) */
  const homeLink=document.querySelector(".nav-links a[data-spy='home']");
  const aboutLink=document.querySelector(".nav-links a[data-spy='about']");
  const aboutSec=document.getElementById('about');
  if(homeLink&&aboutLink&&aboutSec){
    function spy(){const trigger=aboutSec.getBoundingClientRect().top<=window.innerHeight*0.4;homeLink.classList.toggle('active',!trigger);aboutLink.classList.toggle('active',trigger);}
    window.addEventListener('scroll',spy,{passive:true});
    window.addEventListener('resize',spy); spy();
  }

  /* Scroll-driven hero fade */
  (function(){
    const visual=document.querySelector('.hero-visual'); if(!visual)return;
    function onScroll(){const y=window.scrollY,vh=window.innerHeight;const p=Math.min(Math.max(y/(vh*0.7),0),1);visual.style.opacity=(1-p*0.9).toFixed(3);visual.style.transform=`scale(${(1-p*0.18).toFixed(3)})`;}
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  })();

  /* Magnetic tilt hover */
  (function(){
    if(REDUCE)return;
    document.querySelectorAll('.member, .offer-item, .target, .feature-box').forEach(card=>{
      card.classList.add('tilt');
      card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();const px=(e.clientX-r.left)/r.width-0.5,py=(e.clientY-r.top)/r.height-0.5;card.style.transform=`perspective(800px) rotateX(${(-py*6).toFixed(2)}deg) rotateY(${(px*8).toFixed(2)}deg) translateY(-6px)`;});
      card.addEventListener('pointerleave',()=>{card.style.transform='';});
    });
  })();

  /* Timeline sticky crossfade images */
  (function(){
    const imgs=document.querySelectorAll('.tl-img'); if(!imgs.length)return;
    function setImg(idx){imgs.forEach(im=>im.classList.toggle('active',+im.dataset.img===idx));}
    const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)setImg(+e.target.dataset.phase);}),{rootMargin:'-45% 0px -45% 0px',threshold:0});
    document.querySelectorAll('.phase[data-phase]').forEach(p=>obs.observe(p));
  })();

  /* Contact form */
  (function(){
    const btn=document.getElementById('sendBtn'); if(!btn)return;
    const note=document.getElementById('formNote'),email=document.getElementById('email'),inquiry=document.getElementById('inquiry');
    btn.addEventListener('click',()=>{
      const valid=/\S+@\S+\.\S+/.test(email.value)&&inquiry.value.trim().length>0;
      if(!valid){note.classList.remove('ok');note.textContent='Add a valid email and a short message first.';return;}
      note.classList.add('ok');note.textContent='Thanks \u2014 your message is ready to send. (Hook this form up to a backend to deliver it.)';
      email.value='';inquiry.value='';document.getElementById('subject').value='';
    });
  })();

})();
