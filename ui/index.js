const  {resolveConfigurationGSN} = require( "@opengsn/gsn" )
const ethers = require('ethers')
const { RelayProvider } = require("@opengsn/gsn")

const { getNetworkConfig } = require( '../config/config')

const contractArtifact = require('../build/contracts/CaptureTheFlag.json')
const contractAbi = contractArtifact.abi

let contractAddress
let provider
let network
let networkConfig

async function identifyNetwork () {
  const tmpProvider = new ethers.providers.Web3Provider(window.ethereum);
  network = await tmpProvider.ready

  try {
    networkConfig = getNetworkConfig()
    contractAddress = networkConfig.captureTheFlag || contractArtifact.networks[window.ethereum.networkVersion].address

  } catch (e) {
    console.log('network error:',e)
    log( "<font color='red'>Please switch to Kovan network</font>")
    return
  }

  const gsnConfig = await resolveConfigurationGSN(window.ethereum,  {
    ...networkConfig,
    methodSuffix: '_v4',
    jsonStringifyRequest: true,
    verbose: true,
    // TODO: this is actually a reported bug in MetaMask. Should be:
    // chainId: network.chainId
    // but chainID == networkId on top ethereum networks. See https://chainid.network/
    chainId: window.ethereum.networkVersion,
    relayLookupWindowBlocks: 1e6
  })
  console.log('resolved config=' , gsnConfig)
  const gsnProvider = new RelayProvider(window.ethereum, gsnConfig);
  provider = new ethers.providers.Web3Provider(gsnProvider)
  return network
}

async function contractCall () {
  await window.ethereum.enable()

  const contract = new ethers.Contract(
    contractAddress, contractAbi, provider.getSigner())
  const transaction = await contract.captureTheFlag()
  const hash = transaction.hash
  console.log(`Transaction ${hash} sent`)
  const receipt = await provider.waitForTransaction(hash)
  console.log(`Mined in block: ${receipt.blockNumber}`)
}

let logview
function log(message) {
    message = message.replace( /(0x\w\w\w\w)\w*(\w\w\w\w)\b/g, '<b>$1...$2</b>')
    if ( !logview) {
        logview = document.getElementById('logview')
    }
    sep = "<br>\n"
	// leave just the last 5 lines (last entry first..)
    logview.innerHTML = [ message, ...logview.innerHTML.split(sep) ].slice(0,5).join(sep)
}
async function listenToEvents () {
  const contract = new ethers.Contract(
    contractAddress, contractAbi, provider)

  contract.on('FlagCaptured', (previousHolder, currentHolder, rawEvent) => {
    log(`Flag Captured from&nbsp;${previousHolder} by&nbsp;${currentHolder}`)
    console.log(`Flag Captured from ${previousHolder} by ${currentHolder}`)
  })
}

window.app = {
  contractCall,
  listenToEvents,
  log,
  identifyNetwork
}

console.log( 'window.app=', window.app)
