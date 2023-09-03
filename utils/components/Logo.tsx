import {
    Flex,
    Image,
    Text
} from "@chakra-ui/react";

export default function Logo() {
    return (
        <>
            <Flex flexShrink={"1"} flexDirection={'row'} alignItems={'center'} justifyContent={'center'} gap={'1rem'}>
                <Image
                    src='img/logo.svg'
                    alt='MeetdApp logo'
                    width={["30px", "38px", "45px"]}
                />
                <Text fontFamily="body" color={'#DDEBED'} fontSize={{ base: "1.2rem", md: "1.5rem", lg: "2.20rem" }}>MeetdApp</Text>
            </Flex>
        </>
    )
}