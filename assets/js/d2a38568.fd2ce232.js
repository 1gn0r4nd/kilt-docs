"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8581],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6281:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(83117),a=(r(67294),r(3905)),o=r(50941);const i={id:"overview",title:"Overview"},s=void 0,l={unversionedId:"concepts/credentials/overview",id:"concepts/credentials/overview",title:"Overview",description:"Credentials consist of a set of claims which belong to a Claimer, are attested by an Attester and can be verified by Verifiers.",source:"@site/docs/concepts/04_credentials/01_overview.md",sourceDirName:"concepts/04_credentials",slug:"/concepts/credentials/overview",permalink:"/docs/concepts/credentials/overview",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/04_credentials/01_overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview"},sidebar:"concepts",previous:{title:"web3names",permalink:"/docs/concepts/web3names"},next:{title:"CTypes",permalink:"/docs/concepts/credentials/ctypes"}},c={},p=[],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Credentials")," consist of a set of claims which belong to a ",(0,a.kt)("strong",{parentName:"p"},"Claimer"),", are attested by an ",(0,a.kt)("strong",{parentName:"p"},"Attester")," and can be verified by ",(0,a.kt)("strong",{parentName:"p"},"Verifiers"),"."),(0,a.kt)("center",null,(0,a.kt)(o.Z,{alt:"Credential Overview Diagram",sources:{light:"/img/concepts/credentials/overview.png",dark:"/img/concepts/credentials/overview_dark.png"},mdxType:"ThemedImage"})),(0,a.kt)("p",null,"To get a Credential, a Claimer needs to go through following process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Find a ",(0,a.kt)("strong",{parentName:"li"},"CType")," a Claim should be based on. Potential Attesters and Verifiers might advertise this information themselves."),(0,a.kt)("li",{parentName:"ol"},"Make a ",(0,a.kt)("strong",{parentName:"li"},"Claim")," containing a set of properties about themselves."),(0,a.kt)("li",{parentName:"ol"},"Potentially request and receive ",(0,a.kt)("strong",{parentName:"li"},"Terms")," and agree on a ",(0,a.kt)("strong",{parentName:"li"},"Quote")," with the potential Attester."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Request a (Credential) Attestation")," from the Attester."),(0,a.kt)("li",{parentName:"ol"},"Wait for the Claim to be ",(0,a.kt)("strong",{parentName:"li"},"attested")," by the Attester.")),(0,a.kt)("p",null,"To verify a Credential, a Claimer can generate a Presentation of it to a Verifier, with the following process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The Verifier may request a ",(0,a.kt)("strong",{parentName:"li"},"Credential")," as the first step, along with with properties to reveal from such Credential."),(0,a.kt)("li",{parentName:"ol"},"The Claimer selectively ",(0,a.kt)("strong",{parentName:"li"},"disclose")," the requested properties and signs the generated Presentation."),(0,a.kt)("li",{parentName:"ol"},"The Verifier ",(0,a.kt)("strong",{parentName:"li"},"checks")," the Presentation structure, content and signature, and decides whether they trust the Attester of the presented Credential.")),(0,a.kt)("p",null,"Each step is described in more detail in the next sections."),(0,a.kt)("p",null,"If you want to learn about how implement the above flow in a Dapp that interacts with a browser extension, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/credential-api/blob/master/readme.md"},"Credential API specification"),"."))}d.isMDXComponent=!0}}]);