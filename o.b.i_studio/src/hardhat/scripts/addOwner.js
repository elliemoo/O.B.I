const fs = require('fs')
const { ethers } = require('hardhat')
const address = require('./address')
const params = require('./params')
const { getWallets } = require('./utils/getWallets')
const { getContracts } = require('./utils/getContracts')

async function caller () {
  const [
    handler,
    nt,
    OBINode,
    OBILuckyBox,
    swapper,
    marketPlace
  ] = await getContracts()

  await main(handler, nt, OBILuckyBox, swapper, marketPlace)
}

async function main (handler, nt, OBINode, OBILuckyBox) {
  const [owner, metamask, payees, distri] = await getWallets()

  let res, estimatedGas, args

  console.log('-----ADD OWNER-----')

  console.log('\tHandler Owners')
  estimatedGas = await handler.connect(owner).estimateGas.addOwner(...params.AddOwner)
  res = await handler.connect(owner).addOwner(...params.AddOwner,
    { gasLimit: estimatedGas.toNumber() + 50000 }
  )
  await res.wait()
  console.log('\t\thandler.addOwner(' + params.AddOwner + ')')
  res = await handler.isOwner(params.AddOwner[0])
  console.log('\t\thandler.isOwner(' + params.AddOwner + ') =', res)

  console.log('\tOBINode Owners')
  estimatedGas = await OBINode.connect(owner).estimateGas.addOwner(...params.AddOwner)
  res = await OBINode.connect(owner).addOwner(...params.AddOwner,
    { gasLimit: estimatedGas.toNumber() + 50000 }
  )
  await res.wait()
  console.log('\t\tOBINode.addOwner(' + params.AddOwner + ')')
  res = await OBINode.isOwner(params.AddOwner[0])
  console.log('\t\tOBINode.isOwner(' + params.AddOwner + ') =', res)

  console.log('\tOBILuckyBox Owners')
  estimatedGas = await OBILuckyBox.connect(owner).estimateGas.addOwner(...params.AddOwner)
  res = await OBILuckyBox.connect(owner).addOwner(...params.AddOwner,
    { gasLimit: estimatedGas.toNumber() + 50000 }
  )
  await res.wait()
  console.log('\t\tOBILuckyBox.addOwner(' + params.AddOwner + ')')
  res = await OBILuckyBox.isOwner(params.AddOwner[0])
  console.log('\t\tOBILuckyBox.isOwner(' + params.AddOwner + ') =', res)


  for (const n of nt) {
    const name = await n.name()
    console.log('\t' + name + ' Owners')
    estimatedGas = await n.connect(owner).estimateGas.addOwner(...params.AddOwner)
    res = await n.connect(owner).addOwner(...params.AddOwner,
      { gasLimit: estimatedGas.toNumber() + 50000 }
    )
    await res.wait()
    console.log('\t\t' + name + '.addOwner(' + params.AddOwner + ')')
    res = await n.isOwner(params.AddOwner[0])
    console.log('\t\t' + name + '.isOwner(' + params.AddOwner + ') =', res)
  }

}

if (require.main === module) {
  caller()
    .then(_ => process.exit())
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
}

module.exports = main