/* eslint-disable ts/ban-ts-comment */
import { chains } from '@harsta/client'
import { connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit'

import { coinbaseWallet, metaMaskWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets'
import { createConfig } from 'wagmi'

export const wallets = getDefaultWallets().wallets
export const connectors = connectorsForWallets(
  [{
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet,
      coinbaseWallet,
      walletConnectWallet,
    ],
  }],
  {
    appName: 'Starter',
    projectId: '019ca23f39a338bb3d0600cf1cae08fa',
  },
)

export const config = createConfig({
  // @ts-expect-error
  chains: Object.values(chains),
  connectors,
  ssr: true,
})
