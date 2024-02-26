"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=l,y=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(7462),l=a(7294),r=a(6010),i=a(2466),s=a(6775),o=a(1980),p=a(7392),u=a(12);function m(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function c(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[i,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[o,p]=y({queryString:a,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=o??m;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),b(e)}),[p,b,r]),tabValues:r}}var k=a(2389);const N="tabList__CuJ",h="tabItem_LNqP";function g(e){let{className:t,block:a,selectedValue:s,selectValue:o,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:m}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==s&&(m(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:c},i,{className:(0,r.Z)("tabs__item",h,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function f(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=b(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",N)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(f,(0,n.Z)({},e,t)))}function C(e){const t=(0,k.Z)();return l.createElement(v,(0,n.Z)({key:String(t)},e))}},4859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),r=a(4866),i=a(5162);const s={sidebar_position:3,title:"User Display Case",description:"Retrieve a users collectibles display case"},o="User Display Case",p={unversionedId:"user/user-display-case",id:"user/user-display-case",title:"User Display Case",description:"Retrieve a users collectibles display case",source:"@site/docs/user/user-display-case.md",sourceDirName:"user",slug:"/user/user-display-case",permalink:"/PlayStation-Stars/user/user-display-case",draft:!1,editUrl:"https://github.com/andshrew/PlayStation-Stars/tree/main/website/docs/user/user-display-case.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"User Display Case",description:"Retrieve a users collectibles display case"},sidebar:"tutorialSidebar",previous:{title:"User Points History",permalink:"/PlayStation-Stars/user/user-points-history"},next:{title:"User Earned Collectibles",permalink:"/PlayStation-Stars/user/user-earned-collectibles"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"Input Parameters",id:"input-parameters",level:2},{value:"Output JSON Response",id:"output-json-response",level:2},{value:"LoyaltyCollectibleDisplay JSON object",id:"m-json-object-LoyaltyCollectibleDisplay",level:3},{value:"LoyaltyCollectibleDisplayItem JSON object",id:"m-json-object-LoyaltyCollectibleDisplayItem",level:3},{value:"Media (Collectible) JSON object",id:"m-json-object-Media-collectible",level:3},{value:"LoyaltyCollectibleScene JSON object",id:"m-json-object-LoyaltyCollectibleScene",level:3},{value:"Media (Scene) JSON object",id:"m-json-object-Media-scene",level:3},{value:"Examples with Responses",id:"examples-with-responses",level:2},{value:"Example 1 - Retrieve display case for the authenticating account",id:"example-1---retrieve-display-case-for-the-authenticating-account",level:3},{value:"Example 2 - Retrieve display case for user account with accountId <em>0000000000000000000</em>",id:"example-2---retrieve-display-case-for-user-account-with-accountid-0000000000000000000",level:3}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"user-display-case"},"User Display Case"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Requests to this endpoint will retrieve a users collectibles display case. This includes details of the selected display case and up to 12 collectible items they have chosen to display on it."),(0,l.kt)("p",null,"The endpoint can query the authenticating account, or it can query another user account (providing that the privacy settings on the other account allow it)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you query an account which has either not enrolled with PlayStation Stars or has not given the authenticating account permission to view their PlayStation Stars Level or Display Case then the API will return a successful response with an error object contained within."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view full error response"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "User not found",\n      "type": "NimbusNormalizedError",\n      "error": {\n        "reason": "NotFound",\n        "source": "-1",\n        "code": -1,\n        "message": "User not found",\n        "referenceId": "4ba3b58b-902f-4eb7-9247-66c40700cda7"\n      },\n      "statusCode": 404,\n      "errorCode": -1,\n      "humanReadableCode": "",\n      "humanReadableValidationErrors": [],\n      "apiName": "getCollectiblesDisplay"\n    }\n  ],\n  "data": {\n    "loyaltyCollectibleDisplayRetrieve": null\n  }\n}\n')))),(0,l.kt)("h2",{id:"input-parameters"},"Input Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operationName"),(0,l.kt)("td",{parentName:"tr",align:null},"metGetCollectibleDisplay")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variables"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"accountId":"me"}'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extensions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"persistedQuery":{"version":1,"sha256Hash":"0299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e"}}'))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Parent Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"accountId"),(0,l.kt)("td",{parentName:"tr",align:null},"variables"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"me"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"12340..")),(0,l.kt)("td",{parentName:"tr",align:null},"The Id of the account to be queried",(0,l.kt)("br",null),"Use ",(0,l.kt)("inlineCode",{parentName:"td"},"me")," for the authenticating account"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,l.kt)("h2",{id:"output-json-response"},"Output JSON Response"),(0,l.kt)("p",null,"A JSON response is returned. The following are returned under the ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," attribute."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loyaltyCollectibleDisplayRetrieve"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyCollectibleDisplay"},"JSON object",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"LoyaltyCollectibleDisplay"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Contains a collection of objects for the users display case and the collectibles they have chosen to display on it")))),(0,l.kt)("h3",{id:"m-json-object-LoyaltyCollectibleDisplay"},"LoyaltyCollectibleDisplay JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LoyaltyCollectibleDisplay")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collectibles"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyCollectibleDisplayItem"},"JSON objects",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"LoyaltyCollectibleDisplayItem"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 12 collectibles in the users display case")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isEmpty"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"True if the user is not displaying any collectibles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isFull"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"True if the user is displaying 12 collectibles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selectedScene"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyCollectibleScene"},"JSON object",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"LoyaltyCollectibleScene"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Users collectibles display case (images only)")))),(0,l.kt)("h3",{id:"m-json-object-LoyaltyCollectibleDisplayItem"},"LoyaltyCollectibleDisplayItem JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LoyaltyCollectibleDisplayItem")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assets"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#m-json-object-Media-collectible"},"JSON object",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"Media"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Media associated with the collectible (images, video)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"empty-slot-0"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"4aaf72d0-ceeb-57ab-ad13-09e4ee36ae2e")),(0,l.kt)("td",{parentName:"tr",align:null},"GUID for the displayed collectible",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"empty-slot-x")," if the user has not set a collectible in this display position")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isEmpty"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"True if the user has not set a collectible in this display position")))),(0,l.kt)("h3",{id:"m-json-object-Media-collectible"},"Media (Collectible) JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Media")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IMAGE"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"VIDEO")),(0,l.kt)("td",{parentName:"tr",align:null},"The media type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_408_1664306310803.png"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_408_1662591675454.mp4")),(0,l.kt)("td",{parentName:"tr",align:null},"URL for the media")))),(0,l.kt)("h3",{id:"m-json-object-LoyaltyCollectibleScene"},"LoyaltyCollectibleScene JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LoyaltyCollectibleScene")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assets"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#m-json-object-Media-scene"},"JSON object",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"Media"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Media associated with the collectibles display case (scene)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"a68f1a18-de00-429d-b4dc-d0bc66b748c7")),(0,l.kt)("td",{parentName:"tr",align:null},"GUID for the scene")))),(0,l.kt)("h3",{id:"m-json-object-Media-scene"},"Media (Scene) JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Media")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"role"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"BACKGROUND"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"TILE"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"PREVIEW")),(0,l.kt)("td",{parentName:"tr",align:null},"What the media is used for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/ice_background.png")),(0,l.kt)("td",{parentName:"tr",align:null},"URL for the media")))),(0,l.kt)("h2",{id:"examples-with-responses"},"Examples with Responses"),(0,l.kt)("h3",{id:"example-1---retrieve-display-case-for-the-authenticating-account"},"Example 1 - Retrieve display case for the authenticating account"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example1-encoded-url",label:"Encoded URL",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables=%7B%22accountId%22%3A%22me%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%220299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e%22%7D%7D\n"))),(0,l.kt)(i.Z,{value:"example1-raw-url",label:"Raw URL",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables={"accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"0299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e"}}\n'))),(0,l.kt)(i.Z,{value:"example1-raw-pwsh",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#powershell-7"},"using PowerShell to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Uri \'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables={"accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"0299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e"}}\' -Authentication Bearer -Token $token\n')))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view full JSON response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyCollectibleDisplayRetrieve": {\n      "__typename": "LoyaltyCollectibleDisplay",\n      "collectibles": [\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": [\n            {\n              "__typename": "Media",\n              "type": "IMAGE",\n              "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_408_1664306310803.png"\n            },\n            {\n              "__typename": "Media",\n              "type": "VIDEO",\n              "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_408_1662591675454.mp4"\n            }\n          ],\n          "id": "4aaf72d0-ceeb-57ab-ad13-09e4ee36ae2e",\n          "isEmpty": false\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-1",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-2",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-3",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-4",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-5",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-6",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-7",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-8",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-9",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-10",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-11",\n          "isEmpty": true\n        }\n      ],\n      "isEmpty": false,\n      "isFull": false,\n      "selectedScene": {\n        "__typename": "LoyaltyCollectibleScene",\n        "assets": [\n          {\n            "__typename": "Media",\n            "role": "BACKGROUND",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/hotel_scene_beta.png"\n          },\n          {\n            "__typename": "Media",\n            "role": "TILE",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/hotel_tile.png"\n          },\n          {\n            "__typename": "Media",\n            "role": "PREVIEW",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/hotel_preview_beta.png"\n          }\n        ],\n        "id": "277d9b04-912d-4231-8ed1-9b3c70a40e1f"\n      }\n    }\n  }\n}\n'))),(0,l.kt)("h3",{id:"example-2---retrieve-display-case-for-user-account-with-accountid-0000000000000000000"},"Example 2 - Retrieve display case for user account with accountId ",(0,l.kt)("em",{parentName:"h3"},"0000000000000000000")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example2-encoded-url",label:"Encoded URL",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables=%7B%22accountId%22%3A%220000000000000000000%22%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%220299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e%22%7D%7D\n"))),(0,l.kt)(i.Z,{value:"example2-raw-url",label:"Raw URL",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables={"accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"0299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e"}}\n'))),(0,l.kt)(i.Z,{value:"example2-raw-pwsh",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#powershell-7"},"using PowerShell to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Uri \'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCollectibleDisplay&variables={"accountId":"0000000000000000000"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"0299b65abf4385e097e6848d14b0423df5464632855c330bdd002dfc42f4c71e"}}\' -Authentication Bearer -Token $token\n')))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view full JSON response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyCollectibleDisplayRetrieve": {\n      "__typename": "LoyaltyCollectibleDisplay",\n      "collectibles": [\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-0",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-1",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-2",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-3",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-4",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-5",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-6",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-7",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-8",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-9",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-10",\n          "isEmpty": true\n        },\n        {\n          "__typename": "LoyaltyCollectibleDisplayItem",\n          "assets": null,\n          "id": "empty-slot-11",\n          "isEmpty": true\n        }\n      ],\n      "isEmpty": true,\n      "isFull": false,\n      "selectedScene": {\n        "__typename": "LoyaltyCollectibleScene",\n        "assets": [\n          {\n            "__typename": "Media",\n            "role": "BACKGROUND",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/ice_background.png"\n          },\n          {\n            "__typename": "Media",\n            "role": "TILE",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/Ice_Tile.png"\n          },\n          {\n            "__typename": "Media",\n            "role": "PREVIEW",\n            "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectibleScene/image/Ice_Preview.png"\n          }\n        ],\n        "id": "a68f1a18-de00-429d-b4dc-d0bc66b748c7"\n      }\n    }\n  }\n}\n'))))}d.isMDXComponent=!0}}]);