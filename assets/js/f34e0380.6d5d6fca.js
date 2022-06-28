"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1838],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(c,".").concat(h)]||m[h]||l[h]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99200:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={id:"messaging",title:"KILT Messaging"},c=void 0,p={unversionedId:"concepts/messaging",id:"concepts/messaging",title:"KILT Messaging",description:"Distributed trust on the Internet only works if Credentials and other information can be exchanged securely, and communicating parties can be confident that they are not being fooled or eavesdropped on by bad actors.",source:"@site/docs/concepts/06_messaging.md",sourceDirName:"concepts",slug:"/concepts/messaging",permalink:"/docs/concepts/messaging",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/06_messaging.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"messaging",title:"KILT Messaging"},sidebar:"concepts",previous:{title:"Distributed Trust",permalink:"/docs/concepts/distributed_trust"},next:{title:"Terms and Quotes",permalink:"/docs/concepts/advanced_concepts/terms-and-quotes"}},d=[],l={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Distributed trust on the Internet only works if Credentials and other information can be exchanged securely, and communicating parties can be confident that they are not being fooled or eavesdropped on by bad actors.\nTo help with that, KILT provides a ",(0,o.kt)("strong",{parentName:"p"},"transport-agnostic messaging layer")," that helps with securely exchanging data between the respective owners of two DIDs."),(0,o.kt)("p",null,"This messaging layer provides ",(0,o.kt)("strong",{parentName:"p"},"authenticated end-to-end encryption")," \u2013 the gold standard in secure communication \u2013 in a way that abstracts about the security of the technologies used for transporting the message over the Internet \u2013\xa0be it sending the encrypted message via email, or posting them to and fetching them from a centralized or decentralized messaging service."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The messaging layer enables secure communication between two digital identities \u2013 DIDs.\nA necessary condition for secure communication with a given person or organization is to make sure that the DID on the other side of the communication channel is really controlled by the other party, in order to avoid attacks such as ",(0,o.kt)("em",{parentName:"p"},"Man in the Middle")," (MitM) attacks."))),(0,o.kt)("p",null,"To be able to communicate, the two DIDs need to expose ",(0,o.kt)("strong",{parentName:"p"},"key agreement public keys")," for that purpose (a.k.a., an ",(0,o.kt)("strong",{parentName:"p"},"encryption key"),").\nIn order to send a message to the other party, a DID owner (let's call her ",(0,o.kt)("strong",{parentName:"p"},"Alice"),") looks up her peer's (let's call it ",(0,o.kt)("strong",{parentName:"p"},"Bob"),") encryption public key, which can be part of either a ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/did#full-dids"},"full DID")," or a ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/did#light-dids"},"light DID"),".\nUsing this key in combination with her secret encryption key, ",(0,o.kt)("strong",{parentName:"p"},"Alice")," can now encrypt the message such that only she and ",(0,o.kt)("strong",{parentName:"p"},"Bob")," can decrypt it."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bob")," can decrypt this message after looking up ",(0,o.kt)("strong",{parentName:"p"},"Alice's")," encryption key.\nAn additional ",(0,o.kt)("em",{parentName:"p"},"message authentication code")," (MAC) added during encryption and verified on decryption protects against manipulation of the encrypted data.\nAs long as both parties keep their secret keys well protected, the combination of these measures allows ",(0,o.kt)("strong",{parentName:"p"},"Bob")," to be confident that if the message decrypts successfully, it could have only been encrypted by ",(0,o.kt)("strong",{parentName:"p"},"Alice")," and has not been read or tampered with by some malicious third party while in transport."),(0,o.kt)("p",null,"While encrypted, the message travels in a compact and privacy-preserving envelope format that only exposes data that the recipient requires to be able to decrypt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  receiverKeyUri: 'did:kilt:4qMx\u202666m4#0x4af3\u2026cdcb' // indicates the key to be used when decrypting\n  senderKeyUri: 'did:kilt:4qtP\u2026m507#0x65ac\u2026a282' // indicates the key used to encrypt\n  ciphertext: '0xdeadbeef\u2026' // message contents in unreadable, encrypted form\n  nonce: '0x1234\u2026' // random data required for decryption\n}\n")),(0,o.kt)("p",null,"Because the encrypted message does not simply reference the DIDs of sender and recipient, but the unique identifier of the keys that were used in encryption, this scheme still works if a DID should expose multiple encryption keys from which a message sender may choose."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"While no one can read nor change what is inside an encrypted message even if they intercept it while traveling on the network, a sophisticated attacker may try to guess what is inside and trick either side of the channel by resubmitting a copy of that message later.\nFor a detailed developer-oriented guide about how to protect against ",(0,o.kt)("em",{parentName:"p"},"replay attacks"),", please refer to our ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/messaging/replay_protection"},"Replay Protection Cookbook section"),"."))))}m.isMDXComponent=!0}}]);