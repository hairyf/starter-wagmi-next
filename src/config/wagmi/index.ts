import { connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit'
import { createConfig, http } from 'wagmi'
import { goerli, mainnet, sepolia } from 'wagmi/chains'

const { wallets } = getDefaultWallets()

const connectors = connectorsForWallets(
  wallets,
  { appName: 'Starter', projectId: ' ' },
)

export const config = createConfig({
  connectors,
  chains: [goerli, mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [goerli.id]: http(),
  },
})
