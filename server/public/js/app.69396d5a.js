(function(e){function t(t){for(var r,o,c=t[0],u=t[1],s=t[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-fabb56e4":"5628c79a","chunk-2047f0be":"89db4cb3","chunk-25dbcfb6":"7b18429f"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-2047f0be":1,"chunk-25dbcfb6":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-fabb56e4":"31d6cfe0","chunk-2047f0be":"1bde9eb2","chunk-25dbcfb6":"6bf3ae6b"}[e]+".css",a=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],l.parentNode.removeChild(l),n(i)},l.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(l)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=c(e);var d=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=f;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i={},c=i,u=n("2877"),s=Object(u["a"])(c,o,a,!1,null,null,null),f=s.exports,d=n("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var l=n("8c4f");r["a"].use(l["a"]);var m=[{path:"/",name:"home",component:function(){return Promise.all([n.e("chunk-fabb56e4"),n.e("chunk-25dbcfb6")]).then(n.bind(null,"bb51"))}},{path:"/game",name:"game",component:function(){return Promise.all([n.e("chunk-fabb56e4"),n.e("chunk-2047f0be")]).then(n.bind(null,"7d36"))}}],p=new l["a"]({mode:"history",base:"/",routes:m}),v=p,h=n("2f62"),b=(n("7db0"),n("c975"),n("b0c0"),{state:{teams:[{id:1,name:"",score:0,active:!0},{id:2,name:"",score:0,active:!1}]},getters:{getTeams:function(e){return e.teams}},mutations:{addTeam:function(e,t){var n=e.teams.find((function(e){return e.id===t.id}));n?n.name=t.name:e.teams.push({id:t.id,name:t.name,score:0,active:!1})},deleteTeam:function(e){e.teams.pop()},changeActiveTeam:function(e){var t=e.teams.find((function(e){return!0===e.active})),n=e.teams.indexOf(t);n===e.teams.length-1?(t.active=!1,e.teams[0].active=!0):(e.teams[n+1].active=!0,t.active=!1)},bonusScore:function(e,t){var n=e.teams.find((function(e){return!0===e.active}));t>=150?n.score+=10:t>=120?n.score+=5:t>=90?n.score+=2:t>=60?n.score+=1:n+=0}},actions:{initTeam:function(e){var t=e.commit;t("initTeam")},addTeam:function(e,t){var n=e.commit;n("addTeam",t)},deleteTeam:function(e){var t=e.commit;t("deleteTeam")},changeActiveTeam:function(e,t){var n=e.commit;n("changeActiveTeam",t)},bonusScore:function(e,t,n){var r=e.commit;r("bonusScore",t,n)}}}),g={state:{cardDrawn:!1},getters:{isCardDrawn:function(e){return e.cardDrawn}},mutations:{drawCard:function(e){e.cardDrawn=!0},nextPlayer:function(e){e.cardDrawn=!1}},actions:{drawCard:function(e,t){var n=e.commit;n("drawCard",t)}}},T=(n("e25e"),n("ac1f"),n("1276"),{state:{startTime:180,endTime:void 0,interval:void 0},getters:{getStartTime:function(e){return e.startTime},getEndTime:function(e){if(e.endTime){var t=e.endTime.split(":"),n=60*parseInt(t[0]),r=parseInt(t[1]);return"".concat(n+r)}}},mutations:{setEndTime:function(e,t){e.endTime=t,clearInterval(e.interval),e.startTime=180},startTimeout:function(e){e.interval=setInterval((function(){e.startTime>0?e.startTime--:e.startTime=0}),1e3)}},actions:{nextPlayer:function(e,t){var n=e.commit;n("nextPlayer",{root:!0},t)},setEndTime:function(e,t){var n=e.commit;n("setEndTime",t)},startTimeout:function(e,t){var n=e.commit;n("startTimeout",t)}}});r["a"].use(h["a"]);var w=new h["a"].Store({state:{},mutations:{},actions:{},modules:{teams:b,card:g,timer:T}});r["a"].config.productionTip=!1,new r["a"]({router:v,store:w,render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.69396d5a.js.map