import Attendees from '@/components/dashboard/Attendees'
import EventDetails from '@/components/dashboard/EventDetails'
import EventImage from '@/components/dashboard/EventImage'
import EventLocation from '@/components/dashboard/EventLocation'
import GetTicketCard from '@/components/dashboard/GetTicketCard'
import PreviousEvents from '@/components/dashboard/PreviousEvents'
import TagsSection from '@/components/dashboard/TagsSection'
import { Flex } from '@chakra-ui/react'

function Event(): React.ReactNode {
  return (
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
  )
}

export default Event
