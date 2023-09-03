import '@/styles/globals.css'
import {
    Box,
    Flex,
    Text,
    Button,
    Image,
    Input,
    ButtonGroup
} from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Navbar(): React.ReactNode {
    const { t, i18n } = useTranslation()

    const english: boolean = i18n.language === "en"

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <>
            <Flex bgColor={'transparent'} position={'fixed'} zIndex={"100"} width={'100%'} px={'3rem'} py={'.8rem'} justifyContent={'center'}>
                <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'} maxWidth={'1200px'}>
                    <Flex flexShrink={"1"} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={'1rem'}>
                        <Image
                            src='img/logo.svg'
                            alt='MeetdApp logo'
                            width={["30px", "38px", "45px"]}
                        />
                        <Text fontFamily="body" color={'#DDEBED'} fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2.20rem" }}>MeetdApp</Text>
                    </Flex>

                    <Box flexShrink={"1"}>
                        <Input display={{ base: "none", md: "block" }} width={{ md: "250px", lg: "400px" }} placeholder={t('navbar.search-bar')} borderRadius={"3xl"} background={"rgba(255, 255, 255, 0.15);"} color={"#DDEBED"} />
                    </Box>

                    <Flex flexShrink={"1"} alignItems={'center'} gap={"1.5rem"}>
                        <ButtonGroup size={"sm"} isAttached variant={"outline"}>
                            <Button borderTopLeftRadius={"3xl"} borderBottomLeftRadius={"3xl"} color={"#DDEBED"} _hover={{ pointerEvents: english ? "none" : "auto" }} background={english ? "#348793" : "transparent"} onClick={() => changeLanguage("en")}>En</Button>
                            <Button borderTopRightRadius={"3xl"} borderBottomRightRadius={"3xl"} color={"#DDEBED"} _hover={{ pointerEvents: english ? "auto" : "none" }} background={english ? "transparent" : "#348793"} onClick={() => changeLanguage("es")}>Es</Button>
                        </ButtonGroup>
                        <Flex position={"relative"} top={'10px'} textAlign={"center"} flexDirection={"column"} gap={"3px"}>
                            <Button margin={"0 auto"} width={"80%"} color={"#DDEBED"} background={"#348793"} borderRadius={'3xl'}>{t('navbar.log-in')}</Button>

                            <Box gap={""}>
                                <Text display={"inline"} fontSize={{ base: "0.3em", md: ".8em" }} color={"#DDEBED"}>{t('navbar.no-account')}</Text>
                                <Text display={"inline"} fontSize={{ base: "0.3em", md: ".8em" }} color={"#348793"} > {t('navbar.register')} </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}