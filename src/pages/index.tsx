import { useEffect, useState } from 'react'
import Hero from '../utils/components/Hero'
import MiddleSections from '../utils/components/MiddleSections'
import { ethers } from 'ethers'
import { MeetdAppFactory } from '../../@types/typechain-types'
import MeetdAppFactoryJson from '../assets/contracts/MeetdAppFactory.json'

export default function Home() {
	const [meetdAppFactpry, setMeetdAppFactory] = useState<MeetdAppFactory | null>(null)
	const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null)
	const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(
		null
	)

	const fecthFactory = async () => {
		const ethereum = (window as any).ethereum
		const web3Provider: ethers.providers.Web3Provider = new ethers.providers.Web3Provider(ethereum)
		await web3Provider.send('eth_requestAccounts', [])
		const web3Signer: ethers.providers.JsonRpcSigner = web3Provider.getSigner()

		const meetdAppFactoryContract: ethers.Contract =
			new ethers.Contract(MeetdAppFactoryJson.address, MeetdAppFactoryJson.abi, web3Signer) as MeetdAppFactory
	}

	useEffect(() => {
		const ethereum = (window as any).ethereum;

		if (typeof ethereum !== 'undefined' && typeof ethereum === 'object' && typeof ethereum.web3 !== 'undefined') {
			// MetaMask is installed and web3 is available
		} else {
			// MetaMask is not installed or web3 is not available
			console.log('MetaMask no está instalado en este navegador.');
		}
	}, []);

	return (
		<>
			<Hero />
			<MiddleSections />
		</>
	)
}
