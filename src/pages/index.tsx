import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Explorer from './explore/index'
import Hero from '../utils/components/Hero'
import AuthInterface from '../utils/components/Auth_interface'
import { Web3Auth } from "@web3auth/web3auth";
import Web3 from "web3";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import { Button } from '@chakra-ui/react'


const clientId = "BMkKHE4n2KgzLWFXDmpCVIpWMggQ8Pe8_4pRkbm9aNafKnn0WRlb1zoy6JlOh2nN2Aw54jIAbFbsAUut3tuJr8w"

const metadata = {
	title: 'MeetDapp',
	description: 'Decentralized calculator'
}

export default function Home() {
  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

	useEffect(() => {9
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x13881",
            rpcTarget: "https://rpc-mumbai.maticvigil.com/",
          },
        });
        setWeb3auth(web3auth);
        await web3auth.initModal();
        setProvider(web3auth.provider);
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);
	const login = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
  };
	const getAccounts = async () => {
		try {
			if (!web3auth?.provider) {
				console.log("provider not initialized yet");
				return;
			}
			const info = await web3auth.authenticateUser();
      console.log(info);
      const info2 = await web3auth.getUserInfo();
      console.log(info2);
      // console.log(web3auth.provider);
			// const web3 = new Web3(provider);
			// //const address = (await web3.eth.getAccounts())[0];
			// const eth = await web3.eth.accounts;
			// console.log(eth);
			//console.log(address);
		} catch (error) {
			console.log(error);
		}
  };
	return (
		<>		
			<Head>
				<title>{metadata.title}</title>
				<meta name='description' content={metadata.description} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/Images/favicon.ico' sizes='any' />
			</Head>
			<Button
			onClick={login}
              width={'204px'}
              height={'50px'}
              rounded={'full'}
              bg={'#348793'}
              color={'#DDEBED'}
              fontSize={'24px'}
              fontStyle={'normal'}
              fontWeight={400}
              _hover={{
                bg: 'blue.500',
              }}>
              login
            </Button>
						<Button
						onClick={getAccounts}
              width={'204px'}
              height={'50px'}
              rounded={'full'}
              bg={'#348793'}
              color={'#DDEBED'}
              fontSize={'24px'}
              fontStyle={'normal'}
              fontWeight={400}
              _hover={{
                bg: 'blue.500',
              }}>
              getinfo
            </Button>
			<Hero/>
		</>
	)
}
