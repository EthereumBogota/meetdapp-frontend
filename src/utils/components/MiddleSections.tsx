import React from 'react'
import '@/styles/globals.css'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'

export default function MiddleSections() {
	return (
    <Flex width={"100%"} minH={'100vh'} align={"center"} justify={"center"} background="#DDEBED" p={"5em"}>
      <Flex width={"100%"} maxW={"1064px"} maxHeight={'726px'} flexDirection={'column'}>
        <Flex width={"100%"} >
          <Stack spacing={9}>
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
              Prepare an event
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
             Elevate Your Event Experience
            </Text>{' '}
          </Heading>
          </Stack>
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
            Unleash the power of Blockchain technology to elevate your event experience. Seamlessly create, manage, and customize events without intermediaries. Embrace a transparent and secure platform that redefines the way you connect and share unforgettable moments.
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
                Create Event
              </Button>
            </Stack>
            </Flex>
          </Stack>
          <Flex flex={1}
          background="#DDEBED"
          >
            <Image
            alt={'Section 1 Image'}
            objectFit={'cover'}
            src={
                '/img/Section 1 Image.png'
              }
            />
          </Flex>
        </Stack>
      </Flex>
    </Flex>

	)
}
