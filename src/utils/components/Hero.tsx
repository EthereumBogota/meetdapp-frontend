import React from 'react'
import '@/styles/globals.css'
import Arrow_Right from './Arrow_Right'
import UnderlineHero from './UnderlineHero'

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
          <Stack spacing={0}>
          <Heading fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}  lineHeight={'60px'}>
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
          <UnderlineHero/>
          </Stack>
          <Text fontSize={{ base: 'xl', lg: '2xl' }} color={'#FFF'} fontStyle={'normal'} fontWeight={400} lineHeight={'33px'}>
		        Where uniqueness thrives. Unlock the potencial of blockchain technology, elevate your event experience.
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
              Get Started
            </Button>
            <Button 
              rightIcon={<Arrow_Right/>} 
              color={'#DDEBED'} 
              variant={'outline'} 
              rounded={'full'} 
              width={'204px'} 
              height={'50px'} 
              fontSize={'21px'} 
              fontStyle={'normal'} 
              fontWeight={400}
              _hover={{
                bg: 'transparent',
                transform: 'scale(1.03)',
                transition: 'transform 0.3s ease-in-out'
              }}
              >
              Learn More
              </Button>
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
