/* VexSort — interactive world map */
(function(){
  const svg=document.getElementById('worldSvg');if(!svg)return;
  const NS='http://www.w3.org/2000/svg';
  const continents=["M120,80 L210,70 L255,85 L240,110 L268,118 L258,150 L278,165 L255,205 L218,235 L205,210 L222,178 L192,170 L178,140 L150,150 L138,118 Z","M255,210 L275,218 L268,238 L250,232 Z","M278,250 L312,242 L330,268 L322,315 L300,370 L282,415 L268,400 L272,348 L260,300 L268,268 Z","M360,55 L398,50 L410,75 L388,95 L362,82 Z","M478,95 L520,85 L548,92 L540,108 L562,112 L552,135 L520,150 L500,138 L480,128 Z","M488,165 L560,158 L588,180 L582,238 L556,300 L520,340 L502,312 L490,255 L476,205 Z","M560,80 L660,68 L760,72 L840,90 L880,118 L860,150 L800,158 L740,148 L690,160 L640,150 L600,135 L572,110 Z","M650,165 L692,160 L712,195 L688,232 L662,210 L648,185 Z","M740,200 L790,205 L805,228 L772,242 L748,225 Z","M790,318 L856,308 L890,335 L872,378 L818,390 L786,358 Z"];
  continents.forEach(d=>{const p=document.createElementNS(NS,'path');p.setAttribute('d',d);p.setAttribute('class','land');svg.appendChild(p);});
  const contacts=[{name:'Almond Robotics',note:'SO-ARM101 + mentorship',lon:-122,lat:37},{name:'Ambi Robotics',note:'Industry mentor',lon:-122,lat:38},{name:'Dyna Robotics',note:'Industry contact',lon:-121,lat:37},{name:'Mind Robotics',note:'Industry contact',lon:2,lat:48},{name:'Hugging Face / LeRobot',note:'Framework community',lon:2.3,lat:48.8},{name:'VEX Worlds',note:'Where it began',lon:-95,lat:30}];
  function project(lon,lat){return [(lon+180)/360*1000,(90-lat)/180*500];}
  const tip=document.getElementById('mapTip'),wrap=document.getElementById('mapWrap');
  contacts.forEach(c=>{
    const [x,y]=project(c.lon,c.lat);
    const g=document.createElementNS(NS,'g');g.setAttribute('class','pin');g.setAttribute('transform','translate('+x+','+y+')');
    const halo=document.createElementNS(NS,'circle');halo.setAttribute('class','halo');halo.setAttribute('r','3');
    const ping=document.createElementNS(NS,'circle');ping.setAttribute('class','ping');ping.setAttribute('r','6');
    const dot=document.createElementNS(NS,'circle');dot.setAttribute('class','dot');dot.setAttribute('r','2.2');
    const hit=document.createElementNS(NS,'circle');hit.setAttribute('r','16');hit.setAttribute('fill','transparent');
    g.appendChild(halo);g.appendChild(ping);g.appendChild(dot);g.appendChild(hit);svg.appendChild(g);
    function show(){const rect=wrap.getBoundingClientRect(),svgRect=svg.getBoundingClientRect();const px=svgRect.left-rect.left+(x/1000)*svgRect.width;const py=svgRect.top-rect.top+(y/500)*svgRect.height;tip.style.left=px+'px';tip.style.top=py+'px';tip.querySelector('.name').textContent=c.name;tip.querySelector('.coord').textContent=c.note+'  ·  '+Math.abs(c.lat).toFixed(1)+'°'+(c.lat>=0?'N':'S')+', '+Math.abs(c.lon).toFixed(1)+'°'+(c.lon>=0?'E':'W');tip.classList.add('show');}
    function hide(){tip.classList.remove('show');}
    g.addEventListener('mouseenter',show);g.addEventListener('mousemove',show);g.addEventListener('mouseleave',hide);
    g.addEventListener('click',e=>{e.stopPropagation();show();setTimeout(hide,2200);});
  });
})();
