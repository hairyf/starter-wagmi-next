/* eslint-disable ts/ban-ts-comment */
import { chains } from '@harsta/client'
import { connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit'

import { createConfig } from 'wagmi'

export const wallets = getDefaultWallets().wallets
export const connectors = connectorsForWallets(wallets, { appName: 'Starter', projectId: ' ' })

export const config = createConfig({
  // @ts-expect-error
  chains: Object.values(chains),
  connectors,
  ssr: true,
})
