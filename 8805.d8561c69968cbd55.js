"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8805],{333:(_,p,a)=>{a.d(p,{c:()=>m,g:()=>u,h:()=>h,o:()=>k});var o=a(467);const h=(r,s)=>null!==s.closest(r),m=(r,s)=>"string"==typeof r&&r.length>0?Object.assign({"ion-color":!0,[`ion-color-${r}`]:!0},s):s,u=r=>{const s={};return(r=>void 0!==r?(Array.isArray(r)?r:r.split(" ")).filter(i=>null!=i).map(i=>i.trim()).filter(i=>""!==i):[])(r).forEach(i=>s[i]=!0),s},b=/^[a-z][a-z0-9+\-.]*:/,k=function(){var r=(0,o.A)(function*(s,i,t,n){if(null!=s&&"#"!==s[0]&&!b.test(s)){const l=document.querySelector("ion-router");if(l)return null!=i&&i.preventDefault(),l.push(s,t,n)}return!1});return function(i,t,n,l){return r.apply(this,arguments)}}()},8805:(_,p,a)=>{a.r(p),a.d(p,{ion_spinner:()=>r});var o=a(6317),h=a(333),m=a(8736),d=a(2508),u=a(7895);const r=class{constructor(t){(0,o.r)(this,t),this.color=void 0,this.duration=void 0,this.name=void 0,this.paused=!1}getName(){const t=this.name||m.c.get("spinner"),n=(0,d.b)(this);return t||("ios"===n?"lines":"circular")}render(){var t;const n=this,l=(0,d.b)(n),f=n.getName(),e=null!==(t=u.S[f])&&void 0!==t?t:u.S.lines,y="number"==typeof n.duration&&n.duration>10?n.duration:e.dur,g=[];if(void 0!==e.circles)for(let c=0;c<e.circles;c++)g.push(s(e,y,c,e.circles));else if(void 0!==e.lines)for(let c=0;c<e.lines;c++)g.push(i(e,y,c,e.lines));return(0,o.h)(o.e,{key:"e0dfa8a3ee2a0469eb31323f506750bd77d65797",class:(0,h.c)(n.color,{[l]:!0,[`spinner-${f}`]:!0,"spinner-paused":n.paused||m.c.getBoolean("_testing")}),role:"progressbar",style:e.elmDuration?{animationDuration:y+"ms"}:{}},g)}},s=(t,n,l,f)=>{const e=t.fn(n,l,f);return e.style["animation-duration"]=n+"ms",(0,o.h)("svg",{viewBox:e.viewBox||"0 0 64 64",style:e.style},(0,o.h)("circle",{transform:e.transform||"translate(32,32)",cx:e.cx,cy:e.cy,r:e.r,style:t.elmDuration?{animationDuration:n+"ms"}:{}}))},i=(t,n,l,f)=>{const e=t.fn(n,l,f);return e.style["animation-duration"]=n+"ms",(0,o.h)("svg",{viewBox:e.viewBox||"0 0 64 64",style:e.style},(0,o.h)("line",{transform:"translate(32,32)",y1:e.y1,y2:e.y2}))};r.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{-webkit-transform-origin:center;transform-origin:center;position:absolute;top:0;left:0;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){svg:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:7px}:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-width:4px}:host(.spinner-lines) line,:host(.spinner-lines-small) line,:host(.spinner-lines-sharp) line,:host(.spinner-lines-sharp-small) line{stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg,:host(.spinner-lines-sharp) svg,:host(.spinner-lines-sharp-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular) svg{-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"}}]);