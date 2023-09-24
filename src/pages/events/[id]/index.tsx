import Attendees from '@/components/dashboard/Attendees'
import EventDetails from '@/components/dashboard/EventDetails'
import EventImage from '@/components/dashboard/EventImage'
import EventLocation from '@/components/dashboard/EventLocation'
import GetTicketCard from '@/components/dashboard/GetTicketCard'
import PreviousEvents from '@/components/dashboard/PreviousEvents'
import TagsSection from '@/components/dashboard/TagsSection'
import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import MeetdAppFactoryJson from '../../../assets/contracts/MeetdAppFactory.json'
import MeetdAppFactoryEventJson from '../../../assets/contracts/MeetdAppEvent.json'
import { useEffect } from 'react'
import { MeetdAppEvent, MeetdAppFactory } from '../../../../@types/typechain-types'
import { ethers } from 'ethers'

interface Event {
  id: string;
  title: string;
  description: string;
}

interface EventPageProps {
  event: Event;
}

function Event({ event }: EventPageProps) {
  const router = useRouter();
  const slug: string | string[] | undefined = router.query?.id

  const fetchData = async () => {

    const ethereum = (window as any).ethereum
    const web3Provider: ethers.providers.Web3Provider = new ethers.providers.Web3Provider(ethereum)
    await web3Provider.send('eth_requestAccounts', [])
    const web3Signer: ethers.providers.JsonRpcSigner = web3Provider.getSigner()

    const meetdAppFactoryContract: ethers.Contract =
      new ethers.Contract(MeetdAppFactoryJson.address, MeetdAppFactoryJson.abi, web3Signer) as MeetdAppFactory

    const eventId: string = "mC8cCmWH5Ws8IZQy"
    const bytesValue = ethers.utils.toUtf8Bytes(eventId);
    const hashBytes32 = ethers.utils.keccak256(bytesValue);

    const eventContractAdress: string = await meetdAppFactoryContract.mapIdEvent(hashBytes32)
    const eventContract = new ethers.Contract(eventContractAdress, MeetdAppFactoryEventJson.abi, web3Signer) as MeetdAppEvent
    await eventContract.buyTicket()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Flex
        background={
          'linear-gradient(180deg, #348793 -0.41%, #00001C -0.4%, #053763 73.8%)'
        }
        direction={{ base: 'column', lg: 'column' }}
        gap={6}
        paddingBottom={6}
      >
        <Flex
          paddingTop={{ base: '2rem', lg: 14 }}
          minH={{ base: 'auto', lg: '100vh' }}
          width={'full'}
          justify={'center'}
          position={'relative'}
        >
          <Flex
            mt={{ base: '6rem', lg: 5 }}
            gap={'3em'}
            px={3}
            maxW={'1300px'}
            width={'90%'}
            alignItems={'center'}
            justify={{ base: 'space-evenly', lg: 'space-between' }}
            direction={{ base: 'column', lg: 'row' }}
          >
            <EventImage />
            <EventLocation />
          </Flex>
        </Flex>

        <Flex
          minH={{ base: 'auto', lg: '100vh' }}
          width={'full'}
          justify={'center'}
        >
          <Flex
            mt={{ base: '6rem', lg: 5 }}
            gap={'3em'}
            px={3}
            maxW={'1300px'}
            width={'90%'}
            alignItems={'initial'}
            justify={{ base: 'space-evenly', lg: 'space-between' }}
            direction={{ base: 'column', lg: 'row' }}
          >
            <EventDetails />
            <GetTicketCard />
          </Flex>
        </Flex>

        <PreviousEvents />
        <Attendees />
        <TagsSection />

      </Flex>
    </>
  )
}

export default Event
