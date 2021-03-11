(this["webpackJsonpglyf-v3"]=this["webpackJsonpglyf-v3"]||[]).push([[0],[,,function(e,t,a){e.exports={link:"NewsItem_link__60e7T",title:"NewsItem_title__K4E6N",preamble:"NewsItem_preamble__2oDzC",published:"NewsItem_published__zJt2g",item:"NewsItem_item__MbYrV",star:"NewsItem_star__2T4SW",spacer:"NewsItem_spacer__5Tci3",image:"NewsItem_image__3uMxo"}},,,function(e,t,a){e.exports={section:"NewsSection_section__1pzCz",title:"NewsSection_title__2THTc"}},,,,function(e,t,a){e.exports={nav:"Navigation_nav__INfuO",rotation:"Navigation_rotation__3D4Dd",active:"Navigation_active__1Sofg"}},,,,,,function(e,t,a){e.exports={list:"News_list__1lkUo"}},,function(e,t,a){e.exports={info:"Settings_info__3V4Oz"}},function(e){e.exports=JSON.parse('{"name":"glyf-v3","version":"1.0.6","private":true,"dependencies":{"@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^10.4.9","@testing-library/user-event":"^12.1.3","@types/classnames":"^2.2.10","@types/jest":"^26.0.10","@types/node":"^14.6.0","@types/react":"^16.9.46","@types/react-dom":"^16.9.0","axios":"^0.20.0","cheerio":"^1.0.0-rc.3","classnames":"^2.2.6","lodash.orderby":"^4.6.0","moment":"^2.27.0","react":"^16.13.1","react-dom":"^16.13.1","react-scripts":"3.4.3","react-tippy":"^1.4.0","remove-markdown":"^0.3.0","rss-parser":"^3.9.0","sanitize-html":"^1.27.2","typescript":"~4.0.2"},"scripts":{"start":"react-scripts start","build":"sh ./build.sh","test":"react-scripts test","eject":"react-scripts eject","api":"node fetchData.js"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},function(e,t,a){e.exports={grid:"Layout_grid__2QTx_"}},,function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),s=a.n(l),c=a(11),o=a.n(c),i=(a(26),a(27),a(28),a(29),a(30),a(12)),u=a.n(i),m=a(14),d=a(1),E=a(6),p=a(20);!function(e){e[e.NEWS=0]="NEWS",e[e.SETTINGS=1]="SETTINGS"}(n||(n={})),function(e){e[e.NAVIGATE=0]="NAVIGATE",e[e.SET_OPEN_LINKS_IN_NEW_TAB=1]="SET_OPEN_LINKS_IN_NEW_TAB",e[e.SET_IS_DARK_MODE=2]="SET_IS_DARK_MODE",e[e.SET_SYSTEM_DARK_MODE=3]="SET_SYSTEM_DARK_MODE",e[e.SET_LOADING_SOURCES=4]="SET_LOADING_SOURCES",e[e.SET_SOURCES=5]="SET_SOURCES",e[e.SET_SOURCE=6]="SET_SOURCE"}(r||(r={}));var v=JSON.parse(localStorage.getItem("GlyfStore"))||{navigation:{currentRoute:n.NEWS},settings:{openLinksInNewTab:!1,isDarkMode:!1,useSystemPreferenceDarkMode:!0,selectedSources:[]},sources:{sources:[],updatedAt:null,loading:!1}},f=Object(l.createContext)({dispatch:function(){},state:v}),h=f.Provider,g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object(p.a)(e).splice(0,t)},S=function(e){var t=e.children,a=Object(l.useReducer)((function(e,t){switch(t.type){case r.NAVIGATE:return Object(d.a)({},e,{navigation:Object(d.a)({},e.navigation,{currentRoute:t.payload})});case r.SET_OPEN_LINKS_IN_NEW_TAB:return Object(d.a)({},e,{settings:Object(d.a)({},e.settings,{openLinksInNewTab:t.payload})});case r.SET_IS_DARK_MODE:return Object(d.a)({},e,{settings:Object(d.a)({},e.settings,{isDarkMode:t.payload})});case r.SET_SYSTEM_DARK_MODE:return Object(d.a)({},e,{settings:Object(d.a)({},e.settings,{useSystemPreferenceDarkMode:t.payload})});case r.SET_LOADING_SOURCES:return Object(d.a)({},e,{sources:Object(d.a)({},e.sources,{loading:!0})});case r.SET_SOURCES:return Object(d.a)({},e,{sources:Object(d.a)({},t.payload,{loading:!1}),settings:Object(d.a)({},e.settings,{selectedSources:e.settings.selectedSources.length>0?e.settings.selectedSources:g(t.payload.sources,6).map((function(e){return e.domain}))})});case r.SET_SOURCE:return Object(d.a)({},e,{settings:Object(d.a)({},e.settings,{selectedSources:e.settings.selectedSources.map((function(e,a){return a===t.payload.index?t.payload.source:e}))})});default:return e}}),v),n=Object(E.a)(a,2),c=n[0],o=n[1];return Object(l.useEffect)((function(){localStorage.setItem("GlyfStore",JSON.stringify(c))}),[c]),s.a.createElement(h,{value:{state:c,dispatch:o}},t)},_=a(15),b=a.n(_);var O=l.memo((function(e){return l.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l.createElement("path",{d:"M7 7h2v2H7V7zM11 7h2v2h-2V7zM17 7h-2v2h2V7zM7 11h2v2H7v-2zM13 11h-2v2h2v-2zM15 11h2v2h-2v-2zM9 15H7v2h2v-2zM11 15h2v2h-2v-2zM17 15h-2v2h2v-2z",fill:"currentColor"}))})),N=a(16),y=a.n(N);var T=l.memo((function(e){return l.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l.createElement("path",{d:"M15 17a2 2 0 100-4 2 2 0 000 4z",fill:"currentColor"}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zM5 18V7h14v11a1 1 0 01-1 1H6a1 1 0 01-1-1z",fill:"currentColor"}))}));var M=l.memo((function(e){return l.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l.createElement("path",{d:"M9.953 16.912l-1.36 1.449-6.562-6.16L8.19 5.64l1.458 1.369-4.79 5.104 5.094 4.781v.02zM14.047 16.912l1.36 1.449 6.562-6.16L15.81 5.64l-1.458 1.369 4.79 5.104-5.094 4.781v.02z",fill:"currentColor"}))}));var j=l.memo((function(e){return l.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z",fill:"currentColor"}),l.createElement("path",{d:"M16 15a1 1 0 00-1-1H9a1 1 0 00-1 1v6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-2v-6z",fill:"currentColor"}))})),w=a(2),z=a.n(w),k=function(e){var t=e.item,a=Object(l.useContext)(f).state;return s.a.createElement("li",{className:z.a.item},s.a.createElement("a",Object.assign({className:z.a.link,href:t.url,rel:"noopener noreferrer"},a.settings.openLinksInNewTab&&{target:"_blank"}),t.image&&s.a.createElement("div",{className:z.a.image,style:{backgroundImage:"url(".concat(t.image,")")}}),s.a.createElement("h3",{className:z.a.title},t.title),s.a.createElement("span",{className:z.a.preamble},t.preamble),t.github?s.a.createElement("small",{className:z.a.published},t.language&&s.a.createElement(s.a.Fragment,null,s.a.createElement(M,null),t.language,s.a.createElement("div",{className:z.a.spacer})),t.author&&s.a.createElement(s.a.Fragment,null,s.a.createElement(j,null),t.author,s.a.createElement("div",{className:z.a.spacer})),t.stars&&s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:z.a.star},"\u2605"),t.stars)):t.published&&s.a.createElement("small",{className:z.a.published},s.a.createElement(T,null),y()(t.sortDate).calendar())))},C=a(5),I=a.n(C);var D=l.memo((function(e){return l.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l.createElement("path",{d:"M10.586 13.414l-2.829-2.828L6.343 12l4.243 4.243 7.07-7.071-1.413-1.415-5.657 5.657z",fill:"currentColor"}))})),R=a(4),x=function(e){var t=e.source,a=e.index,n=Object(l.useContext)(f),c=n.state,o=n.dispatch,i=Object(l.useState)(!1),u=Object(E.a)(i,2),m=u[0],d=u[1];return s.a.createElement("section",{className:I.a.section},m?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:I.a.title},s.a.createElement("h2",null,"Select News Source ",s.a.createElement("span",null,"(",t.title,")")),s.a.createElement(R.Tooltip,{size:"small",title:"Save",position:"bottom",trigger:"mouseenter"},s.a.createElement("button",{onClick:function(){return d(!1)}},s.a.createElement(D,null)))),s.a.createElement("ul",null,c.sources.sources.map((function(e){return s.a.createElement("li",{key:e.domain},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",name:"source",value:e.domain,checked:t.domain===e.domain,onChange:function(e){o({type:r.SET_SOURCE,payload:{source:e.target.value,index:a}})}}),e.domain))})))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:I.a.title},s.a.createElement("h2",null,t.title),s.a.createElement(R.Tooltip,{size:"small",title:"Select News Source",position:"bottom",trigger:"mouseenter"},s.a.createElement("button",{onClick:function(){return d(!0)}},s.a.createElement(O,null)))),s.a.createElement("ul",null,t.items.map((function(e,t){return s.a.createElement(k,Object.assign({key:t},{item:e}))})))))},A=function(){var e=Object(l.useContext)(f).state;return s.a.createElement("main",{className:b.a.list},e.settings.selectedSources.map((function(t,a){var n=e.sources.sources.find((function(e){return e.domain===t}));return!!n&&s.a.createElement(x,Object.assign({key:a},{source:n,index:a}))})))},L=a(17),G=a.n(L),H=a(18),K=function(){var e=Object(l.useContext)(f),t=e.state,a=e.dispatch;return s.a.createElement("aside",null,s.a.createElement("div",{className:I.a.title},s.a.createElement("h1",null,"Settings")),s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:t.settings.openLinksInNewTab,onChange:function(){a({type:r.SET_OPEN_LINKS_IN_NEW_TAB,payload:!t.settings.openLinksInNewTab})}}),"Open links in new browser tab"),s.a.createElement("label",null,s.a.createElement("input",{type:"checkbox",checked:t.settings.useSystemPreferenceDarkMode,onChange:function(){a({type:r.SET_SYSTEM_DARK_MODE,payload:!t.settings.useSystemPreferenceDarkMode})}}),"Switch to dark mode based on system preference"),s.a.createElement("div",{className:I.a.title,style:{marginTop:"calc(var(--spacing) * 4)"}},s.a.createElement("h2",null,"Info")),s.a.createElement("div",{className:G.a.info},s.a.createElement("p",null,"Glyf (current version ",H.version,") is developed by"," ",s.a.createElement("a",{href:"https://twitter.com/davidpaulsson"},"@davidpaulsson"),". For issues, feature requests and so on, please visit"," ",s.a.createElement("a",{href:"https://github.com/davidpaulsson/glyf"},"github.com/davidpaulsson/glyf")," ","and submit an issue. Thank you for using Glyf!")))},B=a(3),V=a(8),U=a.n(V),W=a(19),P=a.n(W),Y=function(e){var t,a=e.children,n=Object(l.useContext)(f).state;return s.a.createElement("div",{className:U()((t={},Object(B.a)(t,P.a.grid,!0),Object(B.a)(t,"darkMode",n.settings.isDarkMode),t))},a)};var F=l.memo((function(e){return l.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l.createElement("path",{d:"M6 6a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM6 10a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM7 13a1 1 0 100 2h10a1 1 0 100-2H7zM6 18a1 1 0 011-1h4a1 1 0 110 2H7a1 1 0 01-1-1z",fill:"currentColor"}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 4a3 3 0 013-3h14a3 3 0 013 3v16a3 3 0 01-3 3H5a3 3 0 01-3-3V4zm3-1h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z",fill:"currentColor"}))}));var J=l.memo((function(e){return l.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l.createElement("path",{opacity:.2,fillRule:"evenodd",clipRule:"evenodd",d:"M12 19a7 7 0 100-14 7 7 0 000 14zm0 3c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z",fill:"currentColor"}),l.createElement("path",{d:"M2 12C2 6.477 6.477 2 12 2v3a7 7 0 00-7 7H2z",fill:"currentColor"}))}));var q=l.memo((function(e){return l.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.226 2.003a9.971 9.971 0 00-7.297 2.926c-3.905 3.905-3.905 10.237 0 14.142 3.905 3.905 10.237 3.905 14.142 0a9.972 9.972 0 002.926-7.297 10.037 10.037 0 00-.337-2.368 14.87 14.87 0 01-1.744 1.436c-1.351.949-2.733 1.563-3.986 1.842-1.906.423-3.214.032-3.93-.684-.716-.716-1.107-2.024-.684-3.93.279-1.253.893-2.635 1.841-3.986.415-.592.894-1.177 1.437-1.744-.776-.207-1.571-.32-2.368-.337zm5.43 15.654a7.964 7.964 0 002.251-4.438c-3.546 2.045-7.269 2.247-9.321.195-2.052-2.052-1.85-5.775.195-9.321a8 8 0 106.876 13.564z",fill:"currentColor"}))}));var Q=l.memo((function(e){return l.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7 3a4.002 4.002 0 013.874 3H19v2h-8.126A4.002 4.002 0 013 7a4 4 0 014-4zm0 6a2 2 0 100-4 2 2 0 000 4zM17 20a4.002 4.002 0 01-3.874-3H5v-2h8.126A4.002 4.002 0 0121 16a4 4 0 01-4 4zm0-2a2 2 0 100-4 2 2 0 000 4z",fill:"currentColor"}))}));var $=l.memo((function(e){return l.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none"},e),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 16a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 100-12 6 6 0 000 12zM11 0h2v4.062a8.079 8.079 0 00-2 0V0zM7.094 5.68L4.222 2.808 2.808 4.222 5.68 7.094A8.048 8.048 0 017.094 5.68zM4.062 11H0v2h4.062a8.079 8.079 0 010-2zm1.618 5.906l-2.872 2.872 1.414 1.414 2.872-2.872a8.048 8.048 0 01-1.414-1.414zM11 19.938V24h2v-4.062a8.069 8.069 0 01-2 0zm5.906-1.618l2.872 2.872 1.414-1.414-2.872-2.872a8.048 8.048 0 01-1.414 1.414zM19.938 13H24v-2h-4.062a8.069 8.069 0 010 2zM18.32 7.094l2.872-2.872-1.414-1.414-2.872 2.872c.528.41 1.003.886 1.414 1.414z",fill:"currentColor"}))})),X=a(9),Z=a.n(X),ee=function(){var e=Object(l.useContext)(f),t=e.state,a=e.dispatch,c=function(){return a({type:r.NAVIGATE,payload:n.NEWS})};return s.a.createElement("nav",{className:Z.a.nav},s.a.createElement("button",{onClick:c},s.a.createElement("h1",null,"Glyf"," ",t.sources.loading&&s.a.createElement("span",null,s.a.createElement(J,null)," ",t.sources.sources.length>0?"Updating":"Loading","\u2026"))),s.a.createElement("div",{className:Z.a.buttons},s.a.createElement(R.Tooltip,{size:"small",title:"News",position:"bottom",trigger:"mouseenter"},s.a.createElement("button",{className:U()(Object(B.a)({},Z.a.active,t.navigation.currentRoute===n.NEWS)),onClick:c},s.a.createElement(F,null))),s.a.createElement(R.Tooltip,{size:"small",title:"Settings",position:"bottom",trigger:"mouseenter"},s.a.createElement("button",{className:U()(Object(B.a)({},Z.a.active,t.navigation.currentRoute===n.SETTINGS)),onClick:function(){return a({type:r.NAVIGATE,payload:n.SETTINGS})}},s.a.createElement(Q,null))),t.settings.isDarkMode?s.a.createElement(R.Tooltip,{size:"small",title:"Disable Dark Mode",position:"bottom",trigger:"mouseenter"},s.a.createElement("button",{onClick:function(){a({type:r.SET_IS_DARK_MODE,payload:!1}),a({type:r.SET_SYSTEM_DARK_MODE,payload:!1})}},s.a.createElement($,null))):s.a.createElement(R.Tooltip,{size:"small",title:"Enable Dark Mode",position:"bottom",trigger:"mouseenter"},s.a.createElement("button",{onClick:function(){a({type:r.SET_IS_DARK_MODE,payload:!0}),a({type:r.SET_SYSTEM_DARK_MODE,payload:!1})}},s.a.createElement(q,null)))))};var te=function(){return function(e,t,a){var n=Object(l.useState)(a),r=Object(E.a)(n,2),s=r[0],c=r[1],o=e.map((function(e){return window.matchMedia(e)})),i=function(){var e=o.findIndex((function(e){return e.matches}));return"undefined"!==typeof t[e]?t[e]:a};return Object(l.useEffect)((function(){c(i);var e=function(){return c(i)};return o.forEach((function(t){return t.addListener(e)})),function(){return o.forEach((function(t){return t.removeListener(e)}))}}),[]),s}(["(prefers-color-scheme: dark)"],[!0],!1)};var ae=function(){var e=Object(l.useContext)(f),t=e.state,a=e.dispatch;Object(l.useEffect)((function(){a({type:r.SET_LOADING_SOURCES}),function(){var e=Object(m.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://davidpaulsson.se/glyf/data.json");case 2:if(!((t=e.sent).status>=200&&t.status<=299)){e.next=10;break}return e.next=6,t.json();case 6:n=e.sent,a({type:r.SET_SOURCES,payload:n}),e.next=11;break;case 10:console.log(t.status,t.statusText);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]);var c=te();return Object(l.useEffect)((function(){t.settings.useSystemPreferenceDarkMode&&a({type:r.SET_IS_DARK_MODE,payload:c})}),[c,a,t.settings.useSystemPreferenceDarkMode]),s.a.createElement(Y,null,s.a.createElement(ee,null),t.navigation.currentRoute===n.NEWS&&s.a.createElement(A,null),t.navigation.currentRoute===n.SETTINGS&&s.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(S,null,s.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);