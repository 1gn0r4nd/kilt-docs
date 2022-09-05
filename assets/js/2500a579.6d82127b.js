(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6275],{85162:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(67294),o=a(34334),i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:a},t)}},65488:function(e,t,a){"use strict";a.d(t,{Z:function(){return h}});var n=a(83117),o=a(67294),i=a(34334),r=a(72389),l=a(67392),s=a(7094),c=a(12466),p="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:a,block:r,defaultValue:u,values:h,groupId:k,className:m}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=h??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,l.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:y}=(0,s.U)(),[w,C]=(0,o.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=k){const e=D[k];null!=e&&e!==w&&f.some((t=>t.value===e))&&C(e)}const x=e=>{const t=e.currentTarget,a=N.indexOf(t),n=f[a].value;n!==w&&(T(t),C(n),null!=k&&y(k,String(n)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;a=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;a=N[t]??N[N.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:I,onFocus:x,onClick:x},r,{className:(0,i.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,o.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,r.Z)();return o.createElement(u,(0,n.Z)({key:String(t)},e))}},20499:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(83117),o=(a(67294),a(3905)),i=a(93456),r=(a(65488),a(85162),a(22635));const l={id:"join",title:"Become a Delegator"},s=void 0,c={unversionedId:"participate/staking/delegate/join",id:"participate/staking/delegate/join",title:"Become a Delegator",description:"In contrast to the rather difficult path to become a Collator candidate, joining the Delegator pool is rather simple.",source:"@site/docs/participate/01_staking/03_delegate/02_become.md",sourceDirName:"participate/01_staking/03_delegate",slug:"/participate/staking/delegate/join",permalink:"/docs/participate/staking/delegate/join",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/03_delegate/02_become.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"join",title:"Become a Delegator"},sidebar:"staking",previous:{title:"Overview",permalink:"/docs/participate/staking/delegate/overview"},next:{title:"Adjust Your Delegation Stake",permalink:"/docs/participate/staking/delegate/adjust-stake"}},p={},d=[{value:"Happy Path",id:"happy-path",level:2},{value:"Unhappy Path",id:"unhappy-path",level:2}],u={toc:d};function h(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In contrast to the rather difficult ",(0,o.kt)("a",{parentName:"p",href:"/docs/participate/staking/become_a_collator/overview"},"path to become a Collator candidate"),", joining the Delegator pool is rather simple.\nAnyone can delegate to a Collator candidate by staking at least 20 KILT and calling ",(0,o.kt)("inlineCode",{parentName:"p"},"parachainStaking -> joinDelegators"),"."),(0,o.kt)(r.ZP,{mdxType:"StakingTxDisclaimer"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(52352).Z,width:"2004",height:"1334"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the Delegator's KILT address as the extrinsic submitter (the ",(0,o.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,o.kt)("li",{parentName:"ol"},"Select the appropriate extrinsic: ",(0,o.kt)("inlineCode",{parentName:"li"},"parachainStaking -> revokeDelegation")),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Id")," option (the ",(0,o.kt)("em",{parentName:"li"},"MultiAddress (LookupSource) field"),")"),(0,o.kt)("li",{parentName:"ol"},"Select the Collator account (the ",(0,o.kt)("em",{parentName:"li"},"Id: AccountId")," field)"),(0,o.kt)("li",{parentName:"ol"},"Choose the desired stake amount."),(0,o.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,o.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A recent change in the blockchain metadata resulted in a change in the UI regarding how balances are shown.\nIn the current version of PolkadotJS Apps, specifying 1 KILT requires adding 15 trailing ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),"s.\nSo, for instance, 1 KILT needs to be written as ",(0,o.kt)("inlineCode",{parentName:"p"},"1,000,000,000,000,000"),", while 10,000 KILT would be written as ",(0,o.kt)("inlineCode",{parentName:"p"},"10,000,000,000,000,000,000"),".")),(0,o.kt)("h2",{id:"happy-path"},"Happy Path"),(0,o.kt)("p",null,"If your chosen Collator candidate has at least one empty slot in their delegation pool (out of 35 maximum slots at the time of writing), your delegation is successful and you immediately start receiving rewards each time the Collator you delegated will produce a block."),(0,o.kt)("div",{className:"kilt-mermaid"},(0,o.kt)(i.Mermaid,{config:{},chart:'flowchart TD\n   A["Hold at least 20 KILT"] --\x3e |"decide on candidate"| B("Collator Candidate chosen");\n   B --\x3e |"call extrinsic joinDelegators"| C{"Can delegate to target? \n Either \n 1. There are empty \n delegations or \n 2. You delegate more \n than another Delegator"};\n   C --\x3e |yes| D("Delegating to a Collator Candidate")\n   D --\x3e |"Collator produces block"| E("Receive rewards")\n    %% Styles\n    A:::unstakedFreeKilt\n    B:::preDelegationCheck\n    C:::preDelegationCheck\n    D:::activelyDelegating\n    E:::activelyDelegating\n    \n    %% StyleDef\n    classDef preDelegationCheck fill:#FFF4BD,stroke:none;\n    classDef notDelegating fill:#F1C0B9, stroke:black, stroke-width:1px;;\n    classDef unstakedFreeKilt fill:#85D2D0,stroke:black, stroke-width:1px;\n    classDef activelyDelegating fill:#94C973,stroke:#333, stroke-width:2px;\n    classDef preUnlockStaked fill:#F37970, stroke:black;',mdxType:"Mermaid"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If your chosen Collator fails to produce blocks, neither the Collator itself nor their Delegators receive rewards.\nThis can happen if they have connectivity issues or are not building blocks fast enough. ")),(0,o.kt)("h2",{id:"unhappy-path"},"Unhappy Path"),(0,o.kt)("p",null,"If your Collator candidate has a maxed out delegation pool, an upcoming Delegator candidate must stake more than the current lowest Delegator of that pool.\nWhen that happens,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The kicked Delegator will be replaced by the Delegator with a higher delegation immediately"),(0,o.kt)("li",{parentName:"ul"},"The kicked Delegator's stake is prepared for unstaking as if they revoked the delegation (",(0,o.kt)("em",{parentName:"li"},"see ",(0,o.kt)("a",{parentName:"em",href:"#Revoking"},"revoking")),")"),(0,o.kt)("li",{parentName:"ul"},"A Delegator needs to wait 7 days (in block time) to be able to unlock the stake.\nPlease note that it can take longer in real time as the block times assumes a constant block time of 12s which is not guaranteed.")),(0,o.kt)("div",{className:"kilt-mermaid"},(0,o.kt)(i.Mermaid,{chart:'flowchart TD\n   A["Hold at least 20 KILT"] --\x3e |"decide on candidate"| B("Collator Candidate chosen");\n   B --\x3e |"call extrinsic joinDelegators"| C{"Can delegate to target? \n Either \n 1. There are empty \n delegations or \n 2. You delegate more \n than another Delegator"};\n   C --\x3e |no| C2{"Balance locked?\n e.g., previously delegated \n without unlocking?"}\n   C2 --\x3e |no| A\n\n    %% Styles\n    A:::unstakedFreeKilt\n    B:::preDelegationCheck\n    C:::preDelegationCheck\n    C2:::notDelegating\n    \n    %% StyleDef\n    classDef preDelegationCheck fill:#FFF4BD,stroke:none;\n    classDef notDelegating fill:#F1C0B9, stroke:black, stroke-width:1px;\n    classDef unstakedFreeKilt fill:#85D2D0,stroke:black, stroke-width:1px',mdxType:"Mermaid"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For now, an account can only delegate to one Collator at any time!\nMoreover, you can only (re-) delegate once per staking round, e.g., call ",(0,o.kt)("inlineCode",{parentName:"p"},"parachainStaking -> {joinDelegators, delegateAnotherCandidate}"),".")))}h.isMDXComponent=!0},22635:function(e,t,a){"use strict";a.d(t,{ZP:function(){return r}});var n=a(83117),o=(a(67294),a(3905));const i={toc:[]};function r(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can either execute this transaction in Polkadot JS Apps or the ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/builtonkilt#web-apps"},(0,o.kt)("strong",{parentName:"a"},"KILT Stakeboard")),", which serves as an in-house developed Frontend for all KILT staking activity.\nBelow, we explain how to do it for the former case.\nHowever, the latter option is described in detail in the ",(0,o.kt)("a",{parentName:"p",href:"https://support.kilt.io/support/solutions/80000442174"},(0,o.kt)("strong",{parentName:"a"},"BOTLabs Trusted Entity support hub")),".")),(0,o.kt)("p",null," In Polkadot JS (",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),") go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission"),"."))}r.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function o(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=11748},52352:function(e,t,a){"use strict";t.Z=a.p+"assets/images/parachainStaking-joinDelegators-673f3b3d0c410b6f43d425caa29f2e27.png"}}]);