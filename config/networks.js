module.exports = {
  networks: {
    42: {
      addressUrl: 'https://dashboard.tenderly.dev/contract/kovan/',
      txUrl: 'https://dashboard.tenderly.dev/tx/kovan/',
      // addressUrl: 'https://kovan.etherscan.io/address/',
      // txUrl: 'https://kovan.etherscan.io/tx/',
      relayHubAddress: '0x2E0d94754b348D208D64d52d78BcD443aFA9fa52',
      stakeManagerAddress: '0x0ecf783407C5C80D71CFEa37938C0b60BD255FF8',
      paymasterAddress: '0x957F270d45e9Ceca5c5af2b49f1b5dC1Abb0421c',
      forwarderAddress: '0x6453D37248Ab2C16eBd1A8f782a2CBC65860E60B',
      captureTheFlag: '0x4b0567c35DA297B0b9f4dA0E5C85E21313f245B1'
    },
    3: {
      addressUrl: 'https://dashboard.tenderly.dev/contract/ropsten/',
      txUrl: 'https://dashboard.tenderly.dev/tx/ropsten/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      relayHubAddress: '0xEF46DD512bCD36619a6531Ca84B188b47D85124b',
      stakeManagerAddress: '0x41c7C7c1Bf501e2F43b51c200FEeEC87540AC925',
      paymasterAddress: '0x9940c8e12Ca14Fe4f82646D6d00030f4fC3C7ad1',
      forwarderAddress: '0xcC87aa60a6457D9606995C4E7E9c38A2b627Da88'
    }
  }
}
