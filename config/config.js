const {networks} = require( './networks' )

function getNetworkConfig(netid) {
  id = netid || window.ethereum.networkVersion
  if (  id<1000 ) {
    net = networks[id]
  } else {
    net = {
      paymasterAddress: require('../build/gsn/Paymaster.json').address,
      forwarderAddress: require('../build/gsn/Forwarder.json').address
    }
  }
  if ( !net ) {
    throw new Error('no config for network '+id)
  }
  console.log( 'network id=',netid, 'net=',net)
  return net
}

module.exports = { getNetworkConfig }
