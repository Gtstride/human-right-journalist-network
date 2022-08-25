import React from 'react'
import {
  Box, Flex, HStack, VStack, Button, Text, SimpleGrid, ButtonGroup, Center, Image, Stack, Heading, Spacer, useDisclosure, IconButton,
  Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, InputGroup, InputRightElement, Input
} from '@chakra-ui/react'
import logo from "../../assets/white_logo.png";
import { Link } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

export const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex minWidth='max-content' alignItems='center' spacing={10} gap='8' p={10} bg={"#0a2351"} direction={{ base: "column", md: "row" }}>
      <Box p='2' as={Link} to="/">
        <Heading size='md'><Image src={logo} size="sm" h="75px" /></Heading>
      </Box>

      <Flex 
        pos="fixed"
        top={"10rem"}
        right={"1rem"}
      >

      </Flex>
      <Spacer />
      <Box>
        <Flex spacing={10}>
          <Stack spacing={10} direction={{ base: "column", md: "row" }} color="#fff" fontWeight={"700"}>
            <Text as={Link} to={"/about"}>Home</Text>
            <Text>About us</Text>
            <Text>What We Do </Text>
            <Text>Media</Text>
            <Text>Contact</Text>
          </Stack>
        </Flex>
      </Box>
      <Button color="#000" bg={"#fff"}>Donate</Button>
      {/* Mobile View */}

      <IconButton
        pos="fixed"
        left={0}
        top={0}
        m={4}
        display={{base: "none", md: ""}}
        zIndex="10"
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
        onClick={onOpen} // what's this?
      />
    </Flex>
  )
}
export default Index