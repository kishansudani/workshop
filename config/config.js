const {networks} = require( './networks' )

function getNetworkConfig(netid) {
  id = netid || window.ethereum.networkVersion
  if (  id<1000 ) {
    net = networks[id]
  } else {
    let path = '../build/gsn/'
    net = {
      paymasterAddress: require(path+'Paymaster.json').address,
      forwarderAddress: require(path+'Forwarder.json').address
    }
  }
  if ( !net ) {
    throw new Error('no config for network '+id)
  }
  console.log( 'network id=',netid, 'net=',net)
  return net
}

module.exports = { getNetworkConfig }
