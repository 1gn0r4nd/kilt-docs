import { ApiPromise, Keyring } from '@polkadot/api'

import * as Kilt from '@kiltprotocol/sdk-js'

import { batchCTypeCreationExtrinsics } from './07_full_did_batch'
import { createCompleteFullDid } from './05_full_did_complete'
import { createCompleteLightDid } from './02_light_did_complete'
import { createSimpleFullDid } from './04_full_did_simple'
import { createSimpleLightDid } from './01_light_did_simple'
import { deleteFullDid } from './09_full_did_delete'
import { generateAndVerifyDidAuthenticationSignature } from './08_did_signature'
import { migrateLightDid } from './03_light_did_migrate'
import { reclaimFullDidDeposit } from './10_full_did_deposit_reclaim'
import { updateFullDid } from './06_full_did_update'

import { signCallbackForKeyring } from '../utils'

export async function runAll(
  api: ApiPromise,
  submitterAccount: Kilt.KiltKeyringPair,
  resolveOn: Kilt.SubscriptionPromise.ResultEvaluator = Kilt.Blockchain
    .IS_FINALIZED
): Promise<void> {
  console.log('Running DID flow...')
  const keyring = new Keyring({ ss58Format: Kilt.Utils.ss58Format })

  console.log('1 did) Create simple light DID')
  const simpleLightDid = await createSimpleLightDid(keyring)
  console.log('2 did) Create complete light DID')
  await createCompleteLightDid(keyring)
  console.log('3 did) Migrate first light DID to full DID')
  await migrateLightDid(
    simpleLightDid,
    submitterAccount,
    signCallbackForKeyring(keyring),
    resolveOn
  )
  console.log('4 did) Create simple full DID')
  const createdSimpleFullDid = await createSimpleFullDid(
    keyring,
    submitterAccount,
    undefined,
    signCallbackForKeyring(keyring),
    resolveOn
  )
  console.log('5 did) Create complete full DID')
  const createdCompleteFullDid = await createCompleteFullDid(
    keyring,
    submitterAccount,
    undefined,
    signCallbackForKeyring(keyring),
    resolveOn
  )
  console.log('6 did) Update full DID created at step 5')
  const updatedFullDid = await updateFullDid(
    api,
    keyring,
    createdCompleteFullDid,
    submitterAccount,
    signCallbackForKeyring(keyring),
    resolveOn
  )
  console.log(
    '7 did) Use the same full DID created at step 5 to sign the batch'
  )
  await batchCTypeCreationExtrinsics(
    api,
    submitterAccount,
    updatedFullDid,
    signCallbackForKeyring(keyring),
    resolveOn
  )
  console.log(
    '8 did) Use the same full DID created at step 5 to generate the signature'
  )
  await generateAndVerifyDidAuthenticationSignature(
    updatedFullDid,
    'test-payload',
    signCallbackForKeyring(keyring)
  )
  console.log('9 did) Delete full DID created at step 4')
  await deleteFullDid(
    submitterAccount,
    createdSimpleFullDid,
    signCallbackForKeyring(keyring),
    resolveOn
  )
  console.log('10 did) Delete full DID created at step 5')
  await reclaimFullDidDeposit(
    submitterAccount,
    createdCompleteFullDid.uri,
    resolveOn
  )
  console.log('DID flow completed!')
}
