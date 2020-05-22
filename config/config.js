const {networks} = require( './networks' )

function getNetworkConfig(netid) {
  id = netid || window.ethereum.networkVersion
  if (  id<1000 ) {
    net = networks[id]
  } else {
    path='../build/gsn/'
    net = {
      relayHubAddress: require(path+'RelayHub').address,
      stakeManagerAddress: require(path+'StakeManager').address,
      paymasterAddress: require(path+'aymaster.json').address
    }
  }
  if ( !net ) {
    throw new Error('no config for network '+id)
  }
  console.log( 'network id=',netid, 'net=',net)
  return net
}

module.exports = { getNetworkConfig }
