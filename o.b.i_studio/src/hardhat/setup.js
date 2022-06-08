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
    OBILuckyBox
  ] = await getContracts()

  await main(handler, nt, OBINode, OBILuckyBox)
}

async function main (handler, nt, OBINode, OBILuckyBox) {
  const [owner, metamask, payees, distri] = await getWallets()

  let res, estimatedGas, args

  console.log('-----SETUP-----')

  console.log('\tHandler Node Types')
  res = await handler.getNodeTypesSize()
  console.log('\t\thandler.getNodeTypesSize() =', res.toNumber())
  args = [nt[0].address, nt[1].address, nt[2].address, nt[3].address, nt[4].address]
  estimatedGas = await handler.connect(owner).estimateGas.addMultipleNodeTypes(args)
  res = await handler.connect(owner).addMultipleNodeTypes(args, {
    gasLimit: estimatedGas.toNumber() + 50000
  })
  console.log('\t\thandler.addMultipleNodeTypes()')
  await res.wait()
  res = await handler.getNodeTypesSize()
  console.log('\t\thandler.getNodeTypesSize() =', res.toNumber())
  res = await handler.getNodeTypesBetweenIndexes(0, 5)
  console.log('\t\thandler.getNodeTypesBetweenIndexes(0,5) =', res)

  console.log('\tHandler Nft')
  res = await handler.nft()
  console.log('\t\thandler.nft() =', res)
  estimatedGas = await handler.connect(owner).estimateGas.setNft(OBINode.address)
  res = await handler.connect(owner).setNft(OBINode.address, {
    gasLimit: estimatedGas.toNumber() + 50000
  })
  console.log('\t\thandler.setNft(' + OBINode.address + ')')
  await res.wait()
  res = await handler.nft()
  console.log('\t\thandler.nft() =', res)

  console.log('\tHandler Lucky')
  estimatedGas = await handler.connect(owner).estimateGas.setLucky(OBILuckyBox.address)
  res = await handler.connect(owner).setLucky(OBILuckyBox.address, {
    gasLimit: estimatedGas.toNumber() + 50000
  })
  console.log('\t\thandler.setLucky(' + OBILuckyBox.address + ')')
  await res.wait()

  
  console.log('\tOBILuckyBox Lucky Boxes')
  res = await OBILuckyBox.getBoxSize()
  console.log('\t\tOBILuckyBox.getBoxSize() =', res.toNumber())
  args = [
    params.LuckyBox0.name,
    params.LuckyBox0.priceTokens,
    params.LuckyBox0.probability,
    params.LuckyBox0.nodeType,
    params.LuckyBox0.feature,
    params.LuckyBox0.remaining,
    params.LuckyBox0.maxBox,
    params.LuckyBox0.maxUser,
    params.LuckyBox0.attribute
  ]
  estimatedGas = await OBILuckyBox.connect(owner).estimateGas.updateOBILuckyBox(...args)
  res = await OBILuckyBox.connect(owner).updateOBILuckyBox(...args, {
    gasLimit: estimatedGas.toNumber() + 50000
  })
  console.log('\t\tOBILuckyBox.updateOBILuckyBox()')
  await res.wait()
  args = [
    params.LuckyBox1.name,
    params.LuckyBox1.priceTokens,
    params.LuckyBox1.probability,
    params.LuckyBox1.nodeType,
    params.LuckyBox1.feature,
    params.LuckyBox1.remaining,
    params.LuckyBox1.maxBox,
    params.LuckyBox1.maxUser,
    params.LuckyBox1.attribute
  ]
  estimatedGas = await OBILuckyBox.connect(owner).estimateGas.updateOBILuckyBox(...args)
  res = await OBILuckyBox.connect(owner).updateOBILuckyBox(...args, {
    gasLimit: estimatedGas.toNumber() + 50000
  })
  console.log('\t\tOBILuckyBox.updateOBILuckyBox()')
  await res.wait()
  args = [
    params.LuckyBox2.name,
    params.LuckyBox2.priceTokens,
    params.LuckyBox2.probability,
    params.LuckyBox2.nodeType,
    params.LuckyBox2.feature,
    params.LuckyBox2.remaining,
    params.LuckyBox2.maxBox,
    params.LuckyBox2.maxUser,
    params.LuckyBox2.attribute
  ]
  estimatedGas = await OBILuckyBox.connect(owner).estimateGas.updateOBILuckyBox(...args)
  res = await OBILuckyBox.connect(owner).updateOBILuckyBox(...args, {
    gasLimit: estimatedGas.toNumber() + 50000
  })
  console.log('\t\tOBILuckyBox.updateOBILuckyBox()')
  await res.wait()
  args = [
    params.LuckyBox3.name,
    params.LuckyBox3.priceTokens,
    params.LuckyBox3.probability,
    params.LuckyBox3.nodeType,
    params.LuckyBox3.feature,
    params.LuckyBox3.remaining,
    params.LuckyBox3.maxBox,
    params.LuckyBox3.maxUser,
    params.LuckyBox3.attribute
  ]
  estimatedGas = await OBILuckyBox.connect(owner).estimateGas.updateOBILuckyBox(...args)
  res = await OBILuckyBox.connect(owner).updateOBILuckyBox(...args, {
    gasLimit: estimatedGas.toNumber() + 50000
  })
  console.log('\t\tOBILuckyBox.updateOBILuckyBox()')
  await res.wait()
  res = await OBILuckyBox.getBoxSize()
  console.log('\t\tOBILuckyBox.getBoxSize() =', res.toNumber())
  res = await OBILuckyBox.getMapKeysBetweenIndexes(0, 4)
  console.log('\t\tOBILuckyBox.getMapKeysBetweenIndexes(0,4) =', res)

  console.log('\tEverest Features')
  res = await nt[4].getFeaturesSize()
  console.log('\t\tEverest.getFeaturesSize() =', res.toNumber())
  args = [
    params.NodeType4Feature0.name,
    params.NodeType4Feature0.rate
  ]
  estimatedGas = await nt[4].connect(owner).estimateGas.addFeature(...args)
  res = await nt[4].connect(owner).addFeature(...args, {
    gasLimit: estimatedGas.toNumber() + 50000
  })
  console.log('\t\tEverest.addFeature()')
  await res.wait()
  args = [
    params.NodeType4Feature1.name,
    params.NodeType4Feature1.rate
  ]
  estimatedGas = await nt[4].connect(owner).estimateGas.addFeature(...args)
  res = await nt[4].connect(owner).addFeature(...args, {
    gasLimit: estimatedGas.toNumber() + 50000
  })
  console.log('\t\tEverest.addFeature()')
  await res.wait()
  args = [
    params.NodeType4Feature2.name,
    params.NodeType4Feature2.rate
  ]
  estimatedGas = await nt[4].connect(owner).estimateGas.addFeature(...args)
  res = await nt[4].connect(owner).addFeature(...args, {
    gasLimit: estimatedGas.toNumber() + 50000
  })
  console.log('\t\tEverest.addFeature()')
  await res.wait()
  res = await nt[4].getFeaturesSize()
  console.log('\t\tEverest.getFeaturesSize() =', res.toNumber())
  res = await nt[4].getFeaturesBetweenIndexes(0, 3)
  console.log('\t\tEverest.getFeaturesBetweenIndexes(0,3) =', res)

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