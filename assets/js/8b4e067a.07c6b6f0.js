"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[378],{58215:function(e,t,n){var o=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return d}});var o=n(83117),i=n(67294),a=n(72389),r=n(24726),l=n(86010),s="tabItem_LplD";function c(e){var t,n,a,c=e.lazy,d=e.block,u=e.defaultValue,p=e.values,m=e.groupId,h=e.className,k=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,r.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===u?u:null!=(t=null!=u?u:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=k[0])?void 0:a.props.value;if(null!==v&&!f.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,r.UB)(),b=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,i.useState)(v),D=N[0],T=N[1],I=[],K=(0,r.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=b[m];null!=x&&x!==D&&f.some((function(e){return e.value===x}))&&T(x)}var C=function(e){var t=e.currentTarget,n=I.indexOf(t),o=f[n].value;o!==D&&(K(t),T(o),null!=m&&w(m,o))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o=I.indexOf(e.currentTarget)+1;n=I[o]||I[0];break;case"ArrowLeft":var i=I.indexOf(e.currentTarget)-1;n=I[i]||I[I.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},h)},f.map((function(e){var t=e.value,n=e.label,a=e.attributes;return i.createElement("li",(0,o.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:function(e){return I.push(e)},onKeyDown:j,onFocus:C,onClick:C},a,{className:(0,l.Z)("tabs__item",s,null==a?void 0:a.className,{"tabs__item--active":D===t})}),null!=n?n:t)}))),c?(0,i.cloneElement)(k.filter((function(e){return e.props.value===D}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==D})}))))}function d(e){var t=(0,a.Z)();return i.createElement(c,(0,o.Z)({key:String(t)},e))}},46793:function(e,t,n){var o=n(80102),i=n(67294),a=n(31736),r=["children","funcName","funcEnd","snippets","leadingSpaces"];t.Z=function(e){var t=e.children,n=e.funcName,l=void 0===n?"main":n,s=e.funcEnd,c=void 0===s?"}":s,d=e.snippets,u=e.leadingSpaces,p=void 0===u?2:u,m=(0,o.Z)(e,r),h=t.split(/\r?\n/),k="";if(d)k=JSON.parse(d).map((function(e){return Array.isArray(e)?h.slice(e[0],e[1]).map((function(e){return e.slice(p)})).join("\n"):e})).join("\n");else if(l){for(var f,g,v=0;v<h.length;v++)if(h[v].includes(l)){if(f=v,h[v].includes(" {"))break}else if(h[v].includes(" {")){f=v;break}for(var y=h.length-1;y>0;y--)if(h[y].includes(c)){g=y;break}k=h.slice(f+1,g).map((function(e){return e.slice(p)})).join("\n")}return i.createElement(a.Z,m,k)}},82748:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return h}});var o=n(83117),i=n(80102),a=(n(67294),n(3905)),r=n(31736),l=n(46793),s=n(9877),c=n(58215),d=["components"],u={id:"quickstart",title:"Quickstart"},p=void 0,m={unversionedId:"develop/sdk/quickstart",id:"develop/sdk/quickstart",title:"Quickstart",description:"The following guide will give you a starting point to begin with KILT.",source:"@site/docs/develop/01_sdk/01_quickstart.md",sourceDirName:"develop/01_sdk",slug:"/develop/sdk/quickstart",permalink:"/docs/develop/sdk/quickstart",editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/01_quickstart.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"quickstart",title:"Quickstart"},sidebar:"sdk",next:{title:"Create a Light DID",permalink:"/docs/develop/sdk/cookbook/dids/light-did-creation"}},h=[{value:"Setup",id:"setup",children:[{value:"Import the KILT SDK",id:"import-the-kilt-sdk",children:[],level:3},{value:"Connect to the KILT Blockchain",id:"connect-to-the-kilt-blockchain",children:[],level:3}],level:2},{value:"Query the KILT Blockchain",id:"query-the-kilt-blockchain",children:[],level:2},{value:"Retrieve and Verify a Credential",id:"retrieve-and-verify-a-credential",children:[],level:2}],k={toc:h};function f(e){var t=e.components,n=(0,i.Z)(e,d);return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following guide will give you a starting point to begin with KILT.\nWhat you will have achieved at the end of this is the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Import the ",(0,a.kt)("strong",{parentName:"li"},"KILT SDK")," into a project"),(0,a.kt)("li",{parentName:"ol"},"Connect to the ",(0,a.kt)("strong",{parentName:"li"},"KILT blockchain")),(0,a.kt)("li",{parentName:"ol"},"Query a ",(0,a.kt)("strong",{parentName:"li"},"web3name")," to get its ",(0,a.kt)("strong",{parentName:"li"},"DID")),(0,a.kt)("li",{parentName:"ol"},"Verify a ",(0,a.kt)("strong",{parentName:"li"},"Credential"),", published via a ",(0,a.kt)("strong",{parentName:"li"},"DID service endpoint"))),(0,a.kt)("p",null,"After completing the quickstart guide, you should have learned a little about KILT by actually using it.\nThe guide requires some experience with javascript and command-line tools.\nWe will have recommended guides to other tutorials to dive deeper into some of the topics."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"We will focus on creating a new project from scratch, which will require a little setup.\nFirst, we need to create a new project in a new directory.\nFor this, we run ",(0,a.kt)("inlineCode",{parentName:"p"},"mkdir kilt-rocks && cd kilt-rocks"),"."),(0,a.kt)("p",null,"From inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"kilt-rocks")," project directory, install the ",(0,a.kt)("strong",{parentName:"p"},"KILT SDK"),", ",(0,a.kt)("strong",{parentName:"p"},"Node")," and ",(0,a.kt)("strong",{parentName:"p"},"Axios"),":"),(0,a.kt)(s.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @kiltprotocol/sdk-js node axios\n"))),(0,a.kt)(c.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @kiltprotocol/sdk-js node axios\n")))),(0,a.kt)("p",null,"After you have imported the SDK, you are now able to access the functionalities that KILT provides.\nWith all the required dependencies set, just create a new (empty) script file with ",(0,a.kt)("inlineCode",{parentName:"p"},"touch quickstart.js"),".\nInside the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," add in the value ",(0,a.kt)("inlineCode",{parentName:"p"},'"type": "module"'),"."),(0,a.kt)("p",null,"Let's first declare our ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," function that will execute our script:"),(0,a.kt)(r.Z,{className:"language-ts",mdxType:"CodeBlock"},"export function main() {\n  console.log('Hello, world!')\n}\n"),(0,a.kt)("p",null,"If the setup is correct you can excute the script by calling the name of the file using Node."),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"npm",label:"npm",default:!0,mdxType:"TabItem"},(0,a.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"npm node quickstart.js")),(0,a.kt)(c.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"yarn node quickstart.js"))),(0,a.kt)("p",null,"As we will extend the code in this file, you can always excute it with the same command."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Let's get started! \ud83d\udd25")),(0,a.kt)("h3",{id:"import-the-kilt-sdk"},"Import the KILT SDK"),(0,a.kt)("p",null,"Let's begin by importing the ",(0,a.kt)("strong",{parentName:"p"},"KILT SDK")," and ",(0,a.kt)("strong",{parentName:"p"},"Axios"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as Kilt from '@kiltprotocol/sdk-js'\nimport axios from 'axios'\n")),(0,a.kt)("p",null,"Now you are able to access the SDK and all its functionality.\nWe will move onto connecting to the ",(0,a.kt)("strong",{parentName:"p"},"KILT blockchain"),"."),(0,a.kt)("h3",{id:"connect-to-the-kilt-blockchain"},"Connect to the KILT Blockchain"),(0,a.kt)("p",null,"Connecting and disconnecting to the KILT blockchain is required for any operation that relies on the KILT blockchain, such as ",(0,a.kt)("strong",{parentName:"p"},"querying and verifying a Credential"),"."),(0,a.kt)("p",null,"Still within the same ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," function, you need to configure the SDK to connect to a ",(0,a.kt)("strong",{parentName:"p"},"KILT node"),".\nFor this, the SDK exposes ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Kilt.init()"))," to configure the address of the node to connect to."),(0,a.kt)("p",null,"We will use the official ",(0,a.kt)("strong",{parentName:"p"},"Spiritnet")," address:"),(0,a.kt)(l.Z,{className:"language-ts",mdxType:"SnippetBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(): Promise<void> {\n  await Kilt.init({ address: 'wss://spiritnet.kilt.io/' })\n}\n"),(0,a.kt)("p",null,"Once the node address has been configured, we can establish a connection with the Spiritnet node.\nAgain, the SDK makes this process very easy to follow, by exposing a ",(0,a.kt)("inlineCode",{parentName:"p"},"Kilt.connect()")," function:"),(0,a.kt)(l.Z,{className:"language-ts",mdxType:"SnippetBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(): Promise<void> {\n  await Kilt.connect()\n}\n"),(0,a.kt)("p",null,"After establishing a connection, you have access to the chain, but let's not forget to ",(0,a.kt)("strong",{parentName:"p"},"close")," any connections when we are done!\nConnections to blockchain nodes should be dropped when not needed anymore, and to do that simply call the ",(0,a.kt)("inlineCode",{parentName:"p"},"Kilt.disconnect()")," function at the bottom of ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," function."),(0,a.kt)(l.Z,{className:"language-ts",mdxType:"SnippetBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(): Promise<void> {\n  await Kilt.disconnect()\n}\n"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulations!\nYou have connected to a Spiritnet node, let's now start querying some data from the chain!")),(0,a.kt)("h2",{id:"query-the-kilt-blockchain"},"Query the KILT Blockchain"),(0,a.kt)("p",null,"We will be querying information related to ",(0,a.kt)("strong",{parentName:"p"},"web3names")," (",(0,a.kt)("inlineCode",{parentName:"p"},"john_doe"),"), and we will be using them to retrieve the ",(0,a.kt)("strong",{parentName:"p"},"KILT DID")," linked to it.\nIn between the ",(0,a.kt)("inlineCode",{parentName:"p"},"Kilt.connect()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Kilt.disconnect()")," lines, add the following code:"),(0,a.kt)(l.Z,{className:"language-ts",funcEnd:"return",mdxType:"SnippetBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(): Promise<string | null> {\n  const johnDoeDid = await Kilt.Did.Web3Names.queryDidForWeb3Name('john_doe')\n  if (!johnDoeDid) {\n    console.log(`john_doe doesn't exist`)\n    return null\n  }\n\n  console.log(`My name is john_doe and this is my DID: \"${johnDoeDid}\"`)\n\n  return johnDoeDid\n}\n"),(0,a.kt)("p",null,"Try executing it and check the result."),(0,a.kt)("p",null,"Did you get the DID? Nice work! You now have ",(0,a.kt)("inlineCode",{parentName:"p"},"john_doe"),"'s DID.\nNow let's see if John Doe has any public KILT Credentials that we could retrieve and verify!"),(0,a.kt)("h2",{id:"retrieve-and-verify-a-credential"},"Retrieve and Verify a Credential"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"KILT DID")," can expose service endpoints, which allow to link external resources to the DID.\nOne type of external resources is represented by, you guessed it, ",(0,a.kt)("strong",{parentName:"p"},"KILT Credentials"),"!\nTherefore, let's see how we can retrieve the ",(0,a.kt)("strong",{parentName:"p"},"service endpoints")," of John Doe's DID and see if it links to any public Credentials for us to ",(0,a.kt)("strong",{parentName:"p"},"query")," and ",(0,a.kt)("strong",{parentName:"p"},"verify"),"."),(0,a.kt)("p",null,"We will keep adding code below what we just added.\nThe code snippet retrieves the service endpoints exposed by the DID we found for ",(0,a.kt)("inlineCode",{parentName:"p"},"john_doe"),":"),(0,a.kt)(l.Z,{className:"language-ts",funcEnd:"return",mdxType:"SnippetBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(\n  johnDoeDid: Kilt.IDidDetails['did']\n): Promise<Kilt.DidServiceEndpoint[]> {\n  const johnDoeDidDocument = await Kilt.Did.DidResolver.resolveDoc(johnDoeDid)\n  console.log(`John Doe's DID Document:`)\n  console.log(JSON.stringify(johnDoeDidDocument, undefined, 2))\n\n  const endpoints = johnDoeDidDocument?.details?.getEndpoints()\n  if (!endpoints) {\n    console.log('No endpoints for the DID.')\n    return []\n  }\n\n  console.log('Endpoints:')\n  console.log(JSON.stringify(endpoints, undefined, 2))\n\n  return endpoints\n}\n"),(0,a.kt)("p",null,"If the snippet printed some endpoints, congratulations!\nLet's see if we can find a Credential among them."),(0,a.kt)("p",null,"We can select one of the endpoints and query the URL to see if it returns a Credential:"),(0,a.kt)(l.Z,{className:"language-ts",funcEnd:"return",mdxType:"SnippetBlock"},"import axios from 'axios'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nexport async function main(\n  endpoints: Kilt.DidServiceEndpoint[]\n): Promise<Kilt.IRequestForAttestation> {\n  const endpointRequestData = await axios\n    .get<Kilt.IRequestForAttestation>(endpoints[0].urls[0])\n    .then((response) => response.data)\n\n  return endpointRequestData\n}\n"),(0,a.kt)("p",null,"If the script completes with no errors, it means that we were able to retrieve a Credential using the URL specified in the service endpoint."),(0,a.kt)("p",null,"We will now have to make sure the Credential is ",(0,a.kt)("strong",{parentName:"p"},"valid")," and has a valid ",(0,a.kt)("strong",{parentName:"p"},"structure"),".\nTo do that, we need to query the Credential's ",(0,a.kt)("inlineCode",{parentName:"p"},"rootHash")," from the blockchain to see if it has been ",(0,a.kt)("strong",{parentName:"p"},"attested")," by someone:"),(0,a.kt)(l.Z,{className:"language-ts",funcEnd:"return",mdxType:"SnippetBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(\n  endpointRequestData: Kilt.IRequestForAttestation\n): Promise<Kilt.Credential | null> {\n  const attestation = await Kilt.Attestation.query(endpointRequestData.rootHash)\n  if (!attestation) {\n    console.log(`The credential doesn't have an attestation`)\n    return null\n  }\n\n  const credential = Kilt.Credential.fromRequestAndAttestation(\n    endpointRequestData,\n    attestation\n  )\n  console.log('John Doe credential:')\n  console.log(JSON.stringify(credential, undefined, 2))\n\n  return credential\n}\n"),(0,a.kt)("p",null,"Execute the script and see if you get a valid attestation for John Doe's Credential!"),(0,a.kt)("p",null,"If so, it is then time to verify the Credential.\nThis will be indicated by the result of the ",(0,a.kt)("strong",{parentName:"p"},"verification")," process as shown in the snippet below:"),(0,a.kt)(l.Z,{className:"language-ts",mdxType:"SnippetBlock"},"import * as Kilt from '@kiltprotocol/sdk-js'\n\nexport async function main(credential: Kilt.Credential): Promise<boolean> {\n  const isCredentialValid = await credential.verify()\n  console.log(`Is John Doe's credential valid? ${isCredentialValid}`)\n  return isCredentialValid\n}\n"),(0,a.kt)("p",null,"Now, the last step is to excute the complete script and wait to see whether we can successfully retrieve ",(0,a.kt)("strong",{parentName:"p"},"and")," verify one of John Doe's Credentials!"),(0,a.kt)("p",null,"Was it successful? Nice Job!"),(0,a.kt)("p",null,"If you want to explore more about KILT's features, please check out our ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/what-is-kilt"},"Concepts section"),".\nIf you want to dive deeper into the SDK, please advance to the next section: ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/sdk/cookbook/dids/light-did-creation"},"the KILT Cookbook"),"."))}f.isMDXComponent=!0}}]);