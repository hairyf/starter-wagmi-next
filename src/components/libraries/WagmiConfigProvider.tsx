import type { WagmiProviderProps } from 'wagmi'
import { WagmiProvider } from 'wagmi'
import type { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { subscribeClientsForEthersAdapters } from 'wagmi-ethers-adapters'

function Subscribe() {
  subscribeClientsForEthersAdapters()
  return null
}

export function WagmiConfigProvider(props: PropsWithChildren<WagmiProviderProps>) {
  const client = new QueryClient()

  return (
    <WagmiProvider {...props}>
      <QueryClientProvider client={client}>
        <Subscribe />
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
