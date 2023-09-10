import React from 'react'
import '@/styles/globals.css'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  StackDivider
} from '@chakra-ui/react'

export default function Section2() {
	return (
    <Flex width={"100%"} minH={'100vh'} align={"center"} justify={"center"} background="#DDEBED" p={"5em"}>
      <Flex width={"100%"} maxW={"1064px"} maxHeight={'726px'} flexDirection={'column'}>
        <Flex width={"100%"} >
          <StackDivider >
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
          <Text
              display={'block'}
			        fontFamily="tittleSections"
              as={'span'}
              position={'relative'}
			        color={'#00001C'}
              fontSize={'16px'}
              fontWeight={600}
              fontStyle={'normal'}
              >
              Inmutable Ticket
            </Text>{' '}
            <Text
			        fontFamily="tittleSections"
              as={'span'}
              position={'relative'}
			        color={'#00001C'}
              fontSize={'39.06px'}
              fontWeight={600}
              fontStyle={'normal'}
              marginTop={'24px'}
              >
             Your Immutable Pass to Unforgettable Moments
            </Text>{' '}
          </Heading>
          </StackDivider>
        </Flex>

        <Stack direction={{ base: 'column', md: 'row' }} spacing={3}>

          <Stack  w={'full'} maxW={'lg'}>
            <Flex p={0} flex={1} align={'flex-start'} flexDirection={'column'} background="#DDEBED">
            <Text 
            fontFamily={'bodySections'}
            fontSize={'18px'} 
            color={'#00001C'} 
            fontStyle={'normal'}
            fontWeight={400} 
            lineHeight={'33px'}
            >
            With MeetDapp&apos;s NFT tickets, your pass to unforgettable moments is now secured on the Blockchain. Even if you misplace your ticket, fear not – the immutable Blockchain ensures your access remains intact, allowing you to fully immerse yourself in the magic of each event.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button
                boxShadow={'0px 0px 0px 0px rgba(0, 0, 0, 0.30), 3px 2px 8px 0px rgba(0, 0, 0, 0.29), 11px 8px 14px 0px rgba(0, 0, 0, 0.26), 25px 18px 19px 0px rgba(0, 0, 0, 0.15), 45px 31px 22px 0px rgba(0, 0, 0, 0.04), 71px 49px 24px 0px rgba(0, 0, 0, 0.01)'}
                width={'204px'}
                height={'50px'}
                rounded={'full'}
                bg={'#348793'}
                color={'#DDEBED'}
                fontSize={'24px'}
                fontStyle={'normal'}
                fontWeight={400}
                _hover={{
                  bg: '#227682',
                  transform: 'scale(1.03)',
                  transition: 'transform 0.3s ease-in-out'
                }}>
                Join Event
              </Button>
            </Stack>
            </Flex>
          </Stack>
          <Flex flex={1}
          background="#DDEBED"
          >
            <Image
            alt={'Section 2 Image'}
            objectFit={'cover'}
            src={
                '/img/Section 2 Image.png'
            }
            />
          </Flex>
        </Stack>
      </Flex>
    </Flex>

	)
}
