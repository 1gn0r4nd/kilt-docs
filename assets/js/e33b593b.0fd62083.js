"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3229],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39016:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return p}});var a=n(83117),o=(n(67294),n(3905)),i=n(22635);const r={id:"join",title:"Join the Collator Candidate Pool"},l=void 0,s={unversionedId:"participate/staking/become_a_collator/join",id:"participate/staking/become_a_collator/join",title:"Join the Collator Candidate Pool",description:"Before a Collator can author blocks, the node needs to fully sync up with both the KILT parachain and the Kusama relaychain.",source:"@site/docs/participate/01_staking/01_become_a_collator/05_join_collators.md",sourceDirName:"participate/01_staking/01_become_a_collator",slug:"/participate/staking/become_a_collator/join",permalink:"/docs/participate/staking/become_a_collator/join",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/01_become_a_collator/05_join_collators.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"join",title:"Join the Collator Candidate Pool"},sidebar:"staking",previous:{title:"Set and Rotate Session Keys",permalink:"/docs/participate/staking/become_a_collator/session-keys"},next:{title:"Adjust Your Own Stake",permalink:"/docs/participate/staking/advanced_collator_section/adjust-stake"}},c={},p=[{value:"Minimum Token Requirement",id:"minimum-token-requirement",level:2},{value:"Execute the Joining Transaction",id:"execute-the-joining-transaction",level:2},{value:"Check Your Position in the Collators Queue",id:"check-your-position-in-the-collators-queue",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before a Collator can author blocks, the node needs to fully sync up with both the KILT parachain and the Kusama relaychain.\nDepending on the size of the blockchain states, it may take from a number of hours to few days for the node to fully synchronize.\nMore details can be found on the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/maintain-guides-how-to-validate-kusama#synchronize-chain-data"},"Polkadot network docs"),"."),(0,o.kt)("p",null,"After you have finished with the setup, you can finally tell the chain that you are ready to collate and join the pool of candidates."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"These steps should be followed only once a Collator node has successfully ",(0,o.kt)("a",{parentName:"p",href:"/docs/participate/staking/become_a_collator/session-keys"},(0,o.kt)("strong",{parentName:"a"},"linked a session key to its address"))," and synced the parachain and relaychain states by following the previous steps.")),(0,o.kt)("h2",{id:"minimum-token-requirement"},"Minimum Token Requirement"),(0,o.kt)("p",null,"The maximum number of ",(0,o.kt)("strong",{parentName:"p"},"active")," Collators is currently (2022-05-05) 16 on Peregrine and 30 on Spiritnet."),(0,o.kt)("p",null,"In order to become a Collator, you must stake"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"at least ",(0,o.kt)("em",{parentName:"li"},"10,000 KILT")," tokens and"),(0,o.kt)("li",{parentName:"ul"},"at most ",(0,o.kt)("em",{parentName:"li"},"200,000 KILT")," tokens.")),(0,o.kt)("h2",{id:"execute-the-joining-transaction"},"Execute the Joining Transaction"),(0,o.kt)("p",null,"The Collator must call an extrinsic ",(0,o.kt)("inlineCode",{parentName:"p"},"parachainStaking -> joinCandidates(stake)")," with the desired stake to join the candidate pool."),(0,o.kt)(i.ZP,{mdxType:"StakingTxDisclaimer"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(3500).Z,width:"2002",height:"1048"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the Collator's KILT address as the extrinsic submitter (the ",(0,o.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,o.kt)("li",{parentName:"ol"},"Select the following extrinsic: ",(0,o.kt)("inlineCode",{parentName:"li"},"parachainStaking -> joinCandidates(stake)")),(0,o.kt)("li",{parentName:"ol"},"Insert the staked KILT amount for the Collator (any value between ",(0,o.kt)("inlineCode",{parentName:"li"},"10,000,000,000,000,000,000")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"20,000,000,000,000,000,0000"),")"),(0,o.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,o.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A recent change in the blockchain metadata resulted in a change in the UI regarding how balances are shown.\nIn the current version of PolkadotJS Apps, specifying 1 KILT requires adding 15 trailing ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"s.\nSo, for instance, 1 KILT needs to be written as ",(0,o.kt)("inlineCode",{parentName:"p"},"1,000,000,000,000,000"),", while 10,000 KILT would be written as ",(0,o.kt)("inlineCode",{parentName:"p"},"10,000,000,000,000,000,000"),".")),(0,o.kt)("h2",{id:"check-your-position-in-the-collators-queue"},"Check Your Position in the Collators Queue"),(0,o.kt)("p",null,"A Collator candidate can check the current top candidates to see their position and required staked amount to become an active Collator, i.e., to start authoring new blocks."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(22703).Z,width:"2000",height:"678"})),(0,o.kt)("p",null,"In Polkadot JS (",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer -> Chain state -> Storage")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Selected state query: ",(0,o.kt)("inlineCode",{parentName:"li"},"parachainStaking -> topCandidates(): ParachainStakingSetOrderedSet")),(0,o.kt)("li",{parentName:"ol"},'Execute the query by pressing the "+" button on the right side')),(0,o.kt)("p",null,"Now, you should see a window which lists Collators (the ",(0,o.kt)("em",{parentName:"p"},"owner")," field) ordered by their total stake (the ",(0,o.kt)("em",{parentName:"p"},"amount")," field) from greatest to lowest."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(935).Z,width:"2006",height:"780"})),(0,o.kt)("p",null,"If the Collator has enough self-stake and Delegator stake it will be selected to collate.\nOtherwise, the last address in the list will be the least staked candidate.\nA time period of two sessions must pass before the Collator will be authoring blocks, e.g.,  after the remainder of the current session and the entire next one."))}d.isMDXComponent=!0},22635:function(e,t,n){n.d(t,{ZP:function(){return r}});var a=n(83117),o=(n(67294),n(3905));const i={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can either execute this transaction in Polkadot JS Apps or the ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/builtonkilt#web-apps"},(0,o.kt)("strong",{parentName:"a"},"KILT Stakeboard")),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we explain how to do it for the former case.\nHowever, the latter option is described in detail in the ",(0,o.kt)("a",{parentName:"p",href:"https://support.kilt.io/support/solutions/80000442174"},(0,o.kt)("strong",{parentName:"a"},"BOTLabs Trusted Entity support hub")),".")),(0,o.kt)("p",null," In Polkadot JS (",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission"),"."))}r.isMDXComponent=!0},3500:function(e,t,n){t.Z=n.p+"assets/images/parachainStaking-joinCandidates-15604412560816fe1f7a71aa25cc77f0.png"},22703:function(e,t,n){t.Z=n.p+"assets/images/parachainStaking-topCandidates1-a8c236ec0fb40d8718bcc057ba696434.png"},935:function(e,t,n){t.Z=n.p+"assets/images/parachainStaking-topCandidates2-bc5f6a1ad87e00230b06f5e667eb6580.png"}}]);