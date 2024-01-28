export const all = {
  5: {
    ZERO: '0x0000000000000000000000000000000000000000',
  },
  1: {
    ZERO: '0x0000000000000000000000000000000000000000',
  },
}

export const addresses = all[process.env.NEXT_PUBLIC_CHAIN_ID! as unknown as keyof typeof all]
