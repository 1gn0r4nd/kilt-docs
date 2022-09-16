"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7550],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(t),h=o,y=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62713:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return l}});var r=t(83117),o=(t(67294),t(3905));const i={id:"session",title:"Setting Up the Communication Session"},s=void 0,a={unversionedId:"develop/dApp/session",id:"develop/dApp/session",title:"Setting Up the Communication Session",description:"The first step in creating your dapp is to set up the communication session.",source:"@site/docs/develop/07_dApp/02_session.md",sourceDirName:"develop/07_dApp",slug:"/develop/dApp/session",permalink:"/docs/develop/dApp/session",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/07_dApp/02_session.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"session",title:"Setting Up the Communication Session"},sidebar:"dApp",previous:{title:"Overview",permalink:"/docs/develop/dApp/welcome"},next:{title:"Well Known DID Configuration",permalink:"/docs/develop/dApp/well-known-did-config"}},p={},l=[{value:"Dapp Indicates Credential API Support",id:"dapp-indicates-credential-api-support",level:2},{value:"Dapp Introduces Itself",id:"dapp-introduces-itself",level:2},{value:"Dapp checks the session values",id:"dapp-checks-the-session-values",level:2}],c={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The first step in creating your dapp is to set up the communication session.\nThe purpose of the session is to pass encrypted messages back and forth between your dapp and the extension."),(0,o.kt)("h2",{id:"dapp-indicates-credential-api-support"},"Dapp Indicates Credential API Support"),(0,o.kt)("p",null,"In order to indicate its support of the extension's API, the dapp creates the ",(0,o.kt)("inlineCode",{parentName:"p"},"window.kilt")," object as soon as possible.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<head>\n  <script>\n    window.kilt = {}\n  <\/script>\n</head>\n")),(0,o.kt)("h2",{id:"dapp-introduces-itself"},"Dapp Introduces Itself"),(0,o.kt)("p",null,"The dapp introduces itself to the extension with its name, encryption key URI, and a challenge.\nA copy of the challenge should be stored on the server side.\nFor example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { FullDidDetails } from '@kiltprotocol/did'\n\nconst did = 'did:kilt:example'\nconst dAppName = 'Your dApp Name'\n\nconst fullDid = await FullDidDetails.fromChainInfo(did)\n\nconst dAppEncryptionKeyUri = fullDid.assembleKeyUri(fullDid.encryptionKey.id)\n\n// generate and store challenge on the server side for the next step\nconst challenge = await fetch('/challenge')\n\nconst session = await window.kilt.sporran.startSession(\n  dAppName,\n  dAppEncryptionKeyUri,\n  challenge\n)\n")),(0,o.kt)("p",null,"At this point the extension has received the introduction of the dapp and returned a new session along with the encrypted challenge."),(0,o.kt)("h2",{id:"dapp-checks-the-session-values"},"Dapp checks the session values"),(0,o.kt)("p",null,"The extension has provided the session along with an encrypted challenge.\nThe dapp decrypts the challenge and verifies that it matches the original challenge.\nThis should happen on the server side:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Crypto } from '@kiltprotocol/utils'\nimport { DidResolver } from '@kiltprotocol/did'\n\nconst { encryptionKeyUri, encryptedChallenge, nonce } = session\n\nconst encryptionKey = await DidResolver.resolveKey(encryptionKeyUri)\n\nconst { data } = await encryptionKeystore.decrypt({\n  data: Crypto.coToUInt8(encryptedChallenge),\n  nonce: Crypto.coToUInt8(nonce),\n  publicKey: keyAgreement.publicKey, // derived from your seed phrase\n  peerPublicKey: encryptionKey.publicKey,\n  alg: 'x25519-xsalsa20-poly1305',\n})\n\nconst decryptedChallenge = Crypto.u8aToHex(data)\n\n// Compare the decrypted challenge to the challenge you stored earlier\nif (decryptedChallenge === originalChallenge) {\n  return session\n}\n")),(0,o.kt)("p",null,"That's it! The communication session has been securely established and you're ready to start sending and receiving messages."))}d.isMDXComponent=!0}}]);