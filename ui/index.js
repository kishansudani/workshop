const ethers = require('ethers')


const { RelayProvider } = require('@opengsn/gsn')
const paymasterArtifact = require('../build/contracts/WhitelistPaymaster.json')
const whitelistPaymasterAddress = paymasterArtifact.networks[window.ethereum.networkVersion].address

// In truffle console run:
// const pm = await WhitelistPaymaster.deployed()
// pm.whitelistSender('0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1')

const contractArtifact = require('../build/contracts/CaptureTheFlag.json')
const contractAddress = contractArtifact.networks[window.ethereum.networkVersion].address
const contractAbi = contractArtifact.abi

let provider
let network

async function identifyNetwork () {
  provider = new ethers.providers.Web3Provider(window.ethereum)
  const gsnConfig = { paymasterAddress: whitelistPaymasterAddress }
  const gsnProvider = new RelayProvider(window.ethereum, gsnConfig)
  gsnProvider.init()
  provider = new ethers.providers.Web3Provider(gsnProvider)
  network = await provider.ready
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
    logview.innerHTML = message+"<br>\n"+logview.innerHTML
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
