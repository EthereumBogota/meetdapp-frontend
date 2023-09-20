import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Container,
} from '@chakra-ui/react'
import { FaChevronDown } from 'react-icons/fa'


export default function AccordionC() {
  return (
    <Flex
      align={'center'}
      justify={'center'}
    >
      <Container w={"80%"}>
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg" fontFamily={"space"}>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">What is MeetDapp?</Text>
              <FaChevronDown fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore eum culpa similique vitae veritatis commodi, asperiores magni officiis quis molestiae, recusandae, unde animi ad rem nesciunt placeat praesentium temporibus aut.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">What advantages to use?</Text>
              <FaChevronDown fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum labore quis minus ipsum similique expedita quo, dolorum a iure, hic eum! Aliquid nihil error recusandae illum praesentium. Eligendi, voluptates voluptas?
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">How to start using MeetDapp?</Text>
              <FaChevronDown fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, nam tenetur laudantium nemo expedita eum facilis hic eos consequatur vel consequuntur suscipit dolore ex quod eius iusto optio saepe a.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}