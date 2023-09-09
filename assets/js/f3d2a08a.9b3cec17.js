"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[159],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),l=a(7294),r=a(6010),i=a(2466),o=a(6775),s=a(1980),p=a(7392),u=a(12);function c(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function m(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=m(e),[i,o]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,p]=b({queryString:a,groupId:n}),[c,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),h=(()=>{const e=s??c;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),k(e)}),[p,k,r]),tabValues:r}}var h=a(2389);const y="tabList__CuJ",N="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==o&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,r.Z)("tabs__item",N,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",y)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(f,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return l.createElement(v,(0,n.Z)({key:String(t)},e))}},5609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(7462),l=(a(7294),a(3905)),r=a(4866),i=a(5162);const o={sidebar_position:4,title:"User Earned Collectibles",description:"Retrieve a users collectibles"},s="User Earned Collectibles",p={unversionedId:"user/user-earned-collectibles",id:"user/user-earned-collectibles",title:"User Earned Collectibles",description:"Retrieve a users collectibles",source:"@site/docs/user/user-earned-collectibles.md",sourceDirName:"user",slug:"/user/user-earned-collectibles",permalink:"/PlayStation-Stars/user/user-earned-collectibles",draft:!1,editUrl:"https://github.com/andshrew/PlayStation-Stars/tree/main/website/docs/user/user-earned-collectibles.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"User Earned Collectibles",description:"Retrieve a users collectibles"},sidebar:"tutorialSidebar",previous:{title:"User Display Case",permalink:"/PlayStation-Stars/user/user-display-case"},next:{title:"Misc",permalink:"/PlayStation-Stars/category/misc"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Input Parameters",id:"input-parameters",level:2},{value:"Output JSON Response",id:"output-json-response",level:2},{value:"LoyaltyUserCollectible JSON object",id:"m-json-object-LoyaltyUserCollectible",level:3},{value:"Media (Collectible) JSON object",id:"m-json-object-Media-collectible",level:3},{value:"Examples with Responses",id:"examples-with-responses",level:2},{value:"Example 1 - Retrieve all collectibles for the authenticating account",id:"example-1---retrieve-all-collectibles-for-the-authenticating-account",level:3},{value:"Example 2 - Retrieve collectibles excluding those on the display case for the authenticating account",id:"example-2---retrieve-collectibles-excluding-those-on-the-display-case-for-the-authenticating-account",level:3}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"user-earned-collectibles"},"User Earned Collectibles"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Requests to this endpoint will retrieve the collectibles that a user has earned."),(0,l.kt)("p",null,"The endpoint can query the authenticating account only."),(0,l.kt)("p",null,"The response from this endpoint can be parsed into a table format by using the ",(0,l.kt)("a",{parentName:"p",href:"/PlayStation-Stars/collectibles-parser"},"Collectibles Parser"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you query with an account which has not enrolled with PlayStation Stars then the API will return a successful but empty response."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view full response"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyUserCollectiblesRetrieve": []\n  }\n}\n')))),(0,l.kt)("h2",{id:"input-parameters"},"Input Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operationName"),(0,l.kt)("td",{parentName:"tr",align:null},"metGetUserCollectibles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variables"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"includeDisplayItems":false}'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extensions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}'))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Parent Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"includeDisplayItems"),(0,l.kt)("td",{parentName:"tr",align:null},"variables"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"False excludes collectibles which are selected for display on the users display case",(0,l.kt)("br",null),"True returns all earned collectibles"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h2",{id:"output-json-response"},"Output JSON Response"),(0,l.kt)("p",null,"A JSON response is returned. The following are returned under the ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," attribute."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loyaltyUserCollectiblesRetrieve"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyUserCollectible"},"JSON object",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"LoyaltyUserCollectible"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the users collectibles")))),(0,l.kt)("h3",{id:"m-json-object-LoyaltyUserCollectible"},"LoyaltyUserCollectible JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LoyaltyUserCollectible")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assets"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#m-json-object-Media-collectible"},"JSON object",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"Media"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Media associated with the collectible (images, video)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4aaf72d0-ceeb-57ab-ad13-09e4ee36ae2e")),(0,l.kt)("td",{parentName:"tr",align:null},"GUID for the collectible")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Star Gazer Telescope")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the collectible")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rarity"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"COMMON"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"UNCOMMON"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"RARE"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"HEROIC"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"LEGENDARY"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"MYTHIC")),(0,l.kt)("td",{parentName:"tr",align:null},"Rarity of the collectible")))),(0,l.kt)("h3",{id:"m-json-object-Media-collectible"},"Media (Collectible) JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Media")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IMAGE"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"VIDEO")),(0,l.kt)("td",{parentName:"tr",align:null},"The media type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_408_1664306310803.png"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_408_1662591675454.mp4")),(0,l.kt)("td",{parentName:"tr",align:null},"URL for the media")))),(0,l.kt)("h2",{id:"examples-with-responses"},"Examples with Responses"),(0,l.kt)("h3",{id:"example-1---retrieve-all-collectibles-for-the-authenticating-account"},"Example 1 - Retrieve all collectibles for the authenticating account"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example1-encoded-url",label:"Encoded URL",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables=%7B%22includeDisplayItems%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2235e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba%22%7D%7D\n"))),(0,l.kt)(i.Z,{value:"example1-raw-url",label:"Raw URL",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":true}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}\n'))),(0,l.kt)(i.Z,{value:"example1-raw-pwsh",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#powershell-7"},"using PowerShell to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Uri \'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":true}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}\' -Authentication Bearer -Token $token\n')))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view full JSON response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyUserCollectiblesRetrieve": [\n      {\n        "__typename": "LoyaltyUserCollectible",\n        "assets": [\n          {\n            "__typename": "Media",\n            "type": "IMAGE",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_408_1664306310803.png"\n          },\n          {\n            "__typename": "Media",\n            "type": "VIDEO",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_408_1662591675454.mp4"\n          }\n        ],\n        "id": "4aaf72d0-ceeb-57ab-ad13-09e4ee36ae2e",\n        "name": "Star Gazer Telescope",\n        "rarity": "COMMON"\n      },\n      {\n        "__typename": "LoyaltyUserCollectible",\n        "assets": [\n          {\n            "__typename": "Media",\n            "type": "IMAGE",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_428_1663345652984.png"\n          },\n          {\n            "__typename": "Media",\n            "type": "VIDEO",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_428_1663345660772.mp4"\n          }\n        ],\n        "id": "88d25cfa-26ad-572a-9335-a32b9bcabe13",\n        "name": "PlayStation Tech Demo Tyrannosaurus Rex ",\n        "rarity": "UNCOMMON"\n      }\n    ]\n  }\n}\n'))),(0,l.kt)("h3",{id:"example-2---retrieve-collectibles-excluding-those-on-the-display-case-for-the-authenticating-account"},"Example 2 - Retrieve collectibles excluding those on the display case for the authenticating account"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example2-encoded-url",label:"Encoded URL",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables=%7B%22includeDisplayItems%22%3Afalse%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2235e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba%22%7D%7D\n"))),(0,l.kt)(i.Z,{value:"example2-raw-url",label:"Raw URL",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}\n'))),(0,l.kt)(i.Z,{value:"example2-raw-pwsh",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#powershell-7"},"using PowerShell to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Uri \'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}\' -Authentication Bearer -Token $token\n')))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view full JSON response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyUserCollectiblesRetrieve": []\n  }\n}\n'))))}d.isMDXComponent=!0}}]);