import type { Config } from 'wagmi'
import { useClient, useConnectorClient } from 'wagmi'
import type { Account, Chain, Client, Transport } from 'viem'
import { providers } from 'ethers'
import { useWhenever } from '@/hooks'

const clients = {
  walletClient: undefined as Client<Transport, Chain, Account> | undefined,
  publicClient: undefined as Client<Transport, Chain> | undefined,
}

export function getWalletClient() {
  return clients.walletClient
}
export function getPublicClient() {
  return clients.publicClient
}

export function subscribeWallets() {
  const publicClient = useClient()
  const { data: walletClient } = useConnectorClient<Config>()

  useWhenever(walletClient, wallet => clients.walletClient = wallet!)
  useWhenever(publicClient, wallet => clients.publicClient = wallet!)
}

export function clientToProvider(client: Client<Transport, Chain>) {
  const { chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  if (transport.type === 'fallback') {
    return new providers.FallbackProvider(
      (transport.transports as ReturnType<Transport>[]).map(
        ({ value }) => new providers.JsonRpcProvider(value?.url, network),
      ),
    )
  }
  return new providers.JsonRpcProvider(transport.url, network)
}

export function clientToSigner(client: Client<Transport, Chain, Account>) {
  const { account, chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new providers.Web3Provider(transport, network)
  return provider.getSigner(account.address)
}
