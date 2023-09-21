import { ADAPTER_EVENTS, CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { createContext, FunctionComponent, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { CHAIN_CONFIG, CHAIN_CONFIG_TYPE } from "../config/chainConfig";
import { WEB3AUTH_NETWORK_TYPE } from "../config/web3AuthNetwork";
import { getWalletProvider, IWalletProvider } from "./walletProvider";
import { User } from "@/types/User";

export interface IWeb3AuthContext {
	web3Auth: Web3Auth | null
	provider: IWalletProvider | null
	isLoading: boolean
	user: unknown
	chain: string
	login: () => Promise<SafeEventEmitterProvider | null | undefined>
	logout: () => Promise<void>
	getUserInfo: () => Promise<any>
	signMessage: () => Promise<any>
	getAccounts: () => Promise<any>
	getBalance: () => Promise<any>
	signTransaction: () => Promise<void>
	signAndSendTransaction: () => Promise<void>
	addChain: () => Promise<void>
	switchChain: () => Promise<void>
	userInfo: User | null
}
export const Web3AuthContext = createContext<IWeb3AuthContext>({
	web3Auth: null,
	provider: null,
	isLoading: false,
	user: null,
	chain: '',
	login: async () => null,
	logout: async () => { },
	getUserInfo: async () => { },
	signMessage: async () => { },
	getAccounts: async () => { },
	getBalance: async () => { },
	signTransaction: async () => { },
	signAndSendTransaction: async () => { },
	addChain: async () => { },
	switchChain: async () => { },
	userInfo: null
})
export function useWeb3Auth(): IWeb3AuthContext {
	return useContext(Web3AuthContext)
}
interface IWeb3AuthState {
	web3AuthNetwork: WEB3AUTH_NETWORK_TYPE
	chain: CHAIN_CONFIG_TYPE
	children?: React.ReactNode
}
interface IWeb3AuthProps {
	children?: ReactNode
	web3AuthNetwork: WEB3AUTH_NETWORK_TYPE
	chain: CHAIN_CONFIG_TYPE
}
export const Web3AuthProvider: FunctionComponent<IWeb3AuthState> = ({
	children,
	web3AuthNetwork,
	chain
}: IWeb3AuthProps) => {
	const [web3Auth, setWeb3Auth] = useState<Web3Auth | null>(null)
	const [provider, setProvider] = useState<IWalletProvider | null>(null)
	const [user, setUser] = useState<unknown | null>(null)
	const [userInfo, setUserInfo] = useState<User | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const newChain: CHAIN_CONFIG_TYPE = 'mainnet'
	const web3network: WEB3AUTH_NETWORK_TYPE = 'mainnet'
	const setWalletProvider = useCallback(
		(web3authProvider: SafeEventEmitterProvider) => {
			const walletProvider = getWalletProvider(
				newChain,
				web3authProvider,
				uiConsole
			)
			console.log('wallet provider is', walletProvider);

			setProvider(walletProvider)
		},
		[chain]
	)

	useEffect(() => {
		console.log('entering to function');

		const subscribeAuthEvents = (web3auth: Web3Auth) => {
			// Can subscribe to all ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
			web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: unknown) => {
				console.log('Yeah!, you are successfully logged in', data)
				setUser(data)
				setWalletProvider(web3auth.provider!)
			})

			web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
				console.log('connecting')
			})

			web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
				console.log('disconnected')
				setUser(null)
			})

			web3auth.on(ADAPTER_EVENTS.ERRORED, error => {
				console.error('some error or user has cancelled login request', error)
			})
		}

		async function init() {
			try {
				const currentChainConfig = CHAIN_CONFIG[chain]
				setIsLoading(true)
				const clientId = process.env.NEXT_PUBLIC_YOUR_WEB3AUTH_CLIENT_ID
				if (!clientId) {
					throw new Error('Please provide your web3auth client id')
				}
				const web3AuthInstance = new Web3Auth({
					chainConfig: currentChainConfig,
					// get your client id from https://dashboard.web3auth.io
					clientId,
					uiConfig: {
						defaultLanguage: 'en',
						theme: 'light',
						loginGridCol: 3,
						primaryButton: 'socialLogin'
					},
					enableLogging: true
				})
				const adapter = new OpenloginAdapter({
					adapterSettings: {
						network: web3AuthNetwork,
						clientId,
						loginConfig: {
							facebook: {
								name: 'Custom Auth Login',
								verifier: 'facebook', // Please create a verifier on the developer dashboard and pass the name here
								typeOfLogin: 'facebook', // Pass on the login provider of the verifier you've created
								showOnModal: false
							}
						}
					}
				})
				web3AuthInstance.configureAdapter(adapter)
				subscribeAuthEvents(web3AuthInstance)
				setWeb3Auth(web3AuthInstance)
				await web3AuthInstance.initModal({
					modalConfig: {
						openlogin: {
							label: 'openlogin',
							loginMethods: {
								google: {
									name: 'google',
									mainOption: true
								},
								apple: {
									name: 'apple',
									mainOption: true
								}
							},
							// setting it to false will hide all social login methods from modal.
							showOnModal: true
						}
					}
				})
			} catch (error) {
				console.error(error)
			} finally {
				setIsLoading(false)
			}
		}
		init()
	}, [chain, web3AuthNetwork, setWalletProvider])

	const login = async () => {
		if (!web3Auth) {
			console.log('web3auth not initialized yet')
			uiConsole('web3auth not initialized yet')
			return
		}
		const localProvider = await web3Auth.connect()
		if (localProvider) {
			setWalletProvider(localProvider)
			return localProvider
		}
		return null
	}

	const logout = async () => {
		if (!web3Auth) {
			console.log('web3auth not initialized yet')
			uiConsole('web3auth not initialized yet')
			return
		}
		await web3Auth.logout()
		setProvider(null)
	}

	const getUserInfo = async () => {
		if (!web3Auth) {
			console.log('web3auth not initialized yet')
			uiConsole('web3auth not initialized yet')
			return
		}
		const user = await web3Auth.getUserInfo()
		uiConsole(user)
	}

	const addChain = async () => {
		if (!provider) {
			uiConsole('provider not initialized yet')
			return
		}
		const newChain = {
			chainId: '0x19',
			displayName: 'Cronos Mainnet Beta',
			chainNamespace: CHAIN_NAMESPACES.EIP155,
			tickerName: 'Cronos',
			ticker: 'CRO',
			decimals: 18,
			rpcTarget: 'https://cronos-evm.publicnode.com',
			blockExplorer: 'https://goerli.etherscan.io'
		}
		await web3Auth?.addChain(newChain)
		uiConsole('New Chain Added')
	}
	const switchChain = async () => {
		if (!provider) {
			uiConsole('provider not initialized yet')
			return
		}
		await web3Auth?.switchChain({ chainId: '0x19' })
		uiConsole('Chain Switched')
	}

	const getAccounts = async () => {
		if (!provider) {
			console.log('provider not initialized yet')
			uiConsole('provider not initialized yet')
			return
		}
		const accounts = await provider.getAccounts()
		return accounts
	}

	const getBalance = async () => {
		if (!provider) {
			console.log('provider not initialized yet')
			uiConsole('provider not initialized yet')
			return
		}
		await provider.getBalance()
	}

	const signMessage = async () => {
		if (!provider) {
			console.log('provider not initialized yet')
			uiConsole('provider not initialized yet')
			return
		}
		await provider.signMessage()
	}

	const signTransaction = async () => {
		if (!provider) {
			console.log('provider not initialized yet')
			uiConsole('provider not initialized yet')
			return
		}
		await provider.signTransaction()
	}

	const signAndSendTransaction = async () => {
		if (!provider) {
			console.log('provider not initialized yet')
			uiConsole('provider not initialized yet')
			return
		}
		await provider.signAndSendTransaction()
	}

	const uiConsole = (...args: unknown[]): void => {
		console.log(args);

		// const el = document.querySelector('#console>p')
		// if (el) {
		// 	el.innerHTML = JSON.stringify(args || {}, null, 2)
		// }
	}

	const contextProvider = {
		web3Auth,
		chain,
		provider,
		user,
		isLoading,
		login,
		logout,
		getUserInfo,
		getAccounts,
		getBalance,
		signMessage,
		signTransaction,
		signAndSendTransaction,
		addChain,
		switchChain,
		userInfo
	}
	return (
		<Web3AuthContext.Provider value={contextProvider}>
			{children}
		</Web3AuthContext.Provider>
	)
}
