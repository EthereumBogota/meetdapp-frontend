export const CHAINID = 137
export const PROVIDER = `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_POLYGON_ALCHEMY_API_KEY}`
export const SCAN = (
	address: string,
	scan: string = `https://polygonscan.com/address`
) => `${scan}/${address}`
