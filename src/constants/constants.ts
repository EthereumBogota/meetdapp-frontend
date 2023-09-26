import meetdAppFactoryJsonMumbai from '@/assets/deployments/mumbai/MeetdAppFactory.json'
import meetdAppEventJsonMumbai from '@/assets/deployments/mumbai/MeetdAppEvent.json'
import meetdAppNFTJsonMumbai from '@/assets/deployments/mumbai/MeetdAppNFT.json'
import meetdAppFactoryJsonPolygon from '@/assets/deployments/polygon/MeetdAppFactory.json'
import meetdAppEventJsonPolygon from '@/assets/deployments/polygon/MeetdAppEvent.json'
import meetdAppNFTJsonPolygon from '@/assets/deployments/polygon/MeetdAppNFT.json'

interface ContractsJson {
	meetdAppFactory:
		| typeof meetdAppFactoryJsonPolygon
		| typeof meetdAppFactoryJsonMumbai
	meetdAppEvent:
		| typeof meetdAppEventJsonPolygon
		| typeof meetdAppEventJsonMumbai
	meetdAppNFT: typeof meetdAppNFTJsonPolygon | typeof meetdAppNFTJsonMumbai
}

export const CHAINID = process.env.NEXT_PUBLIC_CHAIN_ID
export const PROVIDER = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
export const SCAN = (
	address: string,
	scan: string | undefined = process.env.NEXT_PUBLIC_EVM_EXPLORER
) => `${scan}/${address}`

export const CONTRACTS_JSON = (): ContractsJson => {
	if (process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true') {
		return {
			meetdAppEvent: meetdAppEventJsonMumbai,
			meetdAppFactory: meetdAppFactoryJsonMumbai,
			meetdAppNFT: meetdAppNFTJsonMumbai
		}
	}
	return {
		meetdAppEvent: meetdAppEventJsonPolygon,
		meetdAppFactory: meetdAppFactoryJsonPolygon,
		meetdAppNFT: meetdAppNFTJsonPolygon
	}
}
