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

export default function Hero() {
	return (
			<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} spacing={0}>
      <Flex p={8} flex={1} align={'center'} justify={'center'} background="linear-gradient(180deg, #348793 -0.41%, #00001C -0.4%, #053763 73.8%)">
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
			  fontFamily="body"
              as={'span'}
              position={'relative'}
			  color={'#FFF'}
              fontSize={'72xp'}
              fontWeight={800}
              fontStyle={'normal'}
              _after={{
                content: "''",
                width: 'full',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#FFF',
                zIndex: -1,
              }}>
              Embrace
              <br />{' '}
              Meaningful Connections
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'xl', lg: '2xl' }} color={'#FFF'} fontStyle={'normal'} fontWeight={400} lineHeight={'33px'}>
		  Where uniqueness thrives. Unlock the potencial of blockchain technology, elevate your event experience.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
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
              Get Started
            </Button>
            <Button rounded={'full'} width={'204px'} height={'50px'} fontSize={'21px'} fontStyle={'normal'} fontWeight={400} >Learn More</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}
	  align={'center'}
	  justify={'center'}
	  background="linear-gradient(180deg, #348793 -0.41%, #00001C -0.4%, #053763 73.8%)"
	  >
        <Image
          alt={'Elipse Hero'}
          src={
            '/img/Elipse Hero.svg'
          }
          position={'absolute'}
          right={-375}
          zIndex={0}
          top={'34px'}
          width={'1008px'}
          height={'679px'}
          />
        <Image
          position={'absolute'}
          alt={'Hero Image'}
          objectFit={'cover'}
          src={
              '/img/Hero Image.png'
            }
            zIndex={50}
            width={'620px'}
            height={'664x'}
            top={'54px'}
        />
      </Flex>
    </Stack>
	)
}
