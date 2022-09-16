"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2892],{37263:function(n,t,o){o.r(t),o.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return a},metadata:function(){return r},toc:function(){return u}});var i=o(83117),e=(o(67294),o(3905)),c=o(90814);const a={id:"account-unlink",title:"Unlink an Account From a KILT DID"},s=void 0,r={unversionedId:"develop/sdk/cookbook/account_linking/account-unlink",id:"develop/sdk/cookbook/account_linking/account-unlink",title:"Unlink an Account From a KILT DID",description:"Similar to the way a new account  DID link is created, removing a link can happen in one of three ways:",source:"@site/docs/develop/01_sdk/02_cookbook/03_account_linking/03_unlink.md",sourceDirName:"develop/01_sdk/02_cookbook/03_account_linking",slug:"/develop/sdk/cookbook/account_linking/account-unlink",permalink:"/docs/develop/sdk/cookbook/account_linking/account-unlink",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/03_account_linking/03_unlink.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"account-unlink",title:"Unlink an Account From a KILT DID"},sidebar:"sdk",previous:{title:"Query the web3name of an Account",permalink:"/docs/develop/sdk/cookbook/account_linking/account-name"},next:{title:"Create a CType",permalink:"/docs/develop/sdk/cookbook/claiming/ctype-creation"}},l={},u=[],d={toc:u};function k(n){let{components:t,...o}=n;return(0,e.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,e.kt)("p",null,"Similar to the way a new account <-> DID link is created, removing a link can happen in one of three ways:"),(0,e.kt)("ol",null,(0,e.kt)("li",{parentName:"ol"},"The DID owner submits a transaction indicating which account to unlink:")),(0,e.kt)(c.Z,{className:"language-ts",mdxType:"CodeBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function unlinkAccountFromDid(\n  keystore: Kilt.Did.DemoKeystore,\n  did: Kilt.Did.FullDidDetails,\n  submitterAccount: KeyringPair,\n  linkedAccountAddress: KeyringPair['address'],\n  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils\n    .IS_FINALIZED\n): Promise<void> {\n  // The DID owner removes the link between itself and the specified account.\n  const accountUnlinkTx =\n    await Kilt.Did.AccountLinks.getLinkRemovalByDidExtrinsic(\n      linkedAccountAddress\n    ).then((tx) =>\n      did.authorizeExtrinsic(tx, keystore, submitterAccount.address)\n    )\n\n  await Kilt.BlockchainUtils.signAndSubmitTx(\n    accountUnlinkTx,\n    submitterAccount,\n    {\n      resolveOn\n    }\n  )\n}\n"),(0,e.kt)("ol",{start:2},(0,e.kt)("li",{parentName:"ol"},"The linked account submits a transaction indicating that the link with the DID should be removed:")),(0,e.kt)(c.Z,{className:"language-ts",mdxType:"CodeBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function unlinkDidFromAccount(\n  linkOwnerAccount: KeyringPair,\n  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils\n    .IS_FINALIZED\n): Promise<void> {\n  // The tx does not need to be authorized by a DID, but the submitter account removes its own link.\n  const accountUnlinkTx =\n    await Kilt.Did.AccountLinks.getLinkRemovalByAccountTx()\n\n  await Kilt.BlockchainUtils.signAndSubmitTx(\n    accountUnlinkTx,\n    linkOwnerAccount,\n    {\n      resolveOn\n    }\n  )\n}\n"),(0,e.kt)("ol",{start:3},(0,e.kt)("li",{parentName:"ol"},"The deposit payer submits a transaction indicating that they want to reclaim their deposit, which in turn removes the existing link between the specified account and DID:")),(0,e.kt)(c.Z,{className:"language-ts",mdxType:"CodeBlock"},"import type { KeyringPair } from '@polkadot/keyring/types'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function reclaimLinkDeposit(\n  depositPayerAccountAccount: KeyringPair,\n  linkedAccountAddress: KeyringPair['address'],\n  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.BlockchainUtils\n    .IS_FINALIZED\n): Promise<void> {\n  // The tx does not need to be authorized by a DID, but the deposit payer's account claims the deposit and removes the link.\n  const accountUnlinkTx = await Kilt.Did.AccountLinks.getReclaimDepositTx(\n    linkedAccountAddress\n  )\n\n  await Kilt.BlockchainUtils.signAndSubmitTx(\n    accountUnlinkTx,\n    depositPayerAccountAccount,\n    {\n      resolveOn\n    }\n  )\n}\n"))}k.isMDXComponent=!0}}]);