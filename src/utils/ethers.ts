import { Contract as _Contract } from 'ethers'
import { clientToProvider, clientToSigner, getPublicClient, getWalletClient } from '.'

export function getProvider() {
  const publicClient = getPublicClient()!
  return clientToProvider(publicClient)
}

export interface GetContractOptions<T> {
  address?: string
  abi: T
}

export function getContract<T>(options: GetContractOptions<T>) {
  const walletClient = getWalletClient()
  const publicClient = getPublicClient()
  const provider = publicClient ? clientToProvider(publicClient) : undefined
  const singer = walletClient ? clientToSigner(walletClient) : undefined
  const contract = new _Contract(
    options.address || '0x0000000000000000000000000000000000000000',
    options.abi as any,
    singer || provider,
  )
  return contract as _Contract & T
}
