"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3437],{50490:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return c}});var i=t(83117),o=(t(67294),t(3905)),a=t(90814);const r={id:"credential-query",title:"Query Public Credentials for a web3name"},s=void 0,d={unversionedId:"develop/sdk/cookbook/web3names/credential-query",id:"develop/sdk/cookbook/web3names/credential-query",title:"Query Public Credentials for a web3name",description:"web3names are linked to KILT DIDs, and KILT DIDs can define service endpoints to expose additional service/information.",source:"@site/docs/develop/01_sdk/02_cookbook/02_web3names/02_credential_query.md",sourceDirName:"develop/01_sdk/02_cookbook/02_web3names",slug:"/develop/sdk/cookbook/web3names/credential-query",permalink:"/docs/develop/sdk/cookbook/web3names/credential-query",draft:!1,editUrl:"https://github.com/KILTprotocol/docs/edit/master/docs/develop/01_sdk/02_cookbook/02_web3names/02_credential_query.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"credential-query",title:"Query Public Credentials for a web3name"},sidebar:"sdk",previous:{title:"Claim a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-claim"},next:{title:"Release a web3name",permalink:"/docs/develop/sdk/cookbook/web3names/web3name-release"}},l={},c=[],u={toc:c};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"web3names are linked to KILT DIDs, and KILT DIDs can define service endpoints to expose additional service/information.\nOne of the possible endpoint types is the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/specifications/blob/dee9ac26e381f6e0cbcd184b0892327db0f8b312/docs/did/kilt-published-credential-collection-v1.md"},(0,o.kt)("inlineCode",{parentName:"a"},"KiltPublishedCredentialCollectionV1"))," type.\nThe type defines the structure to make KILT Credentials public and accessible to anyone."),(0,o.kt)("p",null,"Because of the relationship between web3names and DIDs, it is possible, given a certain web3name, to retrieve all public credentials that the DID subject identified by that web3name has made available.\nBelow is a code snippet showing how to do that using the KILT SDK, and how to perform the needed security checks/validation as recommended by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KILTprotocol/specifications/blob/dee9ac26e381f6e0cbcd184b0892327db0f8b312/docs/did/kilt-published-credential-collection-v1.md"},"specification"),"."),(0,o.kt)(a.Z,{className:"language-ts",mdxType:"CodeBlock"},"import fetch from 'node-fetch'\n\nimport * as Kilt from '@kiltprotocol/sdk-js'\n\n// The type to filter the endpoints of the retrieved DID.\nconst PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE =\n  'KiltPublishedCredentialCollectionV1'\n\ntype CredentialMetadata = {\n  label?: string\n  blockNumber?: number\n  txHash?: string\n}\n\ntype CredentialEntry = {\n  credential: Kilt.IRequestForAttestation\n  metadata?: CredentialMetadata\n}\n\nconst verifyCredential = async (\n  publishedCredential: Kilt.RequestForAttestation\n): Promise<boolean> => {\n  // Retrieve the on-chain attestation information about the credential.\n  const onChainAttestation = await Kilt.Attestation.query(\n    publishedCredential.rootHash\n  )\n  if (!onChainAttestation || onChainAttestation.revoked) {\n    return false\n  }\n  // Verify the credential integrity and the subject's signature.\n  return (\n    publishedCredential.verifyData() && publishedCredential.verifySignature()\n  )\n}\n\nexport async function queryPublishedCredentials(\n  web3Name: Kilt.Did.Web3Names.Web3Name\n): Promise<CredentialEntry[]> {\n  const didForWeb3Name = await Kilt.Did.Web3Names.queryDidForWeb3Name(web3Name)\n  if (!didForWeb3Name) {\n    throw `No DID found for \"${didForWeb3Name}\"`\n  }\n\n  console.log(`DID for \"${web3Name}\": ${didForWeb3Name}`)\n\n  const resolutionResult = await Kilt.Did.resolveDoc(didForWeb3Name)\n  if (!resolutionResult) {\n    throw 'The DID does not exist on the KILT blockchain.'\n  }\n\n  const didDetails = resolutionResult.details\n  // If no details are returned but resolutionResult is not null, the DID has been deleted.\n  // This information is present in `resolutionResult.metadata.deactivated`.\n  if (!didDetails) {\n    throw 'The DID has already been deleted.'\n  }\n\n  // Filter the endpoints by their type.\n  const didEndpoints = didDetails.getEndpoints(\n    PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE\n  )\n\n  console.log(\n    `Endpoints of type \"${PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE}\" for the retrieved DID:`\n  )\n  console.log(JSON.stringify(didEndpoints, null, 2))\n\n  // For demonstration, only the first endpoint and its first URL are considered.\n  const firstCredentialCollectionEndpointUrl = didEndpoints[0]?.urls[0]\n  if (!firstCredentialCollectionEndpointUrl) {\n    console.log(\n      `The DID has no service endpoints of type \"${PUBLISHED_CREDENTIAL_COLLECTION_V1_TYPE}\".`\n    )\n  }\n\n  // Retrieve the credentials pointed at by the endpoint.\n  // Being an IPFS endpoint, the fetching can take an arbitrarily long time or even fail if the timeout is reached.\n  // The case where the result is not a JSON should be properly handled in production settings.\n  const credentialCollection: CredentialEntry[] = await fetch(\n    firstCredentialCollectionEndpointUrl\n  ).then((response) => response.json() as Promise<CredentialEntry[]>)\n  console.log(`Credential collection behind the endpoint:`)\n  console.log(JSON.stringify(credentialCollection, null, 2))\n\n  // Verify that all credentials are valid and that they all refer to the same DID.\n  await Promise.all(\n    credentialCollection.map(async ({ credential }) => {\n      const credentialInstance =\n        Kilt.RequestForAttestation.fromRequest(credential)\n      // Verify the credential integrity and signature, according to the KILT specification.\n      const credentialStatus = await verifyCredential(credentialInstance)\n      if (!credentialStatus) {\n        throw 'Integrity and signature checks have failed for one of the credentials.'\n      }\n\n      // Verify that the credential refers to the intended subject\n      if (\n        !Kilt.Did.Utils.isSameSubject(credential.claim.owner, didForWeb3Name)\n      ) {\n        throw 'One of the credentials refers to a different subject than expected.'\n      }\n    })\n  )\n\n  // If no promise is rejected, all the checks have successfully completed.\n  console.log('All retrieved credentials are valid! \u2705!')\n\n  return credentialCollection\n}\n"))}h.isMDXComponent=!0}}]);