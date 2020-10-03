module.exports = {
  networks: {
    42: {
      addressUrl: 'https://dashboard.tenderly.co/contract/kovan/',
      txUrl: 'https://dashboard.tenderly.co/tx/kovan/',
      // addressUrl: 'https://kovan.etherscan.io/address/',
      // txUrl: 'https://kovan.etherscan.io/tx/',
      paymasterAddress: '0x083082b7Eada37dbD8f263050570B31448E61c94',
      forwarderAddress: '0x0842Ad6B8cb64364761C7c170D0002CC56b1c498',
      captureTheFlag: '0x22d1300304Ea3B658f0a6e925dd62bcfcDd91ce4'
    },

    4: {
      addressUrl: 'https://dashboard.tenderly.co/contract/rinkeby/',
      txUrl: 'https://dashboard.tenderly.co/tx/rinkeby/',
      // addressUrl: 'https://rinkeby.etherscan.io/address/',
      // txUrl: 'https://rinkeby.etherscan.io/tx/',
      paymasterAddress: '0x43d66E6Dce20264F6511A0e8EEa3f570980341a2',
      forwarderAddress: '0x956868751Cc565507B3B58E53a6f9f41B56bed74',
      captureTheFlag: '0x7A2014c282ffb3Dc968dE52Db21f80A9e0A5e981' 
   },

    3: {
      addressUrl: 'https://dashboard.tenderly.co/contract/ropsten/',
      txUrl: 'https://dashboard.tenderly.co/tx/ropsten/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      paymasterAddress: '0x8057c0fb7089BB646f824fF4A4f5a18A8d978ecC',
      forwarderAddress: '0x25CEd1955423BA34332Ec1B60154967750a0297D',
      captureTheFlag: '0x5B3403F215799E3Af100BDCB37f3Fd925aD80f76'
    }
  }
}
