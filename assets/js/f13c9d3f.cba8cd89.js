"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[815],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,y=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(y,o(o({ref:t},u),{},{components:a})):n.createElement(y,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6775),s=a(1980),p=a(7392),u=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=c(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=y({queryString:a,groupId:n}),[d,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),h=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var h=a(2389);const b="tabList__CuJ",N="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(d(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},o,{className:(0,l.Z)("tabs__item",N,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},9022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={sidebar_position:2,title:"User Points History",description:"Retrieve a summary of points earned and redeemed"},s="User Points History",p={unversionedId:"user/user-points-history",id:"user/user-points-history",title:"User Points History",description:"Retrieve a summary of points earned and redeemed",source:"@site/docs/user/user-points-history.md",sourceDirName:"user",slug:"/user/user-points-history",permalink:"/PlayStation-Stars/user/user-points-history",draft:!1,editUrl:"https://github.com/andshrew/PlayStation-Stars/tree/main/website/docs/user/user-points-history.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"User Points History",description:"Retrieve a summary of points earned and redeemed"},sidebar:"tutorialSidebar",previous:{title:"User Account Summary",permalink:"/PlayStation-Stars/user/user-summary"},next:{title:"User Display Case",permalink:"/PlayStation-Stars/user/user-display-case"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Input Parameters",id:"input-parameters",level:2},{value:"Output JSON Response",id:"output-json-response",level:2},{value:"LoyaltyPointHistoryRecord JSON object",id:"m-json-object-LoyaltyPointHistoryRecord",level:3},{value:"LoyaltyRewardRecord JSON object",id:"m-json-object-LoyaltyRewardRecord",level:3},{value:"LoyaltyPurchaseRecord JSON object",id:"m-json-object-LoyaltyPurchaseRecord",level:3},{value:"Examples with Responses",id:"examples-with-responses",level:2},{value:"Example 1 - Retrieve points history for the authenticating account (Purchase, Campaign and Wallet Credit)",id:"example-1---retrieve-points-history-for-the-authenticating-account-purchase-campaign-and-wallet-credit",level:3},{value:"Example 2 - Retrieve points history for the authenticating account (Purchase and Collectible)",id:"example-2---retrieve-points-history-for-the-authenticating-account-purchase-and-collectible",level:3}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"user-points-history"},"User Points History"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Requests to this endpoint will retrieve a summary of the reward points which a user has earned from service. It includes points which have been earned from the completion of campaigns or from purchases from the PlayStation Store, and points which have been redeemed either on collectibles or rewards like PlayStation Store credit and games."),(0,r.kt)("p",null,"The endpoint can query the authenticating account only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you query with an account which has not enrolled with PlayStation Stars then the API will return a successful but empty response."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view full response"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyPointHistoryRetrieve": []\n  }\n}\n')))),(0,r.kt)("h2",{id:"input-parameters"},"Input Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"operationName"),(0,r.kt)("td",{parentName:"tr",align:null},"metGetPointsHistory")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variables"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"extensions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'{"persistedQuery":{"version":1,"sha256Hash":"302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c"}}'))))),(0,r.kt)("h2",{id:"output-json-response"},"Output JSON Response"),(0,r.kt)("p",null,"A JSON response is returned. The following are returned under the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," attribute."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loyaltyPointHistoryRetrieve"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyPointHistoryRecord"},"JSON object",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"LoyaltyPointHistoryRecord"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Contains a collection of objects which detail each time the account has earned or redeemed points")))),(0,r.kt)("h3",{id:"m-json-object-LoyaltyPointHistoryRecord"},"LoyaltyPointHistoryRecord JSON object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"__typename"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LoyaltyPointHistoryRecord")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"displayPoints"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"700"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-1,250")),(0,r.kt)("td",{parentName:"tr",align:null},"Points earned or redeemed (string formatted)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventDateTime"),(0,r.kt)("td",{parentName:"tr",align:null},"Date (UTC)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2022-11-02T20:21:28.891Z")),(0,r.kt)("td",{parentName:"tr",align:null},"Date of the transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"eventType"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PURCHASE"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"WALLET_CREDIT"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"CAMPAIGN"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"COLLECTIBLE")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of transaction")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"points"),(0,r.kt)("td",{parentName:"tr",align:null},"Numeric"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"700"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"-1250")),(0,r.kt)("td",{parentName:"tr",align:null},"Points earned or redeemed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"referenceData"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyRewardRecord"},"JSON object",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"LoyaltyRewardRecord")),(0,r.kt)("br",null),(0,r.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyPurchaseRecord"},"JSON object",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"LoyaltyPurchaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Data associated with how the points were earned or redeemed")))),(0,r.kt)("h3",{id:"m-json-object-LoyaltyRewardRecord"},"LoyaltyRewardRecord JSON object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"__typename"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LoyaltyRewardRecord")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"8fc3abdc-bf5b-5f7f-8a44-a9c2c50837b7"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"7a258750-c495-5a79-a94d-5e450f4bc2bc")),(0,r.kt)("td",{parentName:"tr",align:null},"GUID of the reward associated with the points (usually a campaign or collectible)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Play Wherever"),(0,r.kt)("br",null),(0,r.kt)("code",null,"Hans ","|"," tortured artist capsule")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the reward")))),(0,r.kt)("h3",{id:"m-json-object-LoyaltyPurchaseRecord"},"LoyaltyPurchaseRecord JSON object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"__typename"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LoyaltyPurchaseRecord")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"000000000000")),(0,r.kt)("td",{parentName:"tr",align:null},"PlayStation Store transaction number associated with the points")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"God of War Ragnar\xf6k"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the PlayStation Store product")))),(0,r.kt)("h2",{id:"examples-with-responses"},"Examples with Responses"),(0,r.kt)("h3",{id:"example-1---retrieve-points-history-for-the-authenticating-account-purchase-campaign-and-wallet-credit"},"Example 1 - Retrieve points history for the authenticating account (Purchase, Campaign and Wallet Credit)"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"example1-encoded-url",label:"Encoded URL",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c%22%7D%7D\n"))),(0,r.kt)(o.Z,{value:"example1-raw-url",label:"Raw URL",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c"}}\n'))),(0,r.kt)(o.Z,{value:"example1-raw-pwsh",label:"PowerShell",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"../query-api#powershell-7"},"using PowerShell to query the API"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Uri \'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c"}}\' -Authentication Bearer -Token $token\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view full JSON response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyPointHistoryRetrieve": [\n      {\n        "__typename": "LoyaltyPointHistoryRecord",\n        "displayPoints": "700",\n        "eventDateTime": "2022-10-18T16:20:08.672Z",\n        "eventType": "PURCHASE",\n        "points": 700,\n        "referenceData": {\n          "__typename": "LoyaltyPurchaseRecord",\n          "id": "000000000000",\n          "name": "Call of Duty\xae: Modern Warfare\xae II - Cross-Gen Bundle"\n        }\n      },\n      {\n        "__typename": "LoyaltyPointHistoryRecord",\n        "displayPoints": "75",\n        "eventDateTime": "2022-11-01T13:45:05.822851Z",\n        "eventType": "CAMPAIGN",\n        "points": 75,\n        "referenceData": {\n          "__typename": "LoyaltyRewardRecord",\n          "id": "8fc3abdc-bf5b-5f7f-8a44-a9c2c50837b7",\n          "name": "Play wherever"\n        }\n      },\n      {\n        "__typename": "LoyaltyPointHistoryRecord",\n        "displayPoints": "700",\n        "eventDateTime": "2022-11-02T20:21:28.891Z",\n        "eventType": "PURCHASE",\n        "points": 700,\n        "referenceData": {\n          "__typename": "LoyaltyPurchaseRecord",\n          "id": "000000000000",\n          "name": "God of War Ragnar\xf6k"\n        }\n      },\n      {\n        "__typename": "LoyaltyPointHistoryRecord",\n        "displayPoints": "-1,250",\n        "eventDateTime": "2022-11-02T22:24:08.201225Z",\n        "eventType": "WALLET_CREDIT",\n        "points": -1250,\n        "referenceData": {\n          "__typename": "LoyaltyPurchaseRecord",\n          "id": "000000000000",\n          "name": null\n        }\n      }\n    ]\n  }\n}\n'))),(0,r.kt)("h3",{id:"example-2---retrieve-points-history-for-the-authenticating-account-purchase-and-collectible"},"Example 2 - Retrieve points history for the authenticating account (Purchase and Collectible)"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"example2-encoded-url",label:"Encoded URL",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c%22%7D%7D\n"))),(0,r.kt)(o.Z,{value:"example2-raw-url",label:"Raw URL",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c"}}\n'))),(0,r.kt)(o.Z,{value:"example2-raw-pwsh",label:"PowerShell",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ",(0,r.kt)("a",{parentName:"em",href:"../query-api#powershell-7"},"using PowerShell to query the API"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Uri \'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetPointsHistory&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"302481c4156ec3f64332bf4b76251597eb30825a79e2736641737bc3af77755c"}}\' -Authentication Bearer -Token $token\n')))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view full JSON response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyPointHistoryRetrieve": [\n      {\n        "__typename": "LoyaltyPointHistoryRecord",\n        "displayPoints": "450",\n        "eventDateTime": "2022-10-13T12:37:08.54Z",\n        "eventType": "PURCHASE",\n        "points": 450,\n        "referenceData": {\n          "__typename": "LoyaltyPurchaseRecord",\n          "id": "000000000000",\n          "name": "3,280 Genesis Crystals"\n        }\n      },\n      {\n        "__typename": "LoyaltyPointHistoryRecord",\n        "displayPoints": "-200",\n        "eventDateTime": "2022-10-29T21:41:32.252532Z",\n        "eventType": "COLLECTIBLE",\n        "points": -200,\n        "referenceData": {\n          "__typename": "LoyaltyRewardRecord",\n          "id": "7a258750-c495-5a79-a94d-5e450f4bc2bc",\n          "name": "Hans | tortured artist capsule"\n        }\n      }\n    ]\n  }\n}\n'))))}m.isMDXComponent=!0}}]);