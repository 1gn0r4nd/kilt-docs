"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1838],{55447:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return d},default:function(){return l},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return m}});var n=a(83117),o=a(80102),i=(a(67294),a(3905)),s=a(31736),c=["components"],r={id:"messaging",title:"KILT Messaging"},d=void 0,p={unversionedId:"concepts/messaging",id:"concepts/messaging",title:"KILT Messaging",description:"Distributed trust on the Internet only works if Credentials and other information can be exchanged securely, and communicating parties can be confident that they are not being fooled or eavesdropped on by bad actors.",source:"@site/docs/concepts/06_messaging.md",sourceDirName:"concepts",slug:"/concepts/messaging",permalink:"/docs/concepts/messaging",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/concepts/06_messaging.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"messaging",title:"KILT Messaging"},sidebar:"concepts",previous:{title:"Distributed Trust",permalink:"/docs/concepts/distributed_trust"},next:{title:"Terms and Quotes",permalink:"/docs/concepts/advanced_concepts/terms-and-quotes"}},m=[],h={toc:m};function l(e){var t=e.components,a=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Distributed trust on the Internet only works if Credentials and other information can be exchanged securely, and communicating parties can be confident that they are not being fooled or eavesdropped on by bad actors.\nTo help with that, KILT provides a ",(0,i.kt)("strong",{parentName:"p"},"transport-agnostic messaging layer")," that helps with securely exchanging data between the respective owners of two DIDs."),(0,i.kt)("p",null,"This messaging layer provides ",(0,i.kt)("strong",{parentName:"p"},"authenticated end-to-end encryption")," \u2013 the gold standard in secure communication \u2013 in a way that abstracts about the security of the technologies used for transporting the message over the Internet \u2013\xa0be it sending the encrypted message via email, or posting them to and fetching them from a centralized or decentralized messaging service."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The messaging layer enables secure communication between two digital identities \u2013 DIDs.\nA necessary condition for secure communication with a given person or organization is to make sure that the DID on the other side of the communication channel is really controlled by the other party, in order to avoid attacks such as ",(0,i.kt)("em",{parentName:"p"},"Man in the Middle")," (MitM) attacks."))),(0,i.kt)("p",null,"To be able to communicate, the two DIDs need to expose ",(0,i.kt)("strong",{parentName:"p"},"key agreement public keys")," for that purpose (a.k.a., an ",(0,i.kt)("strong",{parentName:"p"},"encryption key"),").\nIn order to send a message to the other party, a DID owner (let's call her ",(0,i.kt)("strong",{parentName:"p"},"Alice"),") looks up her peer's (let's call it ",(0,i.kt)("strong",{parentName:"p"},"Bob"),") encryption public key, which can be part of either a ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/did#full-dids"},"full DID")," or a ",(0,i.kt)("a",{parentName:"p",href:"/docs/concepts/did#light-dids"},"light DID"),".\nUsing this key in combination with her secret encryption key, ",(0,i.kt)("strong",{parentName:"p"},"Alice")," can now encrypt the message such that only she and ",(0,i.kt)("strong",{parentName:"p"},"Bob")," can decrypt it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bob")," can decrypt this message after looking up ",(0,i.kt)("strong",{parentName:"p"},"Alice's")," encryption key.\nAn additional ",(0,i.kt)("em",{parentName:"p"},"message authentication code")," (MAC) added during encryption and verified on decryption protects against manipulation of the encrypted data.\nAs long as both parties keep their secret keys well protected, the combination of these measures allows ",(0,i.kt)("strong",{parentName:"p"},"Bob")," to be confident that if the message decrypts successfully, it could have only been encrypted by ",(0,i.kt)("strong",{parentName:"p"},"Alice")," and has not been read or tampered with by some malicious third party while in transport."),(0,i.kt)("p",null,"While encrypted, the message travels in a compact and privacy-preserving envelope format that only exposes data that the recipient requires to be able to decrypt."),(0,i.kt)(s.Z,{className:"language-json",mdxType:"CodeBlock"},'{\n  "ciphertext": "0x8839dc6c689f11e2f92ad1c5bd4b5b7a4e5117809500c70539d81b35ac0da233ebd038a263efd88dab9263298de8a12141e0b0bed070901fe8bfef5b3d0d6ede19548a9659be8bb5e4dbffaafc3b09d9d62718bc9cebf8ceae77127128ba078983d9d2f5d7fd95457472d64c152228f25816df10a4d6ef8c3dfec63f5e5d5d99c7a806050c23ccc4f6006f3bca7b51c232185617caf202008f6eddcb4639e20eb45dc346a4b9a794ea617b9e9907ac0216ad71ad7010fb3116b4ae67528007c7d00c1928d88a83c59cbf617ec11905b56b78da53db2f490bc25a68cc379edaed473793b863d2bf4b211c8a380fdc44eeeb1e5eee779462af16b1ef7b0bfdfbb39dca9b8319f9f04412e08297a36b20b5723bfe69e7381bd3a7637374adbd15d00e7cb57f69b908aba02b9436a93788b8c84f2a43c9daf38e256f221b40c556edf622e4f83f0babac1c41dd91aafd188a03ffc3199ea3d9f422cedd9cf1646d1b2af8483cc3b96150d39e5cbfee338e353b85cc3a8142bb401ccf5fd467cdd3e3bb3cf676f28e895a3e853bfb9dd935bd60cbbe3d264018",\n  "nonce": "0xce18ce00456779817c160864d69e94683b1018ad3aa51499",\n  "senderKeyUri": "did:kilt:4srGMHf1PPtJ7fydTzDKaMtY8aqQhuhPZ1mCmTH1Z1fgCGpF#0x9e6557b4b68ee94484c3d03be393644fbf78b3aeaedaa08b012e41cd437e479e",\n  "receiverKeyUri": "did:kilt:4tKLFGEH5KT7xDqkA4QcdCFSeH8Vd3ovYHFmFJLTuhG1GcHx#0x077e8f04973c40f759154ab1723d1a1a83a7d017950bf25bfbe79be8720ff92a"\n}'),(0,i.kt)("p",null,"Because the encrypted message does not simply reference the DIDs of sender and recipient, but the unique identifier of the keys that were used in encryption, this scheme still works if a DID should expose multiple encryption keys from which a message sender may choose."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While no one can read nor change what is inside an encrypted message even if they intercept it while traveling on the network, a sophisticated attacker may try to guess what is inside and trick either side of the channel by resubmitting a copy of that message later.\nFor a detailed developer-oriented guide about how to protect against ",(0,i.kt)("em",{parentName:"p"},"replay attacks"),", please refer to our ",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/messaging/replay_protection"},"Replay Protection Cookbook section"),"."))))}l.isMDXComponent=!0}}]);