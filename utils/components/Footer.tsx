import {
    Flex,
    Box,
    HStack,
    Text,
    Divider,
    Grid,
    GridItem,
    Image
} from "@chakra-ui/react";
import Logo from "./Logo";
import { Link } from "@chakra-ui/next-js";
import { FaYoutube, FaInstagram } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Footer(): React.ReactNode {
    const { t } = useTranslation()

    return (
        <>
            <Flex width={"100%"} align={"center"} justify={"center"} background={"#00001C"} py={"6rem"}>
                <Flex width={'100%'} maxW={"1200px"} direction={"column"}>
                    <Flex justify={"space-between"} align={"center"}>
                        <Logo />
                        <Text color={"#DDEBED"}>&copy; 2022 - 2023 {t('footer.copyright')}</Text>
                        <HStack spacing={"1em"}>
                            <Box>
                                <Link href={"#"}>
                                    <FaYoutube size={35} color="#fff" />
                                </Link>
                            </Box>
                            <Box>
                                <Image
                                    src='img/Twitter X.svg'
                                    alt='X'
                                    width={["30px", "38px", "45px"]}
                                />
                            </Box>
                            <Box>
                                <Link href={"#"}>
                                    <FaInstagram size={35} color="#fff" />
                                </Link>
                            </Box>
                        </HStack>
                    </Flex>
                    <Divider my={"4rem"} />
                    <Grid templateColumns='repeat(3, 1fr)' gap={2} color={"#DDEBED"} >
                        <GridItem><Link href={"#"}>item</Link></GridItem>
                        <GridItem><Link href={"#"}>item</Link></GridItem>
                        <GridItem><Link href={"#"}>item</Link></GridItem>
                        <GridItem><Link href={"#"}>item</Link></GridItem>
                        <GridItem><Link href={"#"}>item</Link></GridItem>
                        <GridItem><Link href={"#"}>item</Link></GridItem>
                        <GridItem><Link href={"#"}>item</Link></GridItem>
                        <GridItem><Link href={"#"}>item</Link></GridItem>
                        <GridItem><Link href={"#"}>item</Link></GridItem>
                    </Grid>
                </Flex>
            </Flex>
        </>
    )
}