"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[142],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>c});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=m(a),c=l,g=d["".concat(o,".").concat(c)]||d[c]||u[c]||r;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},e)}},4866:(t,e,a)=>{a.d(e,{Z:()=>C});var n=a(7462),l=a(7294),r=a(6010),i=a(2466),p=a(6775),o=a(1980),m=a(7392),s=a(12);function u(t){return function(t){return l.Children.map(t,(t=>{if(!t||(0,l.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:l}}=t;return{value:e,label:a,attributes:n,default:l}}))}function d(t){const{values:e,children:a}=t;return(0,l.useMemo)((()=>{const t=e??u(a);return function(t){const e=(0,m.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function c(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function g(t){let{queryString:e=!1,groupId:a}=t;const n=(0,p.k6)(),r=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,o._X)(r),(0,l.useCallback)((t=>{if(!r)return;const e=new URLSearchParams(n.location.search);e.set(r,t),n.replace({...n.location,search:e.toString()})}),[r,n])]}function k(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,r=d(t),[i,p]=(0,l.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!c({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:r}))),[o,m]=g({queryString:a,groupId:n}),[u,k]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,r]=(0,s.Nk)(a);return[n,(0,l.useCallback)((t=>{a&&r.set(t)}),[a,r])]}({groupId:n}),N=(()=>{const t=o??u;return c({value:t,tabValues:r})?t:null})();(0,l.useLayoutEffect)((()=>{N&&p(N)}),[N]);return{selectedValue:i,selectValue:(0,l.useCallback)((t=>{if(!c({value:t,tabValues:r}))throw new Error(`Can't select invalid tab value=${t}`);p(t),m(t),k(t)}),[m,k,r]),tabValues:r}}var N=a(2389);const b="tabList__CuJ",y="tabItem_LNqP";function h(t){let{className:e,block:a,selectedValue:p,selectValue:o,tabValues:m}=t;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=t=>{const e=t.currentTarget,a=s.indexOf(e),n=m[a].value;n!==p&&(u(e),o(n))},c=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const a=s.indexOf(t.currentTarget)+1;e=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(t.currentTarget)-1;e=s[a]??s[s.length-1];break}}e?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},e)},m.map((t=>{let{value:e,label:a,attributes:i}=t;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:p===e?0:-1,"aria-selected":p===e,key:e,ref:t=>s.push(t),onKeyDown:c,onClick:d},i,{className:(0,r.Z)("tabs__item",y,i?.className,{"tabs__item--active":p===e})}),a??e)})))}function f(t){let{lazy:e,children:a,selectedValue:n}=t;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const t=r.find((t=>t.props.value===n));return t?(0,l.cloneElement)(t,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function v(t){const e=k(t);return l.createElement("div",{className:(0,r.Z)("tabs-container",b)},l.createElement(h,(0,n.Z)({},t,e)),l.createElement(f,(0,n.Z)({},t,e)))}function C(t){const e=(0,N.Z)();return l.createElement(v,(0,n.Z)({key:String(e)},t))}},3943:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>m,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),r=a(4866),i=a(5162);const p={sidebar_position:1,title:"Campaigns",description:"Retrieve available campaigns"},o="Campaigns",m={unversionedId:"service/campaigns",id:"service/campaigns",title:"Campaigns",description:"Retrieve available campaigns",source:"@site/docs/service/campaigns.md",sourceDirName:"service",slug:"/service/campaigns",permalink:"/PlayStation-Stars/service/campaigns",draft:!1,editUrl:"https://github.com/andshrew/PlayStation-Stars/tree/main/website/docs/service/campaigns.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Campaigns",description:"Retrieve available campaigns"},sidebar:"tutorialSidebar",previous:{title:"Service Endpoints",permalink:"/PlayStation-Stars/category/service-endpoints"},next:{title:"Campaign Detail",permalink:"/PlayStation-Stars/service/campaign-detail"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Input Parameters",id:"input-parameters",level:2},{value:"Output JSON Response",id:"output-json-response",level:2},{value:"LoyaltyCampaignGroups JSON object",id:"m-json-object-LoyaltyCampaignGroups",level:3},{value:"LoyaltyCampaign JSON object",id:"m-json-object-LoyaltyCampaign",level:3},{value:"Media (Campaign) JSON object",id:"m-json-object-Media-campaign",level:3},{value:"LoyaltyCampaignCollectible JSON object",id:"m-json-object-LoyaltyCampaignCollectible",level:3},{value:"Media (Collectible) JSON object",id:"m-json-object-Media-collectible",level:3},{value:"Examples with Responses",id:"examples-with-responses",level:2},{value:"Example 1 - Retrieve all campaigns for the authenticating account",id:"example-1---retrieve-all-campaigns-for-the-authenticating-account",level:3}],d={toc:u};function c(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"campaigns"},"Campaigns"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Requests to this endpoint will retrieve campaigns which are available. It additionally retrieves information about the users progress."),(0,l.kt)("p",null,"Campaigns are challenges which users can complete to earn rewards."),(0,l.kt)("p",null,"Use the ",(0,l.kt)("a",{parentName:"p",href:"/PlayStation-Stars/service/campaign-detail"},"campaign detail")," endpoint to retrieve additional information about a specific campaign including the tasks required to complete it."),(0,l.kt)("p",null,"Campaigns which involve playing specific games are region locked. The version of the game being played must be from the same region as that of the account completing the campaign (ie. if you bought games with a US account but played them with an EU account then these games would not count towards progress on the EU accounts campaigns)."),(0,l.kt)("p",null,"The endpoint can query the authenticating account only."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCampaignGroup\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"If you query with an account which has not enrolled with PlayStation Stars then the API will return a successful response with an error object contained within."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view full response"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "User is not enrolled inside the program!",\n      "type": "NimbusNormalizedError",\n      "error": {\n        "reason": "BadRequest",\n        "code": -1,\n        "source": "-1",\n        "message": "User is not enrolled inside the program!",\n        "referenceId": "f8f43138-2a18-464e-8cdb-90c3f15b3639"\n      },\n      "statusCode": 400,\n      "errorCode": -1,\n      "humanReadableCode": "",\n      "humanReadableValidationErrors": [],\n      "apiName": "getCampaignGroups"\n    }\n  ],\n  "data": {\n    "loyaltyCampaignGroupRetrieve": null\n  }\n}\n')))),(0,l.kt)("h2",{id:"input-parameters"},"Input Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"operationName"),(0,l.kt)("td",{parentName:"tr",align:null},"metGetCampaignGroup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"variables"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"{}"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extensions"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'{"persistedQuery":{"version":1,"sha256Hash":"eabc9a2d92e6c8604eb611c22bbc0f8ffce673dee29b0c1f82040f5a4918264b"}}'))))),(0,l.kt)("h2",{id:"output-json-response"},"Output JSON Response"),(0,l.kt)("p",null,"A JSON response is returned. The following are returned under the ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," attribute."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loyaltyCampaignGroupRetrieve"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyCampaignGroups"},"JSON object",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"LoyaltyCampaignGroups"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the campaign groups which are available")))),(0,l.kt)("h3",{id:"m-json-object-LoyaltyCampaignGroups"},"LoyaltyCampaignGroups JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LoyaltyCampaignGroups")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaigns"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyCampaign"},"JSON object",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"LoyaltyCampaign"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Contains the campaigns which are available within this group")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Default")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"m-json-object-LoyaltyCampaign"},"LoyaltyCampaign JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LoyaltyCampaign")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"campaignRewardType"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"POINTS"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"COLLECTIBLE")),(0,l.kt)("td",{parentName:"tr",align:null},"Type of reward available")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collectible"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null"),(0,l.kt)("br",null),(0,l.kt)("a",{parentName:"td",href:"#m-json-object-LoyaltyCampaignCollectible"},"JSON object",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"LoyaltyCampaignCollectible"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")," if the reward type is not collectible")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Grab your next favorite game! Buy one of these select games from PlayStation store.")),(0,l.kt)("td",{parentName:"tr",align:null},"Description for the campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"displayPoints"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'""'),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},'"50"')),(0,l.kt)("td",{parentName:"tr",align:null},"Reward points available for completion",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},'""')," if reward points are not awarded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endDate"),(0,l.kt)("td",{parentName:"tr",align:null},"Date (UTC)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-10-31T15:59:00.000000Z")),(0,l.kt)("td",{parentName:"tr",align:null},"Date the campaign ends")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"162f269d-1ed9-5647-a015-30cf1b76a766")),(0,l.kt)("td",{parentName:"tr",align:null},"GUID for the campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"images"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#m-json-object-Media-campaign"},"JSON object",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"Media"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Media associated with the campaign (images, video)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"PlayStation Store Picks")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"productId"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"HP0700-PPSA05164_00-SDGUNBATTLEA0000")),(0,l.kt)("td",{parentName:"tr",align:null},"PlayStation Store Product Id associated with the campaign",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"null")," if not associated with a store product")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"progress"),(0,l.kt)("td",{parentName:"tr",align:null},"Numeric"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"0"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"100")),(0,l.kt)("td",{parentName:"tr",align:null},"Users progress towards completing the campaign")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startDate"),(0,l.kt)("td",{parentName:"tr",align:null},"Date (UTC)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"2022-09-12T16:00:00.000000Z")),(0,l.kt)("td",{parentName:"tr",align:null},"Date the campaign begins")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"status"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NOT_REGISTERED"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"AUTO_REGISTERED"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"REGISTERED"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"IN_PROGRESS"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"EXPIRED")),(0,l.kt)("td",{parentName:"tr",align:null},"Users status for the campaign")))),(0,l.kt)("h3",{id:"m-json-object-Media-campaign"},"Media (Campaign) JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Media")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"altText"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"role"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IMAGE"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"TILE")),(0,l.kt)("td",{parentName:"tr",align:null},"What the media is used for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IMAGE")),(0,l.kt)("td",{parentName:"tr",align:null},"The media type",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"Some entries return an MP4 video even though the type is IMAGE!"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://sky-assets.api.playstation.com/sky/p1-np/...")),(0,l.kt)("td",{parentName:"tr",align:null},"URL for the media")))),(0,l.kt)("h3",{id:"m-json-object-LoyaltyCampaignCollectible"},"LoyaltyCampaignCollectible JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LoyaltyCampaignCollectible")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"assets"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#m-json-object-Media-collectible"},"JSON object",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"a"},"Media"))),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Media associated with the collectible (images, video)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"4a9d9d67-e29f-598c-bb57-b6689456aa8c")),(0,l.kt)("td",{parentName:"tr",align:null},"GUID for the collectible")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Novelty Toy Fight Trophy")),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the collectible")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rarityType"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"COMMON"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"UNCOMMON"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"RARE"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"HEROIC"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"LEGENDARY")),(0,l.kt)("td",{parentName:"tr",align:null},"Rarity of the collectible")))),(0,l.kt)("h3",{id:"m-json-object-Media-collectible"},"Media (Collectible) JSON object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Response"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"__typename"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Media")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"altText"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"role"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IMAGE"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"VIDEO")),(0,l.kt)("td",{parentName:"tr",align:null},"What the media is used for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"IMAGE"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"VIDEO")),(0,l.kt)("td",{parentName:"tr",align:null},"The media type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_406_1664306813863.png"),(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_406_1662591783851.mp4")),(0,l.kt)("td",{parentName:"tr",align:null},"URL for the media")))),(0,l.kt)("h2",{id:"examples-with-responses"},"Examples with Responses"),(0,l.kt)("h3",{id:"example-1---retrieve-all-campaigns-for-the-authenticating-account"},"Example 1 - Retrieve all campaigns for the authenticating account"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"example1-encoded-url",label:"Encoded URL",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCampaignGroup&variables=%7B%7D&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%22eabc9a2d92e6c8604eb611c22bbc0f8ffce673dee29b0c1f82040f5a4918264b%22%7D%7D\n"))),(0,l.kt)(i.Z,{value:"example1-raw-url",label:"Raw URL",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#web-browser"},"using a Web Browser to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCampaignGroup&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"eabc9a2d92e6c8604eb611c22bbc0f8ffce673dee29b0c1f82040f5a4918264b"}}\n'))),(0,l.kt)(i.Z,{value:"example1-raw-pwsh",label:"PowerShell",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"See ",(0,l.kt)("a",{parentName:"em",href:"../query-api#powershell-7"},"using PowerShell to query the API"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Uri \'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetCampaignGroup&variables={}&extensions={"persistedQuery":{"version":1,"sha256Hash":"eabc9a2d92e6c8604eb611c22bbc0f8ffce673dee29b0c1f82040f5a4918264b"}}\' -Authentication Bearer -Token $token\n')))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to view full JSON response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loyaltyCampaignGroupRetrieve": [\n      {\n        "__typename": "LoyaltyCampaignGroups",\n        "campaigns": [\n          {\n            "__typename": "LoyaltyCampaign",\n            "campaignRewardType": "POINTS",\n            "collectible": null,\n            "description": "Grab your next favorite game! Buy one of these select games from PlayStation store.",\n            "displayPoints": "50",\n            "endDate": "2022-10-31T15:59:00.000000Z",\n            "id": "162f269d-1ed9-5647-a015-30cf1b76a766",\n            "images": [\n              {\n                "__typename": "Media",\n                "altText": null,\n                "role": "IMAGE",\n                "type": "IMAGE",\n                "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_1474_1662756973941.jpg"\n              }\n            ],\n            "name": "PlayStation Store Picks",\n            "productId": "HP0700-PPSA05164_00-SDGUNBATTLEA0000",\n            "progress": 0,\n            "startDate": "2022-09-12T16:00:00.000000Z",\n            "status": "NOT_REGISTERED"\n          },\n          {\n            "__typename": "LoyaltyCampaign",\n            "campaignRewardType": "COLLECTIBLE",\n            "collectible": {\n              "__typename": "LoyaltyCampaignCollectible",\n              "assets": [\n                {\n                  "__typename": "Media",\n                  "altText": null,\n                  "role": "IMAGE",\n                  "type": "IMAGE",\n                  "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_406_1664306813863.png"\n                },\n                {\n                  "__typename": "Media",\n                  "altText": null,\n                  "role": "VIDEO",\n                  "type": "VIDEO",\n                  "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_406_1662591783851.mp4"\n                }\n              ],\n              "id": "4a9d9d67-e29f-598c-bb57-b6689456aa8c",\n              "name": "Novelty Toy Fight Trophy",\n              "rarityType": "UNCOMMON"\n            },\n            "description": "Pick a fight to honor 30 years of Hadoukens.",\n            "displayPoints": "",\n            "endDate": "2022-10-31T15:59:00.000000Z",\n            "id": "23c6b95b-9892-507c-b4b7-c888aacaf9aa",\n            "images": [\n              {\n                "__typename": "Media",\n                "altText": null,\n                "role": "IMAGE",\n                "type": "IMAGE",\n                "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_1570_1663780701598.png"\n              },\n              {\n                "__typename": "Media",\n                "altText": null,\n                "role": "TILE",\n                "type": "IMAGE",\n                "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_406_1664306813863.png"\n              },\n              {\n                "__typename": "Media",\n                "altText": null,\n                "role": "TILE",\n                "type": "IMAGE",\n                "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_406_1662591783851.mp4"\n              }\n            ],\n            "name": "The World Warrior\u2019s Challenge",\n            "productId": null,\n            "progress": 0,\n            "startDate": "2022-09-12T18:00:00.000000Z",\n            "status": "AUTO_REGISTERED"\n          },\n          {\n            "__typename": "LoyaltyCampaign",\n            "campaignRewardType": "COLLECTIBLE",\n            "collectible": {\n              "__typename": "LoyaltyCampaignCollectible",\n              "assets": [\n                {\n                  "__typename": "Media",\n                  "altText": null,\n                  "role": "IMAGE",\n                  "type": "IMAGE",\n                  "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_428_1663345652984.png"\n                },\n                {\n                  "__typename": "Media",\n                  "altText": null,\n                  "role": "VIDEO",\n                  "type": "VIDEO",\n                  "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_428_1663345660772.mp4"\n                }\n              ],\n              "id": "88d25cfa-26ad-572a-9335-a32b9bcabe13",\n              "name": "PlayStation Tech Demo Tyrannosaurus Rex ",\n              "rarityType": "UNCOMMON"\n            },\n            "description": "Happy October! Always good to see you.",\n            "displayPoints": "",\n            "endDate": "2022-10-31T15:59:00.000000Z",\n            "id": "23fc3a5d-34bf-509c-b381-7b40bd8611f3",\n            "images": [\n              {\n                "__typename": "Media",\n                "altText": null,\n                "role": "IMAGE",\n                "type": "IMAGE",\n                "url": "https://sky-assets.api.playstation.com/sky/p1-np/campaign/image/masterImage_image/jpeg,image/png,image/gif_1372_1663708610342.png"\n              },\n              {\n                "__typename": "Media",\n                "altText": null,\n                "role": "TILE",\n                "type": "IMAGE",\n                "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/image/masterImage_png_428_1663345652984.png"\n              },\n              {\n                "__typename": "Media",\n                "altText": null,\n                "role": "TILE",\n                "type": "IMAGE",\n                "url": "https://sky-assets.api.playstation.com/sky/p1-np/collectible/video/video_mp4_428_1663345660772.mp4"\n              }\n            ],\n            "name": "October Check-in",\n            "productId": null,\n            "progress": 0,\n            "startDate": "2022-09-30T16:00:00.000000Z",\n            "status": "AUTO_REGISTERED"\n          }\n        ],\n        "id": "Default",\n        "name": "Default"\n      }\n    ]\n  }\n}\n'))))}c.isMDXComponent=!0}}]);