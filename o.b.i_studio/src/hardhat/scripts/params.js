const { ethers } = require("hardhat");
const address = require("./address");

// NodeTypes
const NodeType0 = {
	name: "zoth",
	values: [
		500, // maxCount
		// ethers.utils.parseUnits("45", 18), // price
		14400, // claimTime
		// ethers.utils.parseUnits("0.075", 18), // rewardAmount
		1000, // claimTaxRoi
		0, // maxLevelUpUser
		0, // maxLevelUpTotal
		5, // maxCreationPendingUser
		10000000, // maxCreationPendingTotal
		10000000, // maxUser
		7 * 24 * 3600, // obtainingTimeReference
		100, // obtainingTimeRate
		0, // isBoostedTokenRate
		14 * 24 * 3600, // noClaimTimeReference
		ethers.utils.parseUnits("1", 18), // noClaimRewardAmount
		200, // global tax
		12 * 24 * 3600, // claimTimeReference
		2000, // claimTimeRate
		0, // maxMultiObtaining
		5, // maxMultiClaim
	]
}




// OBILuckyBox
const OBILuckyBox = {
	baseUri: "https://obistudios.io/luckybox/"
}


// LuckyBox
const LuckyBox0 = {
	name: "O.B.I Lucky Box",
	// priceTokens: ethers.utils.parseUnits("135", 18),
	probability: [
		510, 160, 9, 7, 6, 5, 4, 2
	],
	nodeType: [
		"Icarians", "Xenarths", "Hadesians", "Valkarians", "Ophites", "Kleptians", "Ardenterians", "Zoth"
	],

	remaining: [
		100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000
	],
	maxBox: 100000,
	maxUser: 100000,
	attribute: ""
}


const AddOwner = [
	"0x0000000000000000000000", // owner polar
	true // change super owner // put true
]

const NodeTypes = [
	NodeType0
]



const MinPricesLucky = {
	names: [
		LuckyBox0.name,
	],
	offerPrices: [
		ethers.utils.parseUnits("135", 18), // box 1
    ],
}

module.exports = {
	NodeType0,
	OBILuckyBox,
	LuckyBox0,
	AddOwner, 
	NodeTypes, MinPricesLucky
}