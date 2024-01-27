import * as abis from './abis'
import { addresses } from './address'

export const contracts = {
  ERC20: { abi: abis.ERC20Fragment, address: addresses.ERC20 },
}

export * from './abis'
