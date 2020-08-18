module.exports = {
  networks: {
    42: {
      addressUrl: 'https://dashboard.tenderly.dev/contract/kovan/',
      txUrl: 'https://dashboard.tenderly.dev/tx/kovan/',
      // addressUrl: 'https://kovan.etherscan.io/address/',
      // txUrl: 'https://kovan.etherscan.io/tx/',
      paymasterAddress: '0x9940c8e12Ca14Fe4f82646D6d00030f4fC3C7ad1',
      forwarderAddress: '0x663946D7Ea17FEd07BF1420559F9FB73d85B5B03',
      captureTheFlag: '0x737E39167485C41eEfCa9b31AA8dA6d426cA5974'
    },
    3: {
      addressUrl: 'https://dashboard.tenderly.dev/contract/ropsten/',
      txUrl: 'https://dashboard.tenderly.dev/tx/ropsten/',
      // addressUrl: 'https://ropsten.etherscan.io/address/',
      // txUrl: 'https://ropsten.etherscan.io/tx/',
      paymasterAddress: '0x4aa21CdEba9dfEC2C2621b83a15262a41C67aC67',
      forwarderAddress: '0x766400B526fB5889AE6C52b369671F5eE137880b',
      captureTheFlag: '0xEDdafFdb235dDB9A6189FbFEb9A572B65d6BB187'
    }
  }
}
