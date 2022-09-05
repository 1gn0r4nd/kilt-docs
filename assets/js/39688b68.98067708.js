"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9828],{46793:function(e,t,n){var s=n(67294),o=n(90814);t.Z=e=>{let{children:t,funcName:n="main",funcEnd:a="}",snippets:i,leadingSpaces:r=2,...c}=e;const p=t.split(/\r?\n/);let d="";if(i)d=JSON.parse(i).map((e=>Array.isArray(e)?p.slice(e[0],e[1]).map((e=>e.slice(r))).join("\n"):e)).join("\n");else if(n){let e,t;for(let s=0;s<p.length;s++)if(p[s].includes(n)){if(e=s,p[s].includes(" {"))break}else if(p[s].includes(" {")){e=s;break}for(let n=p.length-1;n>0;n--)if(p[n].includes(a)){t=n;break}d=p.slice(e+1,t).map((e=>e.slice(r))).join("\n")}return s.createElement(o.Z,c,d)}},37620:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var s=n(83117),o=(n(67294),n(3905)),a=n(46793);const i={id:"replay_protection",title:"Protect Against Replay Attacks"},r=void 0,c={unversionedId:"develop/sdk/cookbook/messaging/replay_protection",id:"develop/sdk/cookbook/messaging/replay_protection",title:"Protect Against Replay Attacks",description:"Whenever data travels on a public network, even when encrypted or signed, the communicating parties need to make sure they never accept and process a message more than once to protect against exploits by malicious third parties (so-called replay attacks).",source:"@site/docs/develop/01_sdk/02_cookbook/05_messaging/01_replay_protection.md",sourceDirName:"develop/01_sdk/02_cookbook/05_messaging",slug:"/develop/sdk/cookbook/messaging/replay_protection",permalink:"/docs/develop/sdk/cookbook/messaging/replay_protection",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/05_messaging/01_replay_protection.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"replay_protection",title:"Protect Against Replay Attacks"},sidebar:"sdk",previous:{title:"Revoke a Credential",permalink:"/docs/develop/sdk/cookbook/claiming/attestation-removal"},next:{title:"Chain Setup for Development",permalink:"/docs/develop/sdk/chain_setup/"}},p={},d=[],l={toc:d};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Whenever data travels on a public network, even when encrypted or signed, the communicating parties need to make sure they never accept and process a message more than once to protect against exploits by malicious third parties (so-called replay attacks).\nWhen requesting and submitting Credential Presentations, vulnerabilities for replay attacks can be prevented by requesting that the Claimer sign a unique piece of data as part of the Presentation, as shown in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/claiming/presentation-creation"},"Verification Cookbook section"),"."),(0,o.kt)("p",null,"However, protection against replay attacks can also happen on the message layer.\nTo help prevent these types of attacks, KILT messages are timestamped and expose a unique identifier as part of their encrypted content, which therefore cannot be tampered with.\nIt is good practice to impose limits on an acceptable range for timestamps on incoming messages and to keep a record of the ids of previous submissions, which can be purged after their acceptance range has run out.\nThis way, any resubmission is either rejected because its id is known to the recipient, or because its timestamp is too old.\nBelow you can find example code of how this could be implemented."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define acceptance range and set up a record of past submissions:")),(0,o.kt)(a.Z,{className:"language-ts",mdxType:"SnippetBlock"},"/* eslint-disable @typescript-eslint/no-unused-vars */\n\nexport async function main(): Promise<void> {\n  const MAX_ACCEPTED_AGE = 60_000 // ms -> 1 minute\n  const MIN_ACCEPTED_AGE = -1_000 // allow for some imprecision in system time\n  const submissions = new Map<string, number>()\n}\n"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Check record for each incoming message and update if accepted:")),(0,o.kt)(a.Z,{className:"language-ts",mdxType:"SnippetBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(\n  submissions: Map<string, number>,\n  decrypted: Kilt.Message,\n  MIN_ACCEPTED_AGE: number,\n  MAX_ACCEPTED_AGE: number\n): Promise<void> {\n  // is messageId fresh and createdAt recent ?\n  if (\n    submissions.has(decrypted.messageId) ||\n    decrypted.createdAt < Date.now() - MAX_ACCEPTED_AGE ||\n    decrypted.createdAt > Date.now() - MIN_ACCEPTED_AGE\n  ) {\n    // no -> reject message\n  } else {\n    submissions.set(decrypted.messageId, decrypted.createdAt)\n    // yes -> accept & process message\n  }\n}\n"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Purge at regular intervals:")),(0,o.kt)(a.Z,{className:"language-ts",mdxType:"SnippetBlock"},"export async function main(\n  submissions: Map<string, number>,\n  MAX_ACCEPTED_AGE: number\n): Promise<void> {\n  setInterval(() => {\n    const outdatedTimestamp = Date.now() - MAX_ACCEPTED_AGE\n    submissions.forEach((timestamp, hash) => {\n      if (timestamp < outdatedTimestamp) submissions.delete(hash)\n    })\n  }, 1000)\n}\n"))}m.isMDXComponent=!0}}]);