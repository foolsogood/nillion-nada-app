(()=>{"use strict";var e={4916:(e,r,t)=>{function o(e,r,o,n,s){const a=new Worker(new URL(t.p+t.u(916),t.b),Object.assign({},n,{type:void 0}));return a.postMessage([e,r,o,s.mainJS()]),new Promise(((e,r)=>{a.onmessage=r=>{"started"===r.data&&e()},a.onerror=r}))}t.d(r,{D:()=>o}),"WorkerGlobalScope"in self&&self instanceof WorkerGlobalScope&&(self.onmessage=async e=>{let[r,o,n,s]=e.data;const a=t.e(839).then(t.bind(t,46839));try{const{default:e,worker_entry_point:t}=await a;await e(r,o),t(n),postMessage("started"),self.onmessage=e=>{console.error("Unexpected message",e)}}catch(e){throw setTimeout((()=>{throw e})),e}})}},r={};function t(o){var n=r[o];if(void 0!==n)return n.exports;var s=r[o]={id:o,loaded:!1,exports:{}};return e[o](s,s.exports,t),s.loaded=!0,s.exports}t.m=e,t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,o)=>(t.f[o](e,r),r)),[])),t.u=e=>e+".bundle.js",t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var o=r.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{t.b=self.location+"";var e={916:1};t.f.i=(r,o)=>{e[r]||importScripts(t.p+t.u(r))};var r=self.webpackChunkcra_nillion=self.webpackChunkcra_nillion||[],o=r.push.bind(r);r.push=r=>{var[n,s,a]=r;for(var i in s)t.o(s,i)&&(t.m[i]=s[i]);for(a&&a(t);n.length;)e[n.pop()]=1;o(r)}})(),t(4916)})();