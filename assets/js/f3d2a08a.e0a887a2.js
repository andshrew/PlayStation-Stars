"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[159],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),p=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?l.createElement(b,i(i({ref:t},c),{},{components:a})):l.createElement(b,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7462),n=a(7294),r=a(6010),i=a(2389),o=a(7392),s=a(7094),p=a(2466);const c="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:a,block:i,defaultValue:d,values:m,groupId:b,className:k}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),N=(0,o.l)(y,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!y.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:f}=(0,s.U)(),[C,w]=(0,n.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=b){const e=v[b];null!=e&&e!==C&&y.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,a=x.indexOf(t),l=y[a].value;l!==C&&(O(t),w(l),null!=b&&f(b,String(l)))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},y.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>x.push(e),onKeyDown:T,onFocus:E,onClick:E},i,{className:(0,r.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":C===t})}),a??t)}))),a?(0,n.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,i.Z)();return n.createElement(d,(0,l.Z)({key:String(t)},e))}},5609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var l=a(7462),n=(a(7294),a(3905)),r=a(5488),i=a(5162);const o={sidebar_position:3,title:"User Earned Collectibles",description:"Retrieve a users collectibles"},s="User Earned Collectibles",p={unversionedId:"user/user-earned-collectibles",id:"user/user-earned-collectibles",title:"User Earned Collectibles",description:"Retrieve a users collectibles",source:"@site/docs/user/user-earned-collectibles.md",sourceDirName:"user",slug:"/user/user-earned-collectibles",permalink:"/PlayStation-Stars/user/user-earned-collectibles",draft:!1,editUrl:"https://github.com/andshrew/PlayStation-Stars/tree/main/website/docs/user/user-earned-collectibles.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"User Earned Collectibles",description:"Retrieve a users collectibles"},sidebar:"tutorialSidebar",previous:{title:"User Display Case",permalink:"/PlayStation-Stars/user/user-display-case"},next:{title:"Querying the API",permalink:"/PlayStation-Stars/query-api"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Input Parameters",id:"input-parameters",level:2},{value:"Output JSON Response",id:"output-json-response",level:2},{value:"LoyaltyUserCollectible JSON object",id:"m-json-object-LoyaltyUserCollectible",level:3},{value:"Media (Collectible) JSON object",id:"m-json-object-Media-collectible",level:3},{value:"Examples with Responses",id:"examples-with-responses",level:2},{value:"Example 1 - Retrieve all collectibles for the authenticating account",id:"example-1---retrieve-all-collectibles-for-the-authenticating-account",level:3},{value:"Example 2 - Retrieve collectibles excluding those on the display case for the authenticating account",id:"example-2---retrieve-collectibles-excluding-those-on-the-display-case-for-the-authenticating-account",level:3}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"user-earned-collectibles"},"User Earned Collectibles"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Requests to this endpoint will retrieve the collectibles that a user has earned."),(0,n.kt)("p",null,"The endpoint can query the authenticating account only."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If you query with an account which has not enrolled with PlayStation Stars then the API will return a successful but empty response."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view full response"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyUserCollectiblesRetrieve": []\n  }\n}\n')))),(0,n.kt)("h2",{id:"input-parameters"},"Input Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"operationName"),(0,n.kt)("td",{parentName:"tr",align:null},"metGetUserCollectibles")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"variables"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{"includeDisplayItems":false}'))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"extensions"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},'{"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}'))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Property"),(0,n.kt)("th",{parentName:"tr",align:null},"Parent Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Values"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"includeDisplayItems"),(0,n.kt)("td",{parentName:"tr",align:null},"variables"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"true"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"false")),(0,n.kt)("td",{parentName:"tr",align:null},"False excludes collectibles which are selected for display on the users display case",(0,n.kt)("br",null),"True returns all earned collectibles"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,n.kt)("h2",{id:"output-json-response"},"Output JSON Response"),(0,n.kt)("p",null,"A JSON response is returned. The following are returned under the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," attribute."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"loyaltyUserCollectiblesRetrieve"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyUserCollectible"},"JSON object",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"},"LoyaltyUserCollectible"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Contains the users collectibles")))),(0,n.kt)("h3",{id:"m-json-object-LoyaltyUserCollectible"},"LoyaltyUserCollectible JSON object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"__typename"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"LoyaltyUserCollectible")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"assets"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#m-json-object-Media-collectible"},"JSON object",(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"a"},"Media"))),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Media associated with the collectible (images, video)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"id"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"4aaf72d0-ceeb-57ab-ad13-09e4ee36ae2e")),(0,n.kt)("td",{parentName:"tr",align:null},"GUID for the collectible")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Star Gazer Telescope")),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the collectible")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rarity"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"COMMON"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"UNCOMMON"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"RARE"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"LEGENDARY")),(0,n.kt)("td",{parentName:"tr",align:null},"Rarity of the collectible")))),(0,n.kt)("h3",{id:"m-json-object-Media-collectible"},"Media (Collectible) JSON object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"__typename"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"Media")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"type"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"IMAGE"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"VIDEO")),(0,n.kt)("td",{parentName:"tr",align:null},"The media type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"url"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_408_1664306310803.png"),(0,n.kt)("br",null),(0,n.kt)("inlineCode",{parentName:"td"},"https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_408_1662591675454.mp4")),(0,n.kt)("td",{parentName:"tr",align:null},"URL for the media")))),(0,n.kt)("h2",{id:"examples-with-responses"},"Examples with Responses"),(0,n.kt)("h3",{id:"example-1---retrieve-all-collectibles-for-the-authenticating-account"},"Example 1 - Retrieve all collectibles for the authenticating account"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"example1-encoded-url",label:"Encoded URL",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables=%7B%22includeDisplayItems%22%3Atrue%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2235e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba%22%7D%7D\n"))),(0,n.kt)(i.Z,{value:"example1-raw-url",label:"Raw URL",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":true}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}\n'))),(0,n.kt)(i.Z,{value:"example1-raw-pwsh",label:"PowerShell",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See ",(0,n.kt)("a",{parentName:"em",href:"../query-api"},"using PowerShell to query the API"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Uri \'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":true}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}\' -Authentication Bearer -Token $token\n')))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view full JSON response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyUserCollectiblesRetrieve": [\n      {\n        "__typename": "LoyaltyUserCollectible",\n        "assets": [\n          {\n            "__typename": "Media",\n            "type": "IMAGE",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_408_1664306310803.png"\n          },\n          {\n            "__typename": "Media",\n            "type": "VIDEO",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_408_1662591675454.mp4"\n          }\n        ],\n        "id": "4aaf72d0-ceeb-57ab-ad13-09e4ee36ae2e",\n        "name": "Star Gazer Telescope",\n        "rarity": "COMMON"\n      }\n    ]\n  }\n}\n'))),(0,n.kt)("h3",{id:"example-2---retrieve-collectibles-excluding-those-on-the-display-case-for-the-authenticating-account"},"Example 2 - Retrieve collectibles excluding those on the display case for the authenticating account"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"example2-encoded-url",label:"Encoded URL",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables=%7B%22includeDisplayItems%22%3Afalse%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%2235e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba%22%7D%7D\n"))),(0,n.kt)(i.Z,{value:"example2-raw-url",label:"Raw URL",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}\n'))),(0,n.kt)(i.Z,{value:"example2-raw-pwsh",label:"PowerShell",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"See ",(0,n.kt)("a",{parentName:"em",href:"../query-api"},"using PowerShell to query the API"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Uri \'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetUserCollectibles&variables={"includeDisplayItems":false}&extensions={"persistedQuery":{"version":1,"sha256Hash":"35e365310aa44393f6cdc5d6b53127e137a9a87749692ca3c4c3c49dca92c4ba"}}\' -Authentication Bearer -Token $token\n')))),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Click to view full JSON response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyUserCollectiblesRetrieve": []\n  }\n}\n'))))}m.isMDXComponent=!0}}]);