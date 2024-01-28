import { connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit'
import type { CreateConfigParameters } from 'wagmi'
import { createConfig, http } from 'wagmi'
import { goerli, mainnet } from 'wagmi/chains'

const configs: Record<string, CreateConfigParameters> = {
  5: {
    chains: [goerli],
    transports: { [goerli.id]: http() },
  },
  1: {
    chains: [mainnet],
    transports: { [mainnet.id]: http() },
  },
}

const wallets = getDefaultWallets().wallets

export const config = createConfig({
  connectors: connectorsForWallets(wallets, { appName: 'Starter', projectId: ' ' }),
  ...configs[process.env.NEXT_PUBLIC_CHAIN_ID!],
})
