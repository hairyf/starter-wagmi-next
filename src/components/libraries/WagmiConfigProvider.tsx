import type { PropsWithChildren } from 'react'
import type { WagmiProviderProps } from 'wagmi'
import { SubscribeWagmiConfig } from '@harsta/client/wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

export function WagmiConfigProvider(props: PropsWithChildren<WagmiProviderProps>) {
  const client = new QueryClient()

  return (
    <WagmiProvider {...props}>
      <QueryClientProvider client={client}>
        <SubscribeWagmiConfig />
        {props.children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
