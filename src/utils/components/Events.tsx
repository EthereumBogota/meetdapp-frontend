import {
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import EventCard from "./EventCard";

export default function Events(): React.ReactNode {
  const { t } = useTranslation()

  return (
    <>
      <Flex width={"90%"} maxW={"1200px"} flexDirection={'column'} gap={10} zIndex={50} color={'#00001C'} px={{ base: 4, lg: 0 }}>
        <Heading fontFamily="spaceBold">
          {t('landing.top-events.title')} 🔥
        </Heading>
        <Grid width={"full"} templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={{ base: 10, lg: 16 }}>
          <GridItem justifySelf={"center"}>
            <EventCard />
          </GridItem>
          <GridItem justifySelf={"center"}>
            <EventCard />
          </GridItem>
          <GridItem justifySelf={"center"}>
            <EventCard />
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}