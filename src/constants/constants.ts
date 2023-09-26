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

const mumbaiContracts: ContractsJson = {
	meetdAppFactory: meetdAppFactoryJsonMumbai,
	meetdAppEvent: meetdAppEventJsonMumbai,
	meetdAppNFT: meetdAppNFTJsonMumbai
}

const polygonContracts: ContractsJson = {
	meetdAppFactory: meetdAppFactoryJsonPolygon,
	meetdAppEvent: meetdAppEventJsonPolygon,
	meetdAppNFT: meetdAppNFTJsonPolygon
}

export const PROVIDER = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY

export const SCAN = (
	address: string,
	scan: string | undefined = process.env.NEXT_PUBLIC_EVM_EXPLORER
) => `${scan}/${address}`

const setChainId = () =>
	process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? 80001 : 137

export const CHAINID = setChainId()

const setContractsJson = (): ContractsJson => {
	return process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
		? mumbaiContracts
		: polygonContracts
}

export const CONTRACTS_JSON = setContractsJson()
