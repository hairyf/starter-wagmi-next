import type {ERC20} from './types/ERC20'
import _ERC20Fragment from './jsonc/ERC20.json'

export * as ERC20Types from './types/ERC20'

export const ERC20Fragment: ERC20 = _ERC20Fragment as any
