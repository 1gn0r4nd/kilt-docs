"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4243],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),o=n(34334),r="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,s),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(83117),o=n(67294),r=n(34334),s=n(72389),i=n(67392),l=n(7094),c=n(12466),u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:h,groupId:m,className:f}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=h??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,l.U)(),[N,x]=(0,o.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=m){const e=v[m];null!=e&&e!==N&&b.some((t=>t.value===e))&&x(e)}const C=e=>{const t=e.currentTarget,n=T.indexOf(t),a=b[n].value;a!==N&&(S(t),x(a),null!=m&&w(m,String(a)))},_=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},f)},b.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:_,onFocus:C,onClick:C},s,{className:(0,r.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function h(e){const t=(0,s.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},2012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(83117),o=(n(67294),n(3905)),r=n(65488),s=n(85162);const i={id:"session-keys",title:"Set and Rotate Session Keys"},l=void 0,c={unversionedId:"participate/staking/become_a_collator/session-keys",id:"participate/staking/become_a_collator/session-keys",title:"Set and Rotate Session Keys",description:"As a collator, you need to link your session keys to your collator account.",source:"@site/docs/participate/01_staking/01_become_a_collator/04_session_keys.md",sourceDirName:"participate/01_staking/01_become_a_collator",slug:"/participate/staking/become_a_collator/session-keys",permalink:"/docs/participate/staking/become_a_collator/session-keys",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/participate/01_staking/01_become_a_collator/04_session_keys.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"session-keys",title:"Set and Rotate Session Keys"},sidebar:"staking",previous:{title:"Set Up a Node",permalink:"/docs/participate/staking/become_a_collator/setup-node"},next:{title:"Join the Collator Candidate Pool",permalink:"/docs/participate/staking/become_a_collator/join"}},u={},p=[{value:"Generate New Session Keys",id:"generating-session-keys",level:2}],d={toc:p};function h(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As a collator, you need to link your session keys to your collator account.\nOnce linked, the keys are used to identify your collator node.\nYour collator address will receive the permit to build blocks, but the session keys pass this permit to your node.\nTo check whether the account has already some session keys set, the RPC functions ",(0,o.kt)("inlineCode",{parentName:"p"},"author > hasKey(publicKey, keyType)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"author > hasSessionKeys(sessionKeys)")," can be called."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(12573).Z,width:"2008",height:"748"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The session keys associate a collator node with an account on the blockchain.\nThey are hot keys that must be kept online.\nIt is recommended to change them throughout sessions.")),(0,o.kt)("h2",{id:"generating-session-keys"},"Generate New Session Keys"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Make sure that no unauthorized party is able to access the RPC endpoint of the collator.\nUse SSH forwarding for the RPC port when needing to perform some RPC operations on the node with"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"ssh -L 127.0.0.1:9944:127.0.0.1:9944 <user>@<server>\n"))),(0,o.kt)("p",null,"There are three ways to create the session keys.\nWe recommend using the curl command on the same host that the node is running or from a host that has an active SSH tunnel with it.\nThis way there is no need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--unsafe-rpc-external")," argument to the node.\nNevertheless, the session keys can also be rotated using the PolkadotJS Apps interface or by directly storing the new key in the node's keystore."),(0,o.kt)(r.Z,{defaultValue:"curl",values:[{label:"curl",value:"curl"},{label:"Apps",value:"apps"},{label:"Subkey",value:"subkey"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("p",null,"A collator can use the following command to rotate the session key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Content-Type: application/json" -d \'{"id":1, "jsonrpc":"2.0", "method": "author_rotateKeys", "params":[]}\' http://localhost:9933\n')),(0,o.kt)("p",null,"The answer should look like the JSON object below.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"result")," key is the HEX-encoded public part of the newly created session key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{"jsonrpc":"2.0","result":"0xb2dc33b1ff0c6f8b07f882236bb992e903452791ff5225b5eb4c2c1a40252d5d","id":1}\n'))),(0,o.kt)(s.Z,{value:"apps",mdxType:"TabItem"},(0,o.kt)("p",null,"In order to use the PolkadotJS Apps UI, the node WebSocket endpoint must be reachable.\nThis can be done either by publicly exposing it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--ws-external")," flag, which is discouraged, or by setting up an SSH tunnel for the WebSocket endpoint with ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh -L 127.0.0.1:9933:127.0.0.1:9933 <user>@<server>"),".\nIf the latter option is chosen, there is no need to have a separate SSH tunnel for RPC traffic as all the RPC operations can be performed directly from the now-accessible PolkadotJS Apps interface."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(60314).Z,width:"638",height:"218"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(70793).Z,width:"330",height:"544"})),(0,o.kt)("p",null,"After connecting to the node, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer -> RPC calls -> author -> rotateKeys()")," from the menu.\nThis will generate a new session key which replaces the existing one."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(24595).Z,width:"1998",height:"500"}))),(0,o.kt)(s.Z,{value:"subkey",mdxType:"TabItem"},(0,o.kt)("p",null,"A keypair can be created using the ",(0,o.kt)("a",{parentName:"p",href:"https://substrate.dev/docs/en/knowledgebase/integrate/subkey"},"subkey tool")," by following the steps in the tool's official documentation.\nThe generated private and public keys can then be saved within the keystore folder of the collator node to be used as session keys."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u276f subkey generate -n kilt\nSecret phrase `very secure private key you should not use the example private key` is account:\n  Secret seed:      0xcafe97b4b8f0adc1adeb3feef30bf2e5b9d49ddd897f268c8027c850DeadBEEF\n  Public key (hex): 0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010\n  Account ID:       0xda3861a45e0197f3ca145c2c209f9126e5053asdg03e459af4255cf8011d51010\n  SS58 Address:     4srC1aowD94H9UH9xsnfv7XV6oHU6dhCymKYZHWKsdddaP29\n")),(0,o.kt)("p",null,"The name of the file must be the ",(0,o.kt)("em",{parentName:"p"},"public")," key prepended with ",(0,o.kt)("inlineCode",{parentName:"p"},"61757261")," (HEX representation of ",(0,o.kt)("inlineCode",{parentName:"p"},"aura"),") and without the ",(0,o.kt)("inlineCode",{parentName:"p"},"0x")," prefix, while the content of the file has to be the secret phrase."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(31767).Z,width:"1346",height:"137"})),(0,o.kt)("p",null,"For instance, with the keypair generated in the example, the session key file would be stored at the path ",(0,o.kt)("inlineCode",{parentName:"p"},"./keystores/61757261da3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010"),"."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The rotation of the session key should be done periodically to ensure that your collator can remain secure and safe from attacks.\nYou can find more information about session keys in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/session-keys/#generation-and-use"},"Substrate Documentation"),".")),(0,o.kt)("p",null,"Once a new session key is generated, you must then link that key to your collator account in order to receive rewards for producing new blocks..\nThis operation is performed by submitting a signed extrinsic to the blockchain."),(0,o.kt)("p",null,"For Spiritnet, the endpoint is ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkilt-rpc.dwellir.com#/explorer"},"wss://spiritnet.kilt.io"),", while for Peregrine it is ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fperegrine-stg.kilt.io%2Fpara-public-ws#/explorer"},"wss://peregrine.kilt.io/parachain-public-ws"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Developer -> Extrinsics -> Submission")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select your collator KILT address as the extrinsic submitter (the ",(0,o.kt)("em",{parentName:"li"},"using the selected account")," field)"),(0,o.kt)("li",{parentName:"ol"},"Set up the following extrinsic: ",(0,o.kt)("inlineCode",{parentName:"li"},"session -> setKeys(keys, proof)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"keys")," -> the public session key (",(0,o.kt)("inlineCode",{parentName:"li"},"0xda3861a45e0197f3ca145c2c209f9126e5053fas503e459af4255cf8011d51010")," in the example above)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"proof")," -> the proof of ownership. It can be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"0x00")))),(0,o.kt)("li",{parentName:"ol"},"Sign and submit the extrinsic (the ",(0,o.kt)("em",{parentName:"li"},"Submit Transaction")," button)")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(11367).Z,width:"2006",height:"838"})),(0,o.kt)("p",null,"Once the extrinsic is executed, you will have linked the new session key to your account and can start receiving rewards for producing new blocks.\nHowever, the new session key does not become effective immediately but with the start of the next session."))}h.isMDXComponent=!0},12573:function(e,t,n){t.Z=n.p+"assets/images/author-hasKey-6caffb2e9451f1adac3c41d19af71c98.png"},24595:function(e,t,n){t.Z=n.p+"assets/images/author-rotateKeys-05b59c348c0849e595f378b8fd0677ce.png"},60314:function(e,t,n){t.Z=n.p+"assets/images/chain-menu-3faf84d47516433952fdf28656432cdf.png"},70793:function(e,t,n){t.Z=n.p+"assets/images/chain-selection-2e5266e706e96d168aa43bd9924db793.png"},31767:function(e,t,n){t.Z=n.p+"assets/images/session-key-file-34f900633d965771da7ad282f7dcb4ab.png"},11367:function(e,t,n){t.Z=n.p+"assets/images/session-setKeys-13186e3682ebaaf4b589a81523e8a9f4.png"}}]);