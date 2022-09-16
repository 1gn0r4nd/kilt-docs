"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7381],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,f=p["".concat(s,".").concat(u)]||p[u]||h[u]||a;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63892:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var i=n(83117),r=(n(67294),n(3905));n(50941);const a={id:"did",title:"KILT Decentralized Identifiers (DIDs)"},o=void 0,l={unversionedId:"concepts/did",id:"concepts/did",title:"KILT Decentralized Identifiers (DIDs)",description:"A KILT decentralized identifier (DID) is a string of letters and numbers uniquely identifying each KILT user.",source:"@site/docs/concepts/02_did.md",sourceDirName:"concepts",slug:"/concepts/did",permalink:"/docs/concepts/did",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/02_did.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"did",title:"KILT Decentralized Identifiers (DIDs)"},sidebar:"concepts",previous:{title:"What is KILT?",permalink:"/docs/concepts/what-is-kilt"},next:{title:"web3names",permalink:"/docs/concepts/web3names"}},s={},c=[{value:"Light DIDs",id:"light-dids",level:2},{value:"Full DIDs",id:"full-dids",level:2},{value:"Migrating a Light DID to a Full DID",id:"migrating-a-light-did-to-a-full-did",level:2}],d={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A KILT decentralized identifier (DID) is a string of letters and numbers uniquely identifying each KILT user.\nA DID can be thought of as a container of different keys that are all under the control of the same DID subject.\nFor the official W3C DID spec, please visit the ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"DID Core spec page"),"; for the official KILT DID method specification, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/kilt-did-driver/blob/master/docs/did-spec/spec.md"},"KILT DID spec page"),"."),(0,r.kt)("p",null,"The simplest type of KILT DID is called a ",(0,r.kt)("strong",{parentName:"p"},"light DID"),", because it can be generated and used offline without any internet connection (hence any connection with the KILT blockchain at all).\nAlthough very cheap, light DIDs are not very flexible and are only suitable for low-security use cases.\nIn more complex use cases, an on-chain ",(0,r.kt)("strong",{parentName:"p"},"full DID")," is indicated, which allows the subject to store several different keys (and key types) and replace them over time, with the help of the KILT blockchain."),(0,r.kt)("h2",{id:"light-dids"},"Light DIDs"),(0,r.kt)("p",null,"The following is an example of a light KILT DID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS\n")),(0,r.kt)("p",null,"Beyond the standard prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"did:kilt:"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"light:")," component indicates that this DID is a light DID, hence it can be resolved and utilized offline."),(0,r.kt)("p",null,"Light DIDs optionally support the specification of an ",(0,r.kt)("strong",{parentName:"p"},"encryption key")," (of one of the supported key types) and some service endpoints, which are both serialized, encoded and added at the end of the DID, like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS:z1ERkVVjngcarMbJn6YssB1PYULescQneSSEfCTJwYbzT2aK8fzH5WPsp3G4UVuLWWfsTayketnFV74YCnyboHBUvqEs6J8jdYY5dK2XeqCCs653Sf9XVH4RN2WvPrDFZXzzKf3KigvcaE7kkaEwLZvcas3U1M2ZDZCajDG71winwaRNrDtcqkJL9V6Q5yKNWRacw7hJ58d\n")),(0,r.kt)("h2",{id:"full-dids"},"Full DIDs"),(0,r.kt)("p",null,"As mentioned above, the creation of a full DID requires interaction with the KILT blockchain.\nTherefore, the DID creation operation must be submitted by a KILT address with enough funds to pay the transaction fees and the required deposit.\nWhile transaction fees cannot be refunded, the deposit is returned if the DID is later deleted from the blockchain: this is to incentivize users to clean the data from the blockchain once such data is no longer required."),(0,r.kt)("p",null,"The following is an example of a full KILT DID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"did:kilt:4rp4rcDHP71YrBNvDhcH5iRoM3YzVoQVnCZvQPwPom9bjo2e\n")),(0,r.kt)("p",null,"Here, there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"light:")," component, which indicates that the DID is a full DID and that the keys associated with it must not be derived from the DID identifier, but must be retrieved from the KILT blockchain."),(0,r.kt)("p",null,"Along with an authentication key, an encryption key, and service endpoints, a full DID also supports an ",(0,r.kt)("strong",{parentName:"p"},"attestation key"),", which must be used to write CTypes and attestations on the blockchain, and a ",(0,r.kt)("strong",{parentName:"p"},"delegation key"),", which must be used to write delegations on the blockchain."),(0,r.kt)("h2",{id:"migrating-a-light-did-to-a-full-did"},"Migrating a Light DID to a Full DID"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"migration")," of a DID means that a light, off-chain DID is anchored to the KILT blockchain, supporting all the features that full DIDs provide.\nIn the current version (v1) of the KILT DID protocol, a light DID of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"did:kilt:light:014nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS")," would become a full DID of the form ",(0,r.kt)("inlineCode",{parentName:"p"},"did:kilt:4nv4phaKc4EcwENdRERuMF79ZSSB5xvnAk3zNySSbVbXhSwS"),".\nNote that the identifier of the two DIDs, apart from the initial ",(0,r.kt)("inlineCode",{parentName:"p"},"01")," sequence of the light DID, are the same since both DIDs are derived from the same KILT account."),(0,r.kt)("p",null,"Once a light DID is migrated, all the credentials collected by the light DID can only be presented using the migrated on-chain DID.\nThis is by design, as it is assumed that the user had valid reasons to migrate the DID onto the chain, and as on-chain DIDs offer greater security guarantees, KILT will reject light DID signatures even if the original claim in the credential was generated with that off-chain DID."),(0,r.kt)("p",null,"For a detailed developer-oriented guide to KILT DIDs, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/light-did-creation"},"DID Cookbook section"),"."))}h.isMDXComponent=!0}}]);