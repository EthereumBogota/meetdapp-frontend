import {
    Flex,
    Image,
    Text
} from "@chakra-ui/react";

export default function Logo() {
    return (
        <>
            <Flex flexShrink={"1"} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={{ base: '.4rem', lg: '1rem' }}>
                <Image
                    src='/img/Logo.svg'
                    alt='MeetdApp logo'
                    width={["30px", "38px", "45px"]}
                />
                <Text color={'#DDEBED'} fontSize={{ base: "1rem", md: "1.2rem", lg: "2rem" }}>MeetdApp</Text>
            </Flex>
        </>
    )
}