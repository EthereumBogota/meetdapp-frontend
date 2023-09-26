export const CHAINID = process.env.NEXT_PUBLIC_CHAIN_ID
export const PROVIDER = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
export const SCAN = (
	address: string,
	scan: string | undefined = process.env.NEXT_PUBLIC_EVM_EXPLORER
) => `${scan}/${address}`
