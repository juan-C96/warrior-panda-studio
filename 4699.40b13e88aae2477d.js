"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4699],{4699:(et,H,P)=>{P.r(H),P.d(H,{iosTransitionAnimation:()=>tt,shadow:()=>C});var s=P(1836),J=P(6031);const k=a=>document.querySelector(`${a}.ion-cloned-element`),C=a=>a.shadowRoot||a,G=a=>{const l="ION-TABS"===a.tagName?a:a.querySelector("ion-tabs"),c="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=l){const n=l.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=n?n.querySelector(c):null}return a.querySelector(c)},U=(a,l)=>{const c="ION-TABS"===a.tagName?a:a.querySelector("ion-tabs");let n=[];if(null!=c){const t=c.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(n=t.querySelectorAll("ion-buttons"))}else n=a.querySelectorAll("ion-buttons");for(const t of n){const E=t.closest("ion-header"),e=E&&!E.classList.contains("header-collapse-condense-inactive"),$=t.querySelector("ion-back-button"),r=t.classList.contains("buttons-collapse");if(null!==$&&("start"===t.slot||""===t.slot)&&(r&&e&&l||!r))return $}return null},z=(a,l,c,n,t,E,e,$,r)=>{var g,A;const S=l?`calc(100% - ${t.right+4}px)`:t.left-4+"px",m=l?"right":"left",d=l?"left":"right",R=l?"right":"left";let L=1,y=1,T=`scale(${y})`;const N="scale(1)";if(E&&e){const K=(null===(g=E.textContent)||void 0===g?void 0:g.trim())===(null===(A=$.textContent)||void 0===A?void 0:A.trim());L=r.width/e.width,y=(r.height-Z)/e.height,T=K?`scale(${L}, ${y})`:`scale(${y})`}const x=C(n).querySelector("ion-icon").getBoundingClientRect(),W=l?x.width/2-(x.right-t.right)+"px":t.left-x.width/2+"px",o=l?`-${window.innerWidth-t.right}px`:`${t.left}px`,p=`${r.top}px`,v=`${t.top}px`,f=c?[{offset:0,transform:`translate3d(${o}, ${v}, 0)`},{offset:1,transform:`translate3d(${W}, ${p}, 0)`}]:[{offset:0,transform:`translate3d(${W}, ${p}, 0)`},{offset:1,transform:`translate3d(${o}, ${v}, 0)`}],O=c?[{offset:0,opacity:1,transform:N},{offset:1,opacity:0,transform:T}]:[{offset:0,opacity:0,transform:T},{offset:1,opacity:1,transform:N}],w=c?[{offset:0,opacity:1,transform:"scale(1)"},{offset:.2,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:0,transform:"scale(0.6)"}]:[{offset:0,opacity:0,transform:"scale(0.6)"},{offset:.6,opacity:0,transform:"scale(0.6)"},{offset:1,opacity:1,transform:"scale(1)"}],X=(0,s.c)(),F=(0,s.c)(),B=(0,s.c)(),u=k("ion-back-button"),Y=C(u).querySelector(".button-text"),D=C(u).querySelector("ion-icon");u.text=n.text,u.mode=n.mode,u.icon=n.icon,u.color=n.color,u.disabled=n.disabled,u.style.setProperty("display","block"),u.style.setProperty("position","fixed"),F.addElement(D),X.addElement(Y),B.addElement(u),B.beforeStyles({position:"absolute",top:"0px",[R]:"0px"}).beforeAddWrite(()=>{n.style.setProperty("display","none"),u.style.setProperty(m,S)}).afterAddWrite(()=>{n.style.setProperty("display",""),u.style.setProperty("display","none"),u.style.removeProperty(m)}).keyframes(f),X.beforeStyles({"transform-origin":`${m} top`}).keyframes(O),F.beforeStyles({"transform-origin":`${d} center`}).keyframes(w),a.addAnimation([X,F,B])},j=(a,l,c,n,t,E,e,$,r)=>{var g,A;const S=l?"right":"left",m=l?`calc(100% - ${t.right}px)`:`${t.left}px`,R=`${t.top}px`;let y=l?`-${window.innerWidth-e.right-8}px`:`${e.x+8}px`,T=.5;const N="scale(1)";let M=`scale(${T})`;if($&&r){y=l?`-${window.innerWidth-r.right-8}px`:r.x-8+"px";const I=(null===(g=$.textContent)||void 0===g?void 0:g.trim())===(null===(A=n.textContent)||void 0===A?void 0:A.trim());T=r.height/(E.height-Z),M=I?`scale(${r.width/E.width}, ${T})`:`scale(${T})`}const o=e.top+e.height/2-t.height*T/2+"px",b=c?[{offset:0,opacity:0,transform:`translate3d(${y}, ${o}, 0) ${M}`},{offset:.1,opacity:0},{offset:1,opacity:1,transform:`translate3d(0px, ${R}, 0) ${N}`}]:[{offset:0,opacity:.99,transform:`translate3d(0px, ${R}, 0) ${N}`},{offset:.6,opacity:0},{offset:1,opacity:0,transform:`translate3d(${y}, ${o}, 0) ${M}`}],i=k("ion-title"),f=(0,s.c)();i.innerText=n.innerText,i.size=n.size,i.color=n.color,f.addElement(i),f.beforeStyles({"transform-origin":`${S} top`,height:`${t.height}px`,display:"",position:"relative",[S]:m}).beforeAddWrite(()=>{n.style.setProperty("opacity","0")}).afterAddWrite(()=>{n.style.setProperty("opacity",""),i.style.setProperty("display","none")}).keyframes(b),a.addAnimation(f)},tt=(a,l)=>{var c;try{const n="cubic-bezier(0.32,0.72,0,1)",t="opacity",E="transform",e="0%",r="rtl"===a.ownerDocument.dir,g=r?"-99.5%":"99.5%",A=r?"33%":"-33%",S=l.enteringEl,m=l.leavingEl,d="back"===l.direction,R=S.querySelector(":scope > ion-content"),L=S.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),y=S.querySelectorAll(":scope > ion-header > ion-toolbar"),T=(0,s.c)(),N=(0,s.c)();if(T.addElement(S).duration((null!==(c=l.duration)&&void 0!==c?c:0)||540).easing(l.easing||n).fill("both").beforeRemoveClass("ion-page-invisible"),m&&null!=a){const o=(0,s.c)();o.addElement(a),T.addAnimation(o)}if(R||0!==y.length||0!==L.length?(N.addElement(R),N.addElement(L)):N.addElement(S.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),T.addAnimation(N),d?N.beforeClearStyles([t]).fromTo("transform",`translateX(${A})`,`translateX(${e})`).fromTo(t,.8,1):N.beforeClearStyles([t]).fromTo("transform",`translateX(${g})`,`translateX(${e})`),R){const o=C(R).querySelector(".transition-effect");if(o){const p=o.querySelector(".transition-cover"),v=o.querySelector(".transition-shadow"),b=(0,s.c)(),i=(0,s.c)(),f=(0,s.c)();b.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),i.addElement(p).beforeClearStyles([t]).fromTo(t,0,.1),f.addElement(v).beforeClearStyles([t]).fromTo(t,.03,.7),b.addAnimation([i,f]),N.addAnimation([b])}}const M=S.querySelector("ion-header.header-collapse-condense"),{forward:x,backward:W}=((a,l,c,n,t)=>{const E=U(n,c),e=G(t),$=G(n),r=U(t,c),g=null!==E&&null!==e&&!c,A=null!==$&&null!==r&&c;if(g){const S=e.getBoundingClientRect(),m=E.getBoundingClientRect(),d=C(E).querySelector(".button-text"),R=null==d?void 0:d.getBoundingClientRect(),y=C(e).querySelector(".toolbar-title").getBoundingClientRect();j(a,l,c,e,S,y,m,d,R),z(a,l,c,E,m,d,R,e,y)}else if(A){const S=$.getBoundingClientRect(),m=r.getBoundingClientRect(),d=C(r).querySelector(".button-text"),R=null==d?void 0:d.getBoundingClientRect(),y=C($).querySelector(".toolbar-title").getBoundingClientRect();j(a,l,c,$,S,y,m,d,R),z(a,l,c,r,m,d,R,$,y)}return{forward:g,backward:A}})(T,r,d,S,m);if(y.forEach(o=>{const p=(0,s.c)();p.addElement(o),T.addAnimation(p);const v=(0,s.c)();v.addElement(o.querySelector("ion-title"));const b=(0,s.c)(),i=Array.from(o.querySelectorAll("ion-buttons,[menuToggle]")),f=o.closest("ion-header"),I=null==f?void 0:f.classList.contains("header-collapse-condense-inactive");let h;h=i.filter(d?X=>{const F=X.classList.contains("buttons-collapse");return F&&!I||!F}:X=>!X.classList.contains("buttons-collapse")),b.addElement(h);const O=(0,s.c)();O.addElement(o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));const _=(0,s.c)();_.addElement(C(o).querySelector(".toolbar-background"));const q=(0,s.c)(),w=o.querySelector("ion-back-button");if(w&&q.addElement(w),p.addAnimation([v,b,O,_,q]),b.fromTo(t,.01,1),O.fromTo(t,.01,1),d)I||v.fromTo("transform",`translateX(${A})`,`translateX(${e})`).fromTo(t,.01,1),O.fromTo("transform",`translateX(${A})`,`translateX(${e})`),q.fromTo(t,.01,1);else if(M||v.fromTo("transform",`translateX(${g})`,`translateX(${e})`).fromTo(t,.01,1),O.fromTo("transform",`translateX(${g})`,`translateX(${e})`),_.beforeClearStyles([t,"transform"]),(null==f?void 0:f.translucent)?_.fromTo("transform",r?"translateX(-100%)":"translateX(100%)","translateX(0px)"):_.fromTo(t,.01,"var(--opacity)"),x||q.fromTo(t,.01,1),w&&!x){const F=(0,s.c)();F.addElement(C(w).querySelector(".button-text")).fromTo("transform",r?"translateX(-100px)":"translateX(100px)","translateX(0px)"),p.addAnimation(F)}}),m){const o=(0,s.c)(),p=m.querySelector(":scope > ion-content"),v=m.querySelectorAll(":scope > ion-header > ion-toolbar"),b=m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(p||0!==v.length||0!==b.length?(o.addElement(p),o.addElement(b)):o.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),T.addAnimation(o),d){o.beforeClearStyles([t]).fromTo("transform",`translateX(${e})`,r?"translateX(-100%)":"translateX(100%)");const i=(0,J.g)(m);T.afterAddWrite(()=>{"normal"===T.getDirection()&&i.style.setProperty("display","none")})}else o.fromTo("transform",`translateX(${e})`,`translateX(${A})`).fromTo(t,1,.8);if(p){const i=C(p).querySelector(".transition-effect");if(i){const f=i.querySelector(".transition-cover"),I=i.querySelector(".transition-shadow"),h=(0,s.c)(),O=(0,s.c)(),_=(0,s.c)();h.addElement(i).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),O.addElement(f).beforeClearStyles([t]).fromTo(t,.1,0),_.addElement(I).beforeClearStyles([t]).fromTo(t,.7,.03),h.addAnimation([O,_]),o.addAnimation([h])}}v.forEach(i=>{const f=(0,s.c)();f.addElement(i);const I=(0,s.c)();I.addElement(i.querySelector("ion-title"));const h=(0,s.c)(),O=i.querySelectorAll("ion-buttons,[menuToggle]"),_=i.closest("ion-header"),q=null==_?void 0:_.classList.contains("header-collapse-condense-inactive"),w=Array.from(O).filter(D=>{const K=D.classList.contains("buttons-collapse");return K&&!q||!K});h.addElement(w);const X=(0,s.c)(),F=i.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");F.length>0&&X.addElement(F);const B=(0,s.c)();B.addElement(C(i).querySelector(".toolbar-background"));const u=(0,s.c)(),Y=i.querySelector("ion-back-button");if(Y&&u.addElement(Y),f.addAnimation([I,h,X,u,B]),T.addAnimation(f),u.fromTo(t,.99,0),h.fromTo(t,.99,0),X.fromTo(t,.99,0),d){if(q||I.fromTo("transform",`translateX(${e})`,r?"translateX(-100%)":"translateX(100%)").fromTo(t,.99,0),X.fromTo("transform",`translateX(${e})`,r?"translateX(-100%)":"translateX(100%)"),B.beforeClearStyles([t,"transform"]),(null==_?void 0:_.translucent)?B.fromTo("transform","translateX(0px)",r?"translateX(-100%)":"translateX(100%)"):B.fromTo(t,"var(--opacity)",0),Y&&!W){const K=(0,s.c)();K.addElement(C(Y).querySelector(".button-text")).fromTo("transform",`translateX(${e})`,`translateX(${(r?-124:124)+"px"})`),f.addAnimation(K)}}else q||I.fromTo("transform",`translateX(${e})`,`translateX(${A})`).fromTo(t,.99,0).afterClearStyles([E,t]),X.fromTo("transform",`translateX(${e})`,`translateX(${A})`).afterClearStyles([E,t]),u.afterClearStyles([t]),I.afterClearStyles([t]),h.afterClearStyles([t])})}return T}catch(n){throw n}},Z=10}}]);