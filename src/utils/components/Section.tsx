import '@/styles/globals.css'
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  StackDivider
} from '@chakra-ui/react'

interface ISectionProps {
  badge: string,
  heading: string,
  description: string,
  button: string,
  image: string,
  imageRight: boolean
}

export default function Section(props: ISectionProps): React.ReactNode {
  const { badge, heading, description, button, image, imageRight } = props


  return (
    <Flex
      width={"90%"}
      maxW={"1200px"}
      flexDirection={'column'}
      color={'#00001C'}
      fontFamily="space"
      fontWeight={"normal"}
      px={{ base: 4, lg: 0 }}>
      <Flex width={"100%"}>
        <StackDivider >
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            pb={"20px"}
            fontFamily="spaceBold">
            <Text
              display={'block'}
              position={'relative'}
              fontSize={{ base: '15px', lg: "17px" }}
              py={"10px"}
            >
              {badge}
            </Text>
            <Text
              position={'relative'}
              fontSize={{ base: "30px", lg: '38px' }}
              py={"10px"}
            >
              {heading}
            </Text>
          </Heading>
        </StackDivider>
      </Flex>

      <Flex
        zIndex={50}
        justify={{ lg: "space-between" }}
        alignContent={{ base: "center" }}
        gap={{ base: "20px", lg: 0 }}
        flexDirection={{ base: 'column', lg: `${imageRight ? "row" : "row-reverse"}` }}>
        <Flex direction={"column"} justifyContent={'space-between'} h={'full'} w={{ base: 'full', lg: "50%" }} gap={{ base: "20px", lg: '30px' }}>
          <Text
            fontFamily="space"
            fontWeight={"normal"}
            fontSize={'20px'}
            lineHeight={'33px'}
          >
            {description}
          </Text>
          <Button
            boxShadow={'0px 0px 0px 0px rgba(0, 0, 0, 0.30), 3px 2px 8px 0px rgba(0, 0, 0, 0.29), 11px 8px 14px 0px rgba(0, 0, 0, 0.26), 25px 18px 19px 0px rgba(0, 0, 0, 0.15), 45px 31px 22px 0px rgba(0, 0, 0, 0.04), 71px 49px 24px 0px rgba(0, 0, 0, 0.01)'}
            rounded={'full'}
            bg={'#348793'}
            width={"fit-content"}
            padding={".5em 1.5em"}
            fontFamily={"neue"}
            color={'#DDEBED'}
            fontSize={{ base: "20px", lg: '24px' }}
            fontWeight={"light"}
            _hover={{
              bg: '#227682',
              transform: 'scale(1.03)',
              transition: 'transform 0.3s ease-in-out'
            }}>
            {button}
          </Button>
        </Flex>
        <Image
          alt={'Section 1 Image'}
          width={{ base: "70%", md: "50%", lg: "40%" }}
          objectFit={'cover'}
          mx={{ base: "auto", lg: 0 }}
          src={image}
        />
      </Flex>
    </Flex >
  )
}
