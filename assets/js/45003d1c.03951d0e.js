"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[543],{6793:function(e,t,a){a(7294),a(1736)},2913:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var n=a(3117),i=a(102),r=(a(7294),a(3905)),s=a(1736),o=(a(6793),["components"]),l={id:"request",title:"Request an Attestation"},c=void 0,m={unversionedId:"sdk/workshop/claimer/request",id:"sdk/workshop/claimer/request",title:"Request an Attestation",description:"In this section we'll create a Claim and a RequestForAttestation.",source:"@site/docs/sdk/1-workshop/04-claimer/02-request.md",sourceDirName:"sdk/1-workshop/04-claimer",slug:"/sdk/workshop/claimer/request",permalink:"/docs/sdk/workshop/claimer/request",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/04-claimer/02-request.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"request",title:"Request an Attestation"},sidebar:"sdk",previous:{title:"DID",permalink:"/docs/sdk/workshop/claimer/did"},next:{title:"\ud83e\uddfe Attestation",permalink:"/docs/sdk/workshop/attestation"}},d=[{value:"Create Claim",id:"create-claim",children:[],level:2},{value:"Create Request",id:"create-request",children:[],level:2},{value:"Run",id:"run",children:[],level:2}],u={toc:d};function p(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this section we'll create a ",(0,r.kt)("inlineCode",{parentName:"p"},"Claim")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestForAttestation"),".\nBut a claim in itself has no value.\nTo become valid in the eyes of ",(0,r.kt)("span",{class:"label-role verifier"},"Verifiers"),", it needs to be attested by an entity they can trust: an ",(0,r.kt)("span",{class:"label-role attester"},"Attester"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"}," KILT is an open system.\nAnyone/anything can make a claim about themselves and attest this claim. But a claim only has value if the verifier ",(0,r.kt)("em",{parentName:"p"},"trusts")," the attester."))),(0,r.kt)("h2",{id:"create-claim"},"Create Claim"),(0,r.kt)("p",null,"We'll use provided ",(0,r.kt)("inlineCode",{parentName:"p"},"light DID"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ctype")," and ",(0,r.kt)("span",{class:"label-role claimer"},"Claimer")," provided ",(0,r.kt)("inlineCode",{parentName:"p"},"content")," to generate the ",(0,r.kt)("inlineCode",{parentName:"p"},"Claim")," object.\nCreate a file ",(0,r.kt)("inlineCode",{parentName:"p"},"claimer/createClaim.js")," and copy the code below."),(0,r.kt)(s.Z,{className:"language-js",title:"claimer/createClaim.js",mdxType:"CodeBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\n// create a Claim object from lightDid, ctype and given content\nexport function createClaim(lightDid, ctype, content) {\n  const claim = Kilt.Claim.fromCTypeAndClaimContents(ctype, content, lightDid.did)\n\n  return claim\n}\n"),(0,r.kt)("p",null,"The magic is happening in the ",(0,r.kt)("inlineCode",{parentName:"p"},"createRequest")," function.\nThere we create a request for attestation from a claim.\nAttestations can only be created for attributes that the ",(0,r.kt)("span",{class:"label-role claimer"},"Claimer")," wants to publish.\nTo ensure that the claimer also approves of the attributes in the claim, he has to digitally sign the request for attestation.\nThe signature makes sure that the attester doesn't change the attributes and the attestation is created for the agreed values."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," function puts all together.\nThere we load our light DID, create a claim and finally the request for attestation."),(0,r.kt)("h2",{id:"create-request"},"Create Request"),(0,r.kt)("p",null,"A claim are attributes that we claim to be true about us.\nSince we want to receive an attestation for that claim, we build a ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestForAttestation"),".\nThe request contains all necessary information, so that the ",(0,r.kt)("span",{class:"label-role attester"},"Attester")," can create an attestation for us.\nCreate a file ",(0,r.kt)("inlineCode",{parentName:"p"},"claimer/generateRequest.js")," and copy the code below."),(0,r.kt)(s.Z,{className:"language-js",title:"claimer/generateRequest.js",mdxType:"CodeBlock"},"import 'dotenv/config'\nimport { cryptoWaitReady } from '@polkadot/util-crypto'\nimport { fileURLToPath } from 'url'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { createClaim } from './createClaim.js'\nimport { getCtypeSchema } from '../attester/ctypeSchema.js'\nimport { generateKeypairs } from './generateKeypairs.js'\n\n// create and return a RequestForAttestation from claim\nexport async function requestFromClaim(lightDid, keystore, claim) {\n  const request = Kilt.RequestForAttestation.fromClaim(claim)\n  await request.signWithDid(keystore, lightDid)\n\n  return request\n}\n\nexport async function generateRequest(claimAttributes) {\n  // init\n  await cryptoWaitReady()\n  await Kilt.init({ address: process.env.WSS_ADDRESS })\n\n  const keystore = new Kilt.Did.DemoKeystore()\n  const keys = await generateKeypairs(keystore, process.env.CLAIMER_MNEMONIC)\n\n  // create the DID\n  const lightDid = new Kilt.Did.LightDidDetails(keys)\n\n  // create claim\n  const ctype = getCtypeSchema()\n  const claim = await createClaim(lightDid, ctype, claimAttributes)\n\n  // create request\n  console.log('claimer -> create request')\n  return await requestFromClaim(lightDid, keystore, claim)\n}\n\n// don't execute if this is imported by another files\nif (process.argv[1] === fileURLToPath(import.meta.url)) {\n  generateRequest({\n    age: 28,\n    name: 'Max Mustermann',\n  })\n    .catch((e) => {\n      console.log('Error while building request for attestation', e)\n      process.exit(1)\n    })\n    .then((request) => {\n      console.log('\u26a0\ufe0f  save this to ./claimer/_request.json for testing  \u26a0\ufe0f\\n\\n')\n      console.log(JSON.stringify(request, null, 2))\n      process.exit()\n    })\n}\n"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"Attestations")," are given by ",(0,r.kt)("span",{class:"label-role attester"},"Attesters"),", they are written to chain which requires a deposit. Each new ",(0,r.kt)("inlineCode",{parentName:"p"},"RequestForAttestation")," is unique. While we're testing, we can store and reuse requests to avoid to avoid\nmultiple attestations. To do this store the output into ",(0,r.kt)("inlineCode",{parentName:"p"},"./claimer/_request.json"),". You can also share this\nrequest to others in the workshop to see how they get denied from fraudulent senders."),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("p",null,"Run it from command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node claimer/generateRequest.js\n")),(0,r.kt)("p",null,"OK, you've made a claim as a ",(0,r.kt)("span",{class:"label-role claimer"},"Claimer")," and\ncreated a request for attestation. Let's finish up our ",(0,r.kt)("span",{class:"label-role attester"},"Attester")," and get a credential!"))}p.isMDXComponent=!0}}]);