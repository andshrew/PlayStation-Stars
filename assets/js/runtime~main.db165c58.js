(()=>{"use strict";var e,t,r,a,o,f={},n={};function d(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return f[e].call(r.exports,r,r.exports,d),r.exports}d.m=f,e=[],d.O=(t,r,a,o)=>{if(!r){var f=1/0;for(b=0;b<e.length;b++){r=e[b][0],a=e[b][1],o=e[b][2];for(var n=!0,i=0;i<r.length;i++)(!1&o||f>=o)&&Object.keys(d.O).every((e=>d.O[e](r[i])))?r.splice(i--,1):(n=!1,o<f&&(f=o));if(n){e.splice(b--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[r,a,o]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var f={};t=t||[null,r({}),r([]),r(r)];for(var n=2&a&&e;"object"==typeof n&&!~t.indexOf(n);n=r(n))Object.getOwnPropertyNames(n).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,d.d(o,f),o},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",142:"d301c991",159:"f3d2a08a",261:"168898ba",313:"9883ddea",347:"36e2a307",374:"a8269543",424:"547192a8",431:"18bafa7d",496:"c84f5cf8",514:"1be78505",535:"52690a40",537:"09d74995",622:"7cc13680",654:"0ae677b8",671:"0e384e19",715:"6a921609",807:"f0b00d57",815:"f13c9d3f",817:"14eb3368",823:"7a77ae4d",838:"7074705f",851:"7a64a9f6",918:"17896441",956:"2c7a59db"}[e]||e)+"."+{53:"0b51fe85",142:"d4b306b3",159:"9b3cec17",261:"07110afc",313:"31dfe756",347:"130b27d6",374:"013c02b0",424:"4a1d060a",431:"fa508b11",496:"71c5a34d",514:"263da9ca",535:"18d6b7a6",537:"a53d34f3",622:"d7e230e8",654:"a13a6c06",671:"b0569dc1",715:"1b896415",807:"9186c878",815:"cba8cd89",817:"0ec02b8a",823:"5bd615df",838:"4a05a50d",851:"daf4bb75",918:"742c1913",956:"1a91eb49",972:"b43202c5"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="website:",d.l=(e,t,r,f)=>{if(a[e])a[e].push(t);else{var n,i;if(void 0!==r)for(var c=document.getElementsByTagName("script"),b=0;b<c.length;b++){var u=c[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){n=u;break}}n||(i=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,d.nc&&n.setAttribute("nonce",d.nc),n.setAttribute("data-webpack",o+r),n.src=e),a[e]=[t];var l=(t,r)=>{n.onerror=n.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),i&&document.head.appendChild(n)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/PlayStation-Stars/",d.gca=function(e){return e={17896441:"918","935f2afb":"53",d301c991:"142",f3d2a08a:"159","168898ba":"261","9883ddea":"313","36e2a307":"347",a8269543:"374","547192a8":"424","18bafa7d":"431",c84f5cf8:"496","1be78505":"514","52690a40":"535","09d74995":"537","7cc13680":"622","0ae677b8":"654","0e384e19":"671","6a921609":"715",f0b00d57:"807",f13c9d3f:"815","14eb3368":"817","7a77ae4d":"823","7074705f":"838","7a64a9f6":"851","2c7a59db":"956"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(t,r)=>{var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var f=d.p+d.u(t),n=new Error;d.l(f,(r=>{if(d.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),f=r&&r.target&&r.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,a[1](n)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,f=r[0],n=r[1],i=r[2],c=0;if(f.some((t=>0!==e[t]))){for(a in n)d.o(n,a)&&(d.m[a]=n[a]);if(i)var b=i(d)}for(t&&t(r);c<f.length;c++)o=f[c],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(b)},r=self.webpackChunkwebsite=self.webpackChunkwebsite||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();