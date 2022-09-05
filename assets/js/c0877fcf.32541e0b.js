"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3110],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29741:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l}});var n=r(83117),a=(r(67294),r(3905));const o={id:"attester",title:"\ud83c\udfe2 Attester"},s=void 0,i={unversionedId:"develop/workshop/attester/attester",id:"develop/workshop/attester/attester",title:"\ud83c\udfe2 Attester",description:"In this section you will walk though all processes done by the Attester.",source:"@site/docs/develop/03_workshop/04_attester/index.md",sourceDirName:"develop/03_workshop/04_attester",slug:"/develop/workshop/attester/",permalink:"/docs/develop/workshop/attester/",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/03_workshop/04_attester/index.md",tags:[],version:"current",frontMatter:{id:"attester",title:"\ud83c\udfe2 Attester"},sidebar:"workshop",previous:{title:"\ud83d\udc53 Overview",permalink:"/docs/develop/workshop/overview"},next:{title:"Account",permalink:"/docs/develop/workshop/attester/account"}},c={},l=[{value:"Folder Structure",id:"folder-structure",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this section you will walk though all processes done by the ",(0,a.kt)("span",{className:"label-role attester"},"Attester"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You will ",(0,a.kt)("a",{parentName:"li",href:"./account"},"create an account")," that is used to pay for all transactions and the storage deposits."),(0,a.kt)("li",{parentName:"ol"},"Next step is to ",(0,a.kt)("a",{parentName:"li",href:"./did"},"create a DID")," which is the identity that is used to create attestations.\nWhile you always can switch the KILT account and pay deposits and fees with any account you like, your DID is the way Claimers will identify you and put trust in you."),(0,a.kt)("li",{parentName:"ol"},"Before we can attest claims, ",(0,a.kt)("a",{parentName:"li",href:"./ctype"},"we need a CType")," which describes and gives context to what we attest."),(0,a.kt)("li",{parentName:"ol"},"After we can pay fees and deposits, have an identity and a CType ",(0,a.kt)("a",{parentName:"li",href:"../attestation"},"we can create attestations"),".")),(0,a.kt)("h2",{id:"folder-structure"},"Folder Structure"),(0,a.kt)("p",null,"Create the following files in the ",(0,a.kt)("span",{className:"label-role attester"},"Attester")," folder.\nThis folders serves to mimic an ",(0,a.kt)("span",{className:"label-role attester"},"Attester")," service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500 kilt-rocks/ # project\n  \u2514\u2500 attester/ # all attester code\n    \u251c\u2500 attestClaim.ts # issues attestations\n    \u251c\u2500 ctypeSchema.ts # create a local CType definition\n    \u251c\u2500 generateAccount.ts # functions for setting up and loading the attester's account\n    \u251c\u2500 generateCtype.ts # register the CType on chain\n    \u251c\u2500 generateDid.ts # registers the attester's on-chain DID\n    \u2514\u2500 generateKeypairs.ts # setup the keys for the attester's DID\n")))}u.isMDXComponent=!0}}]);