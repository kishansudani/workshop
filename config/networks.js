module.exports = {
  networks: {
    42: {
      addressUrl: 'https://dashboard.tenderly.co/contract/kovan/',
      txUrl: 'https://dashboard.tenderly.co/tx/kovan/',
      // addressUrl: 'https://kovan.etherscan.io/address/',
      // txUrl: 'https://kovan.etherscan.io/tx/',
      paymasterAddress: '0x82b22404fC614f1036FaA9787610aeDd38d365ae',
      forwarderAddress: '0x79Dd243E7966FBB5F539b9f7798AC6CB7c13585B',
      captureTheFlag: '0x89B297C1C93F82B2797b0342d628d6220Ee15cE6'
    },

    4: {
      addressUrl: 'https://dashboard.tenderly.co/contract/rinkeby/',
      txUrl: 'https://dashboard.tenderly.co/tx/rinkeby/',
      // addressUrl: 'https://rinkeby.etherscan.io/address/',
      // txUrl: 'https://rinkeby.etherscan.io/tx/',
      paymasterAddress: '0x186716C974e864868a2fc052632D528845D18F29',
      forwarderAddress: '0xf86a8396e0e94ad5d6e499f71bb0a64a596958f9',
      captureTheFlag: '0x7A2014c282ffb3Dc968dE52Db21f80A9e0A5e981' 
   },

    3: {
      addressUrl: 'https://dashboard.tenderly.co/contract/ropsten/',
      txUrl: 'https://dashboard.tenderly.co/tx/ropsten/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      paymasterAddress: '0x55FfF885da4A9950a7A4Fad9ae78fE3801Bf5A5d',
      forwarderAddress: '0xB34D046DebF9a427D2818a22b5A9285b798F70f8',
      captureTheFlag: '0x5B3403F215799E3Af100BDCB37f3Fd925aD80f76'
    }
  }
}
