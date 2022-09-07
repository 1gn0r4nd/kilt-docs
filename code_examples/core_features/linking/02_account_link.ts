import * as Kilt from '@kiltprotocol/sdk-js'

export async function linkDidToAccount(
  did: Kilt.DidDetails,
  submitterAccount: Kilt.KiltKeyringPair,
  signCallback: Kilt.SignCallback,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  // Authorizing the extrinsic with the full DID and submitting it with the provided account
  // results in the submitter's account being linked to the DID authorizing the operation.
  const accountLinkingTx =
    await Kilt.Did.AccountLinks.getAssociateSenderExtrinsic().then((tx) =>
      Kilt.Did.authorizeExtrinsic(
        did,
        tx,
        signCallback,
        submitterAccount.address
      )
    )

  await Kilt.Blockchain.signAndSubmitTx(accountLinkingTx, submitterAccount, {
    resolveOn
  })
}
