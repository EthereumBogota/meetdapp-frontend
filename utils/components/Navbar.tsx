import '@/styles/globals.css'
import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
    Input,
    Select
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
    return (
        <>
            <Flex bgColor={'transparent'} position={'fixed'} zIndex={"100"} width={'100%'} px={'3rem'} py={'1.3rem'} justifyContent={'center'}>
                <Flex alignItems={'center'} justifyContent={'space-between'} width={'100%'} maxWidth={'1200px'}>
                    <Flex flexShrink={"1"} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={'1.5rem'}>
                        <Image
                            src='img/logo.svg'
                            alt='MeetdApp logo'
                        />
                        <Text fontFamily="body" color={'#DDEBED'} fontSize={{ base: "1.125rem", md: "1.5rem", lg: "2.20rem" }}>MeetdApp</Text>
                    </Flex>

                    <Box flexShrink={"1"}>
                        <Input placeholder='Basic usage' />
                    </Box>

                    <Flex flexShrink={"1"} alignItems={'center'}>
                        <Select variant='filled' size={"sm"} placeholder='Filled' >
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}