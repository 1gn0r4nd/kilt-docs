"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[628],{6793:function(e,t,n){var a=n(102),i=n(7294),r=n(1736),o=["children","snippets"];t.Z=function(e){var t=e.children,n=e.snippets,s=(0,a.Z)(e,o),l=t.split(/\r?\n/),c=n?JSON.parse(n).map((function(e){return Array.isArray(e)?l.slice(e[0],e[1]).join("\n"):e})).join("\n"):l.join("\n");return i.createElement(r.Z,s,c)}},8329:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return y}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=n(1736),s=n(6793),l=n(6324),c=n(6431),p=["components"],d={id:"ctype",title:"CType"},u=void 0,m={unversionedId:"sdk/workshop/attester/ctype",id:"sdk/workshop/attester/ctype",title:"CType",description:"A claim type (CType for short) is a KILT-specific term, but the concept is simple:",source:"@site/docs/sdk/1-workshop/03-attester/03-ctype.md",sourceDirName:"sdk/1-workshop/03-attester",slug:"/sdk/workshop/attester/ctype",permalink:"/docs/sdk/workshop/attester/ctype",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/03-attester/03-ctype.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"ctype",title:"CType"},sidebar:"sdk",previous:{title:"DID",permalink:"/docs/sdk/workshop/attester/did"},next:{title:"\ud83d\udc64 Claimer",permalink:"/docs/sdk/workshop/claimer/"}},y=[{value:"Create CType",id:"create-ctype",children:[],level:2},{value:"Get CType",id:"get-ctype",children:[],level:2},{value:"Index",id:"index",children:[],level:2},{value:"Run",id:"run",children:[],level:2}],h={toc:y};function k(e){var t=e.components,n=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A claim type (CType for short) is a KILT-specific term, but the concept is simple:\nA CType defines the structure of a claim.\nYou can think of it as the data model for your claim."),(0,r.kt)("p",null,"Before the ",(0,r.kt)("span",{class:"label-role attester"},"Attester")," can issue attestations, they need to decide which CType they support.\nA traffic authority will only issue drivers licenses (=> CType for drivers license) and not trade register excerpts.\nSince CTypes enable interoperability between attesters, it is highly recommended to use existing CTypes instead of creating new once.\nBut in this workshop we create our own CType."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"CType")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A CType ensures that a claim contains all required attributes.\nE.g. a drivers license has to contain a name, date of birth, the type of vehicle that can be driven by the claimer.\nThe CType is especially important since a verifier would request attestations for a specific CType (e.g. the traffic police wants to see your drivers license and not your gym membership)."),(0,r.kt)("p",{parentName:"div"},"If you want to learn more about CTypes take a look at our ",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/core-feature/ctypes"},"in depth CType documentation"),"."))),(0,r.kt)("p",null,"Creating CTypes requires an account and a full DID.\nMake sure your account holds tokes so that you can pay the fees for creating a CType."),(0,r.kt)("p",null,"For example, a very basic CType for a driver's license could look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "schema": {\n    "$id": "kilt:ctype:0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5",\n    "$schema": "http://kilt-protocol.org/draft-01/ctype#",\n    "title": "Drivers License",\n    "properties": {\n      "name": {\n        "type": "string"\n      },\n      "age": {\n        "type": "integer"\n      }\n    },\n    "type": "object"\n  },\n  "owner": "5DD7fAZKSpgctg1ZQigAYuk3ypBtr2Q9RPKJBx5UpUwQw4vB",\n  "hash": "0xd8ad043d91d8fdbc382ee0ce33dc96af4ee62ab2d20f7980c49d3e577d80e5f5"\n}\n')),(0,r.kt)("p",null,"Let's have a look at these attributes."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema")," > ",(0,r.kt)("inlineCode",{parentName:"td"},"$id")),(0,r.kt)("td",{parentName:"tr",align:null},"The KILT id of this CType.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema")," > ",(0,r.kt)("inlineCode",{parentName:"td"},"$schema")),(0,r.kt)("td",{parentName:"tr",align:null},"The JSON schema on which the CType is based.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema")," > ",(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the CType.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema")," > ",(0,r.kt)("inlineCode",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:null},"The properties that a claim of type in ",(0,r.kt)("inlineCode",{parentName:"td"},"$schema")," should have.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"owner")),(0,r.kt)("td",{parentName:"tr",align:null},"The public address of the user who created this CType.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hash")),(0,r.kt)("td",{parentName:"tr",align:null},"Most important attribute, the hash is the CType's ",(0,r.kt)("strong",{parentName:"td"},"digital footprint"),".")))),(0,r.kt)("p",null,"A CType is stored on the KILT blockchain."),(0,r.kt)("p",null,"In a real-life setup, a user would simply retrieve an existing CType from the chain or a repository of CTypes for example via a Credential Registry's REST API."),(0,r.kt)("p",null,"In this tutorial, we'll have the ",(0,r.kt)("span",{class:"label-role attester"},"Attester")," create and attempt to store a CType on the KILT test blockchain."),(0,r.kt)("h2",{id:"create-ctype"},"Create CType"),(0,r.kt)("p",null,"Now we have our entry ready, create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"attester/createCtype.js"),". Copy the following to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"CType")," from a schema:"),(0,r.kt)(o.Z,{title:"attester/createCtype.js",className:"language-js",mdxType:"CodeBlock"},"const Kilt = require('@kiltprotocol/sdk-js')\n\n// returns CTYPE from a schema\nfunction createCtype() {\n  return Kilt.CType.fromSchema({\n    $schema: 'http://kilt-protocol.org/draft-01/ctype#',\n    title: 'Drivers License',\n    properties: {\n      name: {\n        type: 'string',\n      },\n      age: {\n        type: 'integer',\n      },\n    },\n    type: 'object',\n  });\n}\n\nmodule.exports = createCtype"),(0,r.kt)("h2",{id:"get-ctype"},"Get CType"),(0,r.kt)("p",null,"Create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"attester/getCtype.js"),". We'll use this to check if the ",(0,r.kt)("inlineCode",{parentName:"p"},"CType")," is on-chain already. If yes we'll\nreturn it, otherwise we'll store it on-chain. Remember, an account must have the require amount to pay the Angel's fee and deposit."),(0,r.kt)(o.Z,{title:"attester/getCtype.js",className:"language-js",mdxType:"CodeBlock"},"const Kilt = require('@kiltprotocol/sdk-js');\nconst createCtype = require('./createCtype');\n\nasync function getCtype(fullDid, keystore, account) {\n  // get the CTYPE and see if it's stored, if yes return it\n  const ctype = createCtype();\n  const isStored = await ctype.verifyStored();\n  if (isStored) return ctype;\n\n  // authorize the extrinsic\n  const tx = await ctype.store();\n  const extrinsic = await fullDid.details.authorizeExtrinsic(tx, keystore, account.address);\n\n  // write to chain then return ctype\n  await Kilt.BlockchainUtils.signAndSubmitTx(extrinsic, account, {\n    resolveOn: Kilt.BlockchainUtils.IS_FINALIZED,\n    reSign: true,\n  });\n\n  return ctype;\n}\n\nmodule.exports = getCtype"),(0,r.kt)("h2",{id:"index"},"Index"),(0,r.kt)("p",null,"Let's add a function called ",(0,r.kt)("inlineCode",{parentName:"p"},"getCtype")," in our ",(0,r.kt)("inlineCode",{parentName:"p"},"attester/index.js")," file.\nIn the real world ",(0,r.kt)("span",{class:"label-role claimer"},"claimers")," will be calling this from another device, let's mimic this by exporting the function.\nWe can also make use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," function we built earlier."),(0,r.kt)(s.Z,{title:"attester/index.js",className:"language-js",snippets:"[ [0,18], [19,38], [45,47] ]",mdxType:"SnippetBlock"},l.Z),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("p",null,"To run it, let's call it from our main ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),". First we import our ",(0,r.kt)("span",{class:"label-role attester"},"Attester"),".\nThen simple call ",(0,r.kt)("inlineCode",{parentName:"p"},"attester.getCType"),", we can store the result in ",(0,r.kt)("inlineCode",{parentName:"p"},"ctype.json")," for reference."),(0,r.kt)(s.Z,{title:"index.js",className:"language-js",snippets:'[ [0, 11], [12,13], [14,24], "  const ctype = JSON.parse(ctypeJSON);", "  console.log(JSON.stringify(ctype, null, 2));\\n", [49,54] ]',mdxType:"SnippetBlock"},c.Z),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node ./index.js\n")),(0,r.kt)("p",null,"OK, now before we can issue credentials, we need a  ",(0,r.kt)("span",{class:"label-role claimer"},"Claimer")," to request one! Let's move on!"))}k.isMDXComponent=!0},6324:function(e,t){t.Z="// make environment variables available in process.env\nrequire('dotenv').config();\n\n// bring in dependencies\nconst Kilt = require('@kiltprotocol/sdk-js');\nconst { cryptoWaitReady } = require('@polkadot/util-crypto');\n\n// bring in environment variables\nconst { \n  WSS_ADDRESS: address,\n  ATTESTER_MNEMONIC: mnemonic,\n  ATTESTER_DID_URI: didUri,\n} = process.env\n\n// load Attester helper functions\nconst getAccount = require('./getAccount');\nconst getFullDid = require('./getFullDid');\nconst getCtype = require('./getCtype');\nconst attestCredential = require('./attestCredential');\n\n// initialize the Attester account\nasync function initialize() {\n  await cryptoWaitReady();\n  await Kilt.init({ address });\n  const account = getAccount(mnemonic);\n  const keystore = new Kilt.Did.DemoKeystore();\n  const fullDid = await getFullDid(didUri, keystore, mnemonic, account);\n  return { keystore, account, fullDid }\n}\n\n// export for the outside world\nmodule.exports = {\n  async getCtype() {\n    // load the account, get the CType, return as data\n    const { fullDid, account, keystore } = await initialize();\n    const ctype = await getCtype(fullDid, keystore, account);\n    return JSON.stringify(ctype);\n  },\n  async attestCredential(requestJSON) {\n    // parse, load account, attest credential, return as data\n    const request = JSON.parse(requestJSON);\n    const { account, fullDid, keystore } = await initialize();\n    const credential = await attestCredential(account, fullDid, keystore, request);\n    return JSON.stringify(credential);\n  },\n}\n"},6431:function(e,t){t.Z="// make environment variables available in process.env\nrequire('dotenv').config();\n\n// bring in dependencies\nconst Kilt = require('@kiltprotocol/sdk-js');\nconst { cryptoWaitReady } = require('@polkadot/util-crypto');\n\n// load the node address from .env\nconst { WSS_ADDRESS: address } = process.env\n\n// load actors for the workshop\nconst claimer = require('./claimer');\nconst attester = require('./attester');\nconst verifier = require('./verifier');\n\nasync function main() {\n  // wait for the crypto library to be ready\n  await cryptoWaitReady();\n\n  // connect to the KILT wss node\n  await Kilt.init({ address });\n\n  // Claimer gets ctype from Attester\n  const ctypeJSON = await attester.getCtype();\n\n  // Claimer forms a claim for the ctype\n  const content = { name: 'Alice', age: 25 };\n  const claimJSON = await claimer.createClaim(ctypeJSON, content);\n\n  // Claimer creates an attestation request\n  const requestJSON = await claimer.createRequest(claimJSON);\n\n  // Claimer sends request to the Attester for approval or rejection\n  const credentialJSON = await attester.attestCredential(requestJSON);\n  if (!credentialJSON) throw Error('credential denied'); \n\n  // Claimer gets a challenge from Verifier\n  const challenge = verifier.getChallenge();\n\n  // Claimer creates a signed presentation using credential and challenge\n  const presentationJSON = await claimer.createPresentation(credentialJSON, challenge);\n\n  // Claimer sends their presentation Verifier for processing\n  const isVerified = await verifier.verifyCredential(presentationJSON, challenge);\n\n  // presentation is verified or denied by the Verifier\n  if (isVerified) console.log('woohoo verified, workshop complete!');\n  else console.log('booo verification denied!');\n\n  // we can disconnect\n  await Kilt.disconnect();\n}\n\nmain();"}}]);