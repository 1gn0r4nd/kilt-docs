"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[458],{6793:function(e,n,t){t(7294),t(1736)},2854:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var i=t(3117),o=t(102),r=(t(7294),t(3905)),a=t(1736),l=(t(6793),["components"]),s={id:"did",title:"DID"},c=void 0,d={unversionedId:"sdk/workshop/claimer/did",id:"sdk/workshop/claimer/did",title:"DID",description:"Time to make a light DID using the previously created account for the Claimer.",source:"@site/docs/sdk/1-workshop/04-claimer/01-did.md",sourceDirName:"sdk/1-workshop/04-claimer",slug:"/sdk/workshop/claimer/did",permalink:"/docs/sdk/workshop/claimer/did",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/sdk/1-workshop/04-claimer/01-did.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"did",title:"DID"},sidebar:"sdk",previous:{title:"\ud83d\udc64 Claimer",permalink:"/docs/sdk/workshop/claimer/"},next:{title:"Request an Attestation",permalink:"/docs/sdk/workshop/claimer/request"}},p=[{value:"Generate Keys",id:"generate-keys",children:[],level:2},{value:"Generate Light DID",id:"generate-light-did",children:[],level:2},{value:"Run",id:"run",children:[],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Time to make a light DID using the previously created account for the ",(0,r.kt)("span",{class:"label-role claimer"},"Claimer"),".\nSince a light DID is not registered on the blockchain, you don't need funds for creating one.\nRemember light DIDs can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign claims and attestations with the authentication keys"),(0,r.kt)("li",{parentName:"ul"},"Encrypting messages with the encryption keys")),(0,r.kt)("p",null,"Take a look at our ",(0,r.kt)("a",{parentName:"p",href:"/docs/sdk/core-feature/did"},"DID documentation")," if you want to learn more about DIDs and the difference between their light and full versions."),(0,r.kt)("h2",{id:"generate-keys"},"Generate Keys"),(0,r.kt)("p",null,"Similar to the attester, the claimer must set up the DID keys.\nCreate a file ",(0,r.kt)("inlineCode",{parentName:"p"},"claimer/generateKeypairs.ts")," and copy the code below."),(0,r.kt)(a.Z,{className:"language-js",title:"claimer/generateKeypairs.ts",mdxType:"CodeBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function generateKeypairs(\n  keystore: Kilt.Did.DemoKeystore,\n  mnemonic?: string\n): Promise<{\n  authenticationKey: Kilt.NewDidVerificationKey\n  encryptionKey: Kilt.NewDidEncryptionKey\n}> {\n  // signing keypair\n  const signing = await keystore.generateKeypair({\n    alg: Kilt.Did.SigningAlgorithms.Sr25519,\n    seed: mnemonic\n  })\n\n  // encryption keypair\n  const encryption = await keystore.generateKeypair({\n    alg: Kilt.Did.EncryptionAlgorithms.NaclBox,\n    seed: mnemonic\n  })\n\n  // build the keys object\n  return {\n    authenticationKey: {\n      publicKey: signing.publicKey,\n      type: Kilt.VerificationKeyType.Sr25519\n    },\n    encryptionKey: {\n      publicKey: encryption.publicKey,\n      type: Kilt.EncryptionKeyType.X25519\n    }\n  }\n}\n"),(0,r.kt)("p",null,"The claimer only needs an authentication key and an encryption key.\nHere the keys are both derived from the same seed, but they could also have two different seeds."),(0,r.kt)("h2",{id:"generate-light-did"},"Generate Light DID"),(0,r.kt)("p",null,"Once our ",(0,r.kt)("inlineCode",{parentName:"p"},"keypairs")," are generated we can create our light DID.\nBecause it's off-chain we can just create the DID object every time, we don't need to resolve them before using it.\nBut we'll still accept ",(0,r.kt)("inlineCode",{parentName:"p"},"didUri")," and prompt to save it in ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," for our reference."),(0,r.kt)(a.Z,{className:"language-js",title:"claimer/generateLightDid.ts",mdxType:"CodeBlock"},"import { config as envConfig } from 'dotenv'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nimport { generateKeypairs } from './generateKeypairs'\nimport { mnemonicGenerate } from '@polkadot/util-crypto'\n\nexport async function generateLightDid(): Promise<{\n  lightDid: Kilt.Did.LightDidDetails\n  mnemonic: string\n}> {\n  // init\n  await Kilt.init({ address: process.env.WSS_ADDRESS })\n\n  // create secret and DID public keys\n  const keystore = new Kilt.Did.DemoKeystore()\n  const mnemonic = mnemonicGenerate()\n  const keys = await generateKeypairs(keystore, mnemonic)\n\n  // create the DID\n  const lightDid = Kilt.Did.LightDidDetails.fromDetails({\n    ...keys,\n    authenticationKey: {\n      publicKey: keys.authenticationKey.publicKey,\n      type: Kilt.VerificationKeyType.Sr25519\n    }\n  })\n\n  return {\n    lightDid,\n    mnemonic\n  }\n}\n\n// don't execute if this is imported by another file\nif (require.main === module) {\n  envConfig()\n  generateLightDid()\n    .catch((e) => {\n      console.log('Error while setting up claimer DID', e)\n      process.exit(1)\n    })\n    .then(({ lightDid, mnemonic }) => {\n      console.log('\\nsave following to .env to continue\\n')\n      console.log(`CLAIMER_MNEMONIC=\"${mnemonic}\"`)\n      console.log(`CLAIMER_DID_URI=\"${lightDid.did}\"`)\n    })\n}\n"),(0,r.kt)("p",null,"After everything is initialized, we create a mnemonic that will be used to create the light DID.\nAs you may have noticed the claimer doesn't have an ",(0,r.kt)("inlineCode",{parentName:"p"},"account"),".\nThe claimer doesn't need to hold funds and also doesn't need a blockchain account."),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn ts-node ./claimer/generateLightDid.ts\n")),(0,r.kt)("p",null,"Your output will provide you with ",(0,r.kt)("inlineCode",{parentName:"p"},"CLAIMER_MNEMONIC")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CLAIMER_DID_URI"),".\nBe sure to save it in your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file, it should now look similar to this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-env",metastring:'title=".env"',title:'".env"'},'WSS_ADDRESS=wss://peregrine.kilt.io/parachain-public-ws\n\nATTESTER_MNEMONIC="warrior icon use cry...\nATTESTER_ADDRESS=4ohMvUHsyeDhMVZF...\nATTESTER_DID_URI=did:kilt:4ohMvUHsyeDhMVZF...\n\nCLAIMER_MNEMONIC="danger awkward wrestle snap...\nCLAIMER_DID_URI=did:kilt:light:004tTDugL...\n')),(0,r.kt)("p",null,"Well done - You've successfully generated a light DID!"))}m.isMDXComponent=!0}}]);