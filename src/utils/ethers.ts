import { ContractInterface, Contract as _Contract } from 'ethers'
import { clientToProvider, clientToSigner, getPublicClient, getWalletClient } from '.'
import { addresses } from '@/config'

export function getProvider() {
  const publicClient = getPublicClient()!
  return clientToProvider(publicClient)
}

export interface GetContractOptions<T> {
  interface: T
  address?: string
}

export function getContract<T>(options: GetContractOptions<T>) {
  const walletClient = getWalletClient()
  const publicClient = getPublicClient()
  const provider = publicClient ? clientToProvider(publicClient) : undefined
  const singer = walletClient ? clientToSigner(walletClient) : undefined
  const contract = new _Contract(
    options.address || addresses.ZERO,
    options.interface as ContractInterface,
    singer || provider,
  )
  return contract as _Contract & T
}
