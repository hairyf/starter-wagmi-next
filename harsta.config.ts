import { defineConfig } from 'harsta'

const config = defineConfig({
  solidity: '0.8.24',
  defaultNetwork: 'goerli',
  namedAccounts: {
    deployer: { default: 0 },
    owner: { default: 0 },
    verifier: { default: 1 },
  },
  networks: {
    goerli: {
      name: 'Goerli',
      rpc: 'https://rpc.ankr.com/eth_goerli',
      testnet: true,
      id: 5,
      currency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
      explorer: {
        name: 'Etherscan',
        url: 'https://goerli.etherscan.io',
      },
    },
    ethereum: {
      name: 'Ethereum',
      rpc: 'https://eth.merkle.io',
      id: 1,
      currency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
      explorer: {
        name: 'Etherscan',
        url: 'https://etherscan.io',
      },
    },
  },
})

export default config
