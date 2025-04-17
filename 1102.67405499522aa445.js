"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1102],{1102:(_,l,n)=>{n.r(l),n.d(l,{ion_tab:()=>f,ion_tabs:()=>c});var a=n(467),s=n(6317),u=n(9245),d=n(8736);n(2486);const f=(()=>{let t=class{constructor(e){(0,s.r)(this,e),this.loaded=!1,this.active=!1,this.delegate=void 0,this.tab=void 0,this.component=void 0}componentWillLoad(){var e=this;return(0,a.A)(function*(){e.active&&(yield e.setActive())})()}setActive(){var e=this;return(0,a.A)(function*(){yield e.prepareLazyLoaded(),e.active=!0})()}changeActive(e){e&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,u.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){(0,d.d)("[ion-tab] - Exception in prepareLazyLoaded:",e)}}return Promise.resolve(void 0)}render(){const{tab:e,active:i,component:o}=this;return(0,s.h)(s.e,{key:"c36c113e74e12b58459df9e3b546ad4856187e90",role:"tabpanel","aria-hidden":i?null:"true","aria-labelledby":`tab-button-${e}`,class:{"ion-page":void 0===o,"tab-hidden":!i}},(0,s.h)("slot",{key:"0d7821dac70ba7a12edfb3331988f3df1566cc1a"}))}get el(){return(0,s.f)(this)}static get watchers(){return{active:["changeActive"]}}};return t.style=":host(.tab-hidden){display:none !important}",t})(),c=class{constructor(t){(0,s.r)(this,t),this.ionNavWillLoad=(0,s.c)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,s.c)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,s.c)(this,"ionTabsDidChange",3),this.transitioning=!1,this.onTabClicked=e=>{const{href:i,tab:o}=e.detail;if(this.useRouter&&void 0!==i){const h=document.querySelector("ion-router");h&&h.push(i)}else this.select(o)},this.selectedTab=void 0,this.useRouter=!1}componentWillLoad(){var t=this;return(0,a.A)(function*(){if(t.useRouter||(t.useRouter=!(!t.el.querySelector("ion-router-outlet")&&!document.querySelector("ion-router")||t.el.closest("[no-router]"))),!t.useRouter){const e=t.tabs;e.length>0&&(yield t.select(e[0]))}t.ionNavWillLoad.emit()})()}componentWillRender(){const t=this.el.querySelector("ion-tab-bar");t&&(t.selectedTab=this.selectedTab?this.selectedTab.tab:void 0)}select(t){var e=this;return(0,a.A)(function*(){const i=r(e.tabs,t);return!!e.shouldSwitch(i)&&(yield e.setActive(i),yield e.notifyRouter(),e.tabSwitch(),!0)})()}getTab(t){var e=this;return(0,a.A)(function*(){return r(e.tabs,t)})()}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}setRouteId(t){var e=this;return(0,a.A)(function*(){const i=r(e.tabs,t);return e.shouldSwitch(i)?(yield e.setActive(i),{changed:!0,element:e.selectedTab,markVisible:()=>e.tabSwitch()}):{changed:!1,element:e.selectedTab}})()}getRouteId(){var t=this;return(0,a.A)(function*(){var e;const i=null===(e=t.selectedTab)||void 0===e?void 0:e.tab;return void 0!==i?{id:i,element:t.selectedTab}:void 0})()}setActive(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())}tabSwitch(){const t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))}notifyRouter(){if(this.useRouter){const t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(t){return void 0!==t&&t!==this.selectedTab&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return(0,s.h)(s.e,{key:"20b97196d78c1b3f3faf31618a8a2347e087f06b",onIonTabButtonClick:this.onTabClicked},(0,s.h)("slot",{key:"b0823fbae6e47743cfd12c376b365ad7e32cec7c",name:"top"}),(0,s.h)("div",{key:"eaffd7e4d69ab9489a387e3bbb36e3bab72203a0",class:"tabs-inner"},(0,s.h)("slot",{key:"20bb66a2937e3ec473aa59c4075ce581b5411677"})),(0,s.h)("slot",{key:"1529dd361f050f52074f51c73b3982ba827dc3a5",name:"bottom"}))}get el(){return(0,s.f)(this)}},r=(t,e)=>{const i="string"==typeof e?t.find(o=>o.tab===e):e;return i||(0,d.d)(`[ion-tabs] - Tab with id: "${i}" does not exist`),i};c.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}]);