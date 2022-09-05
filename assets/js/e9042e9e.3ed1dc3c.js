"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7713],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return u}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(k,o(o({ref:e},s),{},{components:n})):r.createElement(k,o({ref:e},s))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71661:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(83117),a=(n(67294),n(3905));const i={id:"deployments",title:"Deployments and Services"},o=void 0,p={unversionedId:"develop/chain/deployments",id:"develop/chain/deployments",title:"Deployments and Services",description:"KILT has two public deployments: a production one, called Spiritnet, and a test/dev one, called Peregrine.",source:"@site/docs/develop/02_chain/03_deployments.md",sourceDirName:"develop/02_chain",slug:"/develop/chain/deployments",permalink:"/docs/develop/chain/deployments",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/02_chain/03_deployments.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"deployments",title:"Deployments and Services"},sidebar:"chain",previous:{title:"DID pallet",permalink:"/docs/develop/chain/pallets/pallet-did"},next:{title:"Set Up a KILT Full Node",permalink:"/docs/develop/chain/fullnode-setup"}},l={},c=[],s={toc:c};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"KILT has two public deployments: a production one, called ",(0,a.kt)("strong",{parentName:"p"},"Spiritnet"),", and a test/dev one, called ",(0,a.kt)("strong",{parentName:"p"},"Peregrine"),".\nTo learn more about how to set up a node for either environment, please check our ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/chain/fullnode-setup"},"fullnode set up guide"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Spiritnet")," is the production blockchain, which has been live since September 2021."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Peregrine")," is the public testnet, which can be used to build and test products that use the KILT blockchain, before switching to Spiritnet."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Service"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Spiritnet"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Peregrine"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Faucet"),(0,a.kt)("td",{parentName:"tr",align:"center"},"-"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://faucet.kilt.io"},"Peregrine Faucet"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Public Endpoints"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/?rpc=wss://spiritnet.kilt.io"},"BOTLabs: wss://spiritnet.kilt.io"),(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/?rpc=wss://spiritnet.api.onfinality.io/public-ws"},"OnFinality: wss://spiritnet.api.onfinality.io/public-ws"),(0,a.kt)("br",null),(0,a.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/?rpc=wss://kilt-rpc.dwellir.com"},"Dwellir: wss://kilt-rpc.dwellir.com")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/?rpc=wss://peregrine.kilt.io/parachain-public-ws"},"BOTLabs: wss://peregrine.kilt.io/parachain-public-ws"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Wallet"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://www.sporran.org/"},"Sporran")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/BTE-Trusted-Entity/sporran-extension"},"GitHub")," (manual loading into the browser)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Staking UI"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Collators' performance (view only): ",(0,a.kt)("a",{parentName:"td",href:"https://stakekilt.com/"},"Stakekilt"),(0,a.kt)("br",null),"Delegation staking platform: ",(0,a.kt)("a",{parentName:"td",href:"https://stakeboard.kilt.io"},"Stakeboard")),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Governance UI"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://kilt.polkassembly.network"},"Polkassembly")),(0,a.kt)("td",{parentName:"tr",align:"center"},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Chain Explorer"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://spiritnet.subscan.io"},"Subscan")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://kilt-testnet.subscan.io"},"Subscan"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"W3N service"),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://w3n.id"},"w3n.id")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("a",{parentName:"td",href:"https://main.dwo3t819w2m3x.amplifyapp.com"},"https://main.dwo3t819w2m3x.amplifyapp.com"))))))}d.isMDXComponent=!0}}]);