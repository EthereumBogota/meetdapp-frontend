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
        <Flex width={"100%"} maxW={"1300px"} flexDirection={'column'} color={'#00001C'}>
            <Flex width={"100%"}>
                <StackDivider >
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} pb={"20px"}>
                        <Text
                            display={'block'}
                            fontFamily="tittleSections"
                            position={'relative'}
                            fontSize={{ base: '16px', lg: "19px" }}
                            fontStyle={'normal'}
                            py={"10px"}
                        >
                            {badge}
                        </Text>
                        <Text
                            fontFamily="tittleSections"
                            position={'relative'}
                            fontSize={{ base: "30px", lg: '38px' }}
                            fontStyle={'normal'}
                            py={"10px"}
                        >
                            {heading}
                        </Text>
                    </Heading>
                </StackDivider>
            </Flex>

            <Flex zIndex={50} flexDirection={{ base: 'column', lg: `${imageRight ? "row" : "row-reverse"}` }} gap={"2em"}>
                <Stack w={{ base: 'full', lg: "50%" }}>
                    <Text
                        fontFamily={'bodySections'}
                        fontSize={'18px'}
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
                        color={'#DDEBED'}
                        fontSize={{ base: "20px", lg: '24px' }}
                        fontWeight={400}
                        mt={"15px"}
                        _hover={{
                            bg: '#227682',
                            transform: 'scale(1.03)',
                            transition: 'transform 0.3s ease-in-out'
                        }}>
                        {button}
                    </Button>
                </Stack>
                <Image
                    mx={"auto"}
                    alt={'Section 1 Image'}
                    width={{ base: "70%", md: "50%", lg: "40%" }}
                    objectFit={'cover'}
                    src={image}
                />
            </Flex>
        </Flex >
    )
}
