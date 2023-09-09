"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[424],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,b=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return a?n.createElement(b,i(i({ref:t},p),{},{components:a})):n.createElement(b,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6775),s=a(1980),u=a(7392),p=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=b({queryString:a,groupId:n}),[d,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,p.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=s??d;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var k=a(2389);const y="tabList__CuJ",v="tabItem_LNqP";function N(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==o&&(d(t),s(n))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:m},i,{className:(0,l.Z)("tabs__item",v,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(f,(0,n.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},2281:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),i=a(5162);const o={sidebar_position:6,title:"Reward Tiers (Status Levels)",description:"Retrieve available reward tiers"},s="Reward Tiers (Status Levels)",u={unversionedId:"service/reward-tiers",id:"service/reward-tiers",title:"Reward Tiers (Status Levels)",description:"Retrieve available reward tiers",source:"@site/docs/service/reward-tiers.md",sourceDirName:"service",slug:"/service/reward-tiers",permalink:"/PlayStation-Stars/service/reward-tiers",draft:!1,editUrl:"https://github.com/andshrew/PlayStation-Stars/tree/main/website/docs/service/reward-tiers.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Reward Tiers (Status Levels)",description:"Retrieve available reward tiers"},sidebar:"tutorialSidebar",previous:{title:"Display Cases (Scenes)",permalink:"/PlayStation-Stars/service/scenes"},next:{title:"User Endpoints",permalink:"/PlayStation-Stars/category/user-endpoints"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Input Parameters",id:"input-parameters",level:2},{value:"Output JSON Response",id:"output-json-response",level:2},{value:"LoyaltyStatusLevelMetaData JSON object",id:"m-json-object-LoyaltyStatusLevelMetaData",level:3},{value:"LoyaltyStatusCollectible JSON object",id:"m-json-object-LoyaltyStatusCollectible",level:3},{value:"Examples with Responses",id:"examples-with-responses",level:2},{value:"Example 1 - Retrieve all reward tiers for the authenticating account",id:"example-1---retrieve-all-reward-tiers-for-the-authenticating-account",level:3}],m={toc:d};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reward-tiers-status-levels"},"Reward Tiers (Status Levels)"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Requests to this endpoint will retrieve the reward tiers that exist within the service."),(0,r.kt)("p",null,'Reward tiers are otherwise known as Status Levels or PlayStation Stars Level. Once a user has enrolled in the service they can upgrade their level by purchasing "full games" from the PlayStation Store and by earning trophies which have a rarity status of rare, very rare, or ultra rare as at the time of unlocking (ie. a trophy which has been earned by 50% or fewer people).'),(0,r.kt)("p",null,"There are 4 Status Levels which can be earned, and the total purchases and trophies required to earn them are cumulative."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status Level"),(0,r.kt)("th",{parentName:"tr",align:null},'"Full Game" PS Store Purchases Required'),(0,r.kt)("th",{parentName:"tr",align:null},"Rare (and above) Trophies Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"128")))),(0,r.kt)("p",null,"There is an additional (and currently undisclosed) 5th tier in the service known as Diamond which the API suggests is accessible by invite only. Some detail of this can be seen in the example API response below, ",(0,r.kt)("a",{parentName:"p",href:"https://redd.it/zcondt"},"additional information can be found in this Reddit post"),"."),(0,r.kt)("p",null,"The endpoint can query the authenticating account only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetStatusLevels\n")),(0,r.kt)("h2",{id:"input-parameters"},"Input Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operationName"),(0,r.kt)("td",{parentName:"tr",align:null},"metGetStatusLevels")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variables"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extensions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"persistedQuery":{"version":1,"sha256Hash":"44dff30ed981a73ed8fa8b38fd5e3fa5996fc00bb4d3eb234d2a00c29bb04dd9"}}'))))),(0,r.kt)("h2",{id:"output-json-response"},"Output JSON Response"),(0,r.kt)("p",null,"A JSON response is returned. The following are returned under the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," attribute."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loyaltyStatusLevelsMetaDataRetrieve"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyStatusLevelMetaData"},"JSON object",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"LoyaltyStatusLevelMetaData"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the tiers which are available in the service")))),(0,r.kt)("h3",{id:"m-json-object-LoyaltyStatusLevelMetaData"},"LoyaltyStatusLevelMetaData JSON object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"__typename"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LoyaltyStatusLevelMetaData")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"collectibles"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyStatusCollectible"},"JSON object",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"LoyaltyStatusCollectible"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Contains the campaigns which are available within this group",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"null")," if no collectible is awarded for reaching the tier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Sapphire Level after on-boarding to Sky Program"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Earn 1 trophy & 1 purchase to earn Garnet"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Earn 32 trophies & 2 purchase to earn Emerald"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Earn 128 trophies & 4 purchase to earn Ruby"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Invite only to Diamond Level")),(0,r.kt)("td",{parentName:"tr",align:null},"Description of what is required to reach this tier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Sapphire"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Garnet"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Emerald"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Ruby"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"Diamond")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the tier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"statusLevelNumber"),(0,r.kt)("td",{parentName:"tr",align:null},"Numeric"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"2"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"3"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"4"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"5")),(0,r.kt)("td",{parentName:"tr",align:null},"Tier number")))),(0,r.kt)("h3",{id:"m-json-object-LoyaltyStatusCollectible"},"LoyaltyStatusCollectible JSON object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"__typename"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LoyaltyStatusCollectible")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"613ab757-5a88-5f94-a683-26638f830f1b")),(0,r.kt)("td",{parentName:"tr",align:null},"ID for the collectible")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Level 5 Diorama - Bots Dont Breathe")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the collectible")))),(0,r.kt)("h2",{id:"examples-with-responses"},"Examples with Responses"),(0,r.kt)("h3",{id:"example-1---retrieve-all-reward-tiers-for-the-authenticating-account"},"Example 1 - Retrieve all reward tiers for the authenticating account"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"example1-encoded-url",label:"Encoded URL",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetStatusLevels&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2244dff30ed981a73ed8fa8b38fd5e3fa5996fc00bb4d3eb234d2a00c29bb04dd9%22%7D%7D\n"))),(0,r.kt)(i.Z,{value:"example1-raw-url",label:"Raw URL",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetStatusLevels&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44dff30ed981a73ed8fa8b38fd5e3fa5996fc00bb4d3eb234d2a00c29bb04dd9"}}\n'))),(0,r.kt)(i.Z,{value:"example1-raw-pwsh",label:"PowerShell",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"../query-api#powershell-7"},"using PowerShell to query the API"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Uri \'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetStatusLevels&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"44dff30ed981a73ed8fa8b38fd5e3fa5996fc00bb4d3eb234d2a00c29bb04dd9"}}\' -Authentication Bearer -Token $token\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view full JSON response as at service launch October 2022"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyStatusLevelsMetaDataRetrieve": [\n      {\n        "__typename": "LoyaltyStatusLevelMetaData",\n        "collectibles": [\n          {\n            "__typename": "LoyaltyStatusCollectible",\n            "id": "6bc02f35-5051-541d-af0e-68392e320039",\n            "name": "Level 3 Diorama - A Robot Runs Through It"\n          }\n        ],\n        "description": "Earn 32 trophies & 2 purchase to earn Emerald",\n        "name": "Emerald",\n        "statusLevelNumber": 3\n      },\n      {\n        "__typename": "LoyaltyStatusLevelMetaData",\n        "collectibles": [],\n        "description": "Sapphire Level after on-boarding to Sky Program",\n        "name": "Sapphire",\n        "statusLevelNumber": 1\n      },\n      {\n        "__typename": "LoyaltyStatusLevelMetaData",\n        "collectibles": [\n          {\n            "__typename": "LoyaltyStatusCollectible",\n            "id": "fcea5464-fb42-582a-8a06-fbba6d41ab4a",\n            "name": "Level 4 Diorama - Space Settlers"\n          }\n        ],\n        "description": "Earn 128 trophies & 4 purchase to earn Ruby",\n        "name": "Ruby",\n        "statusLevelNumber": 4\n      },\n      {\n        "__typename": "LoyaltyStatusLevelMetaData",\n        "collectibles": [\n          {\n            "__typename": "LoyaltyStatusCollectible",\n            "id": "613ab757-5a88-5f94-a683-26638f830f1b",\n            "name": "Level 5 Diorama - Bots Don\'t Breathe"\n          }\n        ],\n        "description": "Invite only to Diamond Level",\n        "name": "Diamond",\n        "statusLevelNumber": 5\n      },\n      {\n        "__typename": "LoyaltyStatusLevelMetaData",\n        "collectibles": [\n          {\n            "__typename": "LoyaltyStatusCollectible",\n            "id": "d45437ef-3c4b-5767-b8a4-54854507fad1",\n            "name": "Level 2 Diorama - The Astro Walk"\n          }\n        ],\n        "description": "Earn 1 trophy & 1 purchase to earn Garnet",\n        "name": "Garnet",\n        "statusLevelNumber": 2\n      }\n    ]\n  }\n}\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view full JSON response as at January 2023"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyStatusLevelsMetaDataRetrieve": [\n      {\n        "__typename": "LoyaltyStatusLevelMetaData",\n        "collectibles": [\n          {\n            "__typename": "LoyaltyStatusCollectible",\n            "id": "0c34562e-e289-519b-b852-7b143707cb9b",\n            "name": "Level 3 Diorama - A Robot Runs Through It"\n          }\n        ],\n        "description": "Earn 32 trophies & 2 purchase to earn Emerald",\n        "name": "Emerald",\n        "statusLevelNumber": 3\n      },\n      {\n        "__typename": "LoyaltyStatusLevelMetaData",\n        "collectibles": [],\n        "description": "Sapphire Level after on-boarding to Sky Program",\n        "name": "Sapphire",\n        "statusLevelNumber": 1\n      },\n      {\n        "__typename": "LoyaltyStatusLevelMetaData",\n        "collectibles": [\n          {\n            "__typename": "LoyaltyStatusCollectible",\n            "id": "0664970a-d215-5688-8995-6d55c503c0db",\n            "name": "Level 4 Diorama - Space Settlers"\n          }\n        ],\n        "description": "Earn 128 trophies & 4 purchase to earn Ruby",\n        "name": "Ruby",\n        "statusLevelNumber": 4\n      },\n      {\n        "__typename": "LoyaltyStatusLevelMetaData",\n        "collectibles": [\n          {\n            "__typename": "LoyaltyStatusCollectible",\n            "id": "fb00fbd7-0eaa-5253-b566-8b0ec28f8f79",\n            "name": "Level 5 Diorama - Bots Don\'t Breathe"\n          }\n        ],\n        "description": "Invite only to Diamond Level",\n        "name": "Diamond",\n        "statusLevelNumber": 5\n      },\n      {\n        "__typename": "LoyaltyStatusLevelMetaData",\n        "collectibles": [\n          {\n            "__typename": "LoyaltyStatusCollectible",\n            "id": "9cb866dc-a469-54cc-b7e6-21d0035f680b",\n            "name": "Level 2 Diorama - The Astro Walk"\n          }\n        ],\n        "description": "Earn 1 trophy & 1 purchase to earn Garnet",\n        "name": "Garnet",\n        "statusLevelNumber": 2\n      }\n    ]\n  }\n}\n'))))}c.isMDXComponent=!0}}]);