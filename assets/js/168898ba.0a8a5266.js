"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[261],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"Querying the API",description:"Examples for querying the API",sidebar_position:5,pagination_next:null,pagination_prev:null},i="Querying the API",s={unversionedId:"query-api",id:"query-api",title:"Querying the API",description:"Examples for querying the API",source:"@site/docs/query-api.md",sourceDirName:".",slug:"/query-api",permalink:"/PlayStation-Stars/query-api",draft:!1,editUrl:"https://github.com/andshrew/PlayStation-Stars/tree/main/website/docs/query-api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Querying the API",description:"Examples for querying the API",sidebar_position:5,pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},l={},p=[{value:"Web Browser",id:"web-browser",level:2},{value:"Powershell 7",id:"powershell-7",level:2},{value:"Obtaining an Authentication Token",id:"obtaining-an-authentication-token",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"querying-the-api"},"Querying the API"),(0,a.kt)("h2",{id:"web-browser"},"Web Browser"),(0,a.kt)("p",null,"PlayStation web services store their authentication token within a cookie in the browser, so once you have authenticated to one of the services such as the PlayStation Store you can then access any of the endpoint URLs documented here and your browser will automatically use the stored auth token. The API responds with a JSON object, so for a more friendly view you can use a web browser such as FireFox which includes a JSON parser."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In your web browser access ",(0,a.kt)("a",{parentName:"p",href:"https://store.playstation.com"},"https://store.playstation.com")," and log in with a PSN account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the same browser access one of the URLs documented here, for example: ",(0,a.kt)("a",{parentName:"p",href:"https://m.np.playstation.com/api/graphql/v1/op?operationName=metLoyaltyUserCollectibleById&variables=%7B%22collectibleId%22:%2288d25cfa-26ad-572a-9335-a32b9bcabe13%22,%22accountId%22:%22me%22%7D&extensions=%7B%22persistedQuery%22:%7B%22version%22:1,%22sha256Hash%22:%2286ecd802c228fbae4b7482d7272932ad18f56516dbf28ede9fdbe1554b796549%22%7D%7D"},"view a specific collectible"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The JSON response will be displayed in the browser.\n",(0,a.kt)("img",{alt:"browser example",src:n(8061).Z,width:"1211",height:"517"}),"\n",(0,a.kt)("em",{parentName:"p"},"Example with FireFox which automatically parses the JSON response")))),(0,a.kt)("h2",{id:"powershell-7"},"Powershell 7"),(0,a.kt)("p",null,"Powershell includes the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-restmethod?view=powershell-7.1"},(0,a.kt)("inlineCode",{parentName:"a"},"Invoke-RestMethod"))," cmdlet which enables you to to make a request to a URL and process the response - in this case JSON - into a Powershell object."),(0,a.kt)("p",null,"First configure the authentication token which you will use. See ",(0,a.kt)("a",{parentName:"p",href:"#obtaining-an-authentication-token"},"obtaining an authentication token")," for more detail."),(0,a.kt)("p",null,"Now make a request to one of the API URLs using ",(0,a.kt)("inlineCode",{parentName:"p"},"Invoke-RestMethod"),". This will output the response to the screen, but you could instead store the response in a variable or pipe it elsewhere for further processing."),(0,a.kt)("p",null,"An example to request the PlayStation Stars profile summary for the authenticating account and output the original JSON response to the screen. Additional examples are included within the documentation for each API endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'Invoke-RestMethod -Uri \'https://m.np.playstation.com/api/graphql/v1/op?operationName=metGetAccount&variables={"accountId":"me"}&extensions={"persistedQuery":{"version":1,"sha256Hash":"743c32289cdd6fbdead3b34ea80b48d63f8ddab34581469c4dda4ea412e6cf6b"}}\' -Authentication Bearer -Token $token | ConvertTo-Json -Depth 5\n')),(0,a.kt)("h3",{id:"obtaining-an-authentication-token"},"Obtaining an Authentication Token"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"These instructions ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"require"))," PowerShell 7. Download it for Windows/Linux/Mac from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PowerShell/PowerShell"},"https://github.com/PowerShell/PowerShell"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open a Powershell session and paste in the following function")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'function Get-AuthenticationToken {\n  param(\n    [Parameter(Mandatory=$true)]\n    [string]$npsso\n  )\n\n  if ($PSVersionTable.PSVersion.Major -lt 7) {\n    Write-Host "This function requires PowerShell 7. Download it from https://github.com/PowerShell/PowerShell"\n    return\n  }\n\n  $body = @{\n    token_format="jwt"\n    grant_type="sso_token"\n    npsso=$npsso\n    scope="psn:mobile.v2.core psn:clientapp"\n  }\n\n  $contentType = "application/x-www-form-urlencoded"\n  $url = "https://ca.account.sony.com/api/authz/v3/oauth/token"\n\n  try {\n    $result = Invoke-RestMethod -Uri $url -Method Post -Body $body -ContentType $contentType -Headers @{\n      "Authorization"="Basic MDk1MTUxNTktNzIzNy00MzcwLTliNDAtMzgwNmU2N2MwODkxOnVjUGprYTV0bnRCMktxc1A="\n    }\n    $token = ConvertTo-SecureString $result.access_token -AsPlainText\n    if ($token) {\n      Write-Host "Authentication Token successfully granted"\n      return $token\n    }\n    else { Write-Host "Error: Unable to obtain Authentication Token" }\n  }\n  catch { Write-Host "Error: Unable to obtain Authentication Token (check npsso)" }\n}\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"In your web browser access ",(0,a.kt)("a",{parentName:"li",href:"https://store.playstation.com"},"https://store.playstation.com")," and log in with a PSN account."),(0,a.kt)("li",{parentName:"ol"},"In the same browser access ",(0,a.kt)("a",{parentName:"li",href:"https://ca.account.sony.com/api/v1/ssocookie"},"https://ca.account.sony.com/api/v1/ssocookie"),(0,a.kt)("br",null),"You should see a response with ",(0,a.kt)("inlineCode",{parentName:"li"},"npsso")," followed by a string of letters and numbers. Highlight and copy this.\n",(0,a.kt)("img",{alt:"ssocookie example",src:n(3221).Z,width:"709",height:"154"})),(0,a.kt)("li",{parentName:"ol"},"In the PowerShell session run the following command, substituting in your npsso token copied in the previous step")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-powershell"},'$token = Get-AuthenticationToken -npsso "Hwl9Vq%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"get-authenticationtoken example",src:n(8314).Z,width:"1390",height:"81"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"$token")," variable is now ready to be used in combination with ",(0,a.kt)("inlineCode",{parentName:"p"},"Invoke-RestMethod")," to authenticate your requests to the API."),(0,a.kt)("p",null,"This will be valid for ~60 minutes after which you will need to repeat these steps to obtain an updated token."))}u.isMDXComponent=!0},3221:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2021-03-20-15-33-08-c4a2568df7d9f705ebffb629debda587.png"},8314:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2021-03-20-15-41-57-7a3bfbf73ccc1f0037044105745e9ae6.png"},8061:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2022-10-05-18-54-54-330cc4550b72d91ee1a841a4d9abacf9.png"}}]);