"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[964],{964:(R,d,n)=>{n.r(d),n.d(d,{ion_ripple_effect:()=>u});var b=n(467),e=n(6317),h=n(2508);n(8736);const u=class{constructor(t){(0,e.r)(this,t),this.type="bounded"}addRipple(t,k){var a=this;return(0,b.A)(function*(){return new Promise(g=>{(0,e.d)(()=>{const r=a.el.getBoundingClientRect(),o=r.width,s=r.height,A=Math.sqrt(o*o+s*s),p=Math.max(s,o),E=a.unbounded?p:A+w,c=Math.floor(p*v),I=E/c;let f=t-r.left,m=k-r.top;a.unbounded&&(f=.5*o,m=.5*s);const P=f-.5*c,C=m-.5*c,O=.5*o-f,D=.5*s-m;(0,e.w)(()=>{const l=document.createElement("div");l.classList.add("ripple-effect");const i=l.style;i.top=C+"px",i.left=P+"px",i.width=i.height=c+"px",i.setProperty("--final-scale",`${I}`),i.setProperty("--translate-end",`${O}px, ${D}px`),(a.el.shadowRoot||a.el).appendChild(l),setTimeout(()=>{g(()=>{y(l)})},325)})})})})()}get unbounded(){return"unbounded"===this.type}render(){const t=(0,h.b)(this);return(0,e.h)(e.e,{key:"40c7f73e7f5f67e29f83e1236a61c6e1c9943c42",role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return(0,e.f)(this)}},y=t=>{t.classList.add("fade-out"),setTimeout(()=>{t.remove()},200)},w=10,v=.5;u.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);