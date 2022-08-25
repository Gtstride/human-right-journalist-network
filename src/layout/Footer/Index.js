import React from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  HStack,
  Center,
  Image,
  InputGroup,
  SimpleGrid,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import logo from "../../assets/white_logo.png";

export default function Footer() {
  return (
    <>
      <SimpleGrid minChildWidth="120px" spacing="40px" p="40px" bg={"#0a2351"}>
        <Box height="80px">
          <Center pr={{ base: "60px", md: "" }}>
            <Image src={logo} h="75px" alt="Human Right Journalist Network" />
          </Center>
        </Box>
        <Box height="auto">
          <Box color="#fff">
            <Text mb={5} fontSize="20px" fontWeight="bold">Our Team</Text>
            <Stack spacing="15px">
                <Text>About Us</Text>
                <Text>Team</Text>
                <Text>What we do</Text>
                <Text>Contact</Text>
            </Stack>
           
          </Box>
        </Box>
        <Box height="auto">
          {" "}
          <Box color="#fff" spacing="40px">
            <Text mb={5} fontSize="20px" fontWeight="bold">More</Text>
            <Stack spacing="15px">
                <Text>Projects</Text>
                <Text>Events</Text>
                <Text>Donation</Text>
                <Text>Blog</Text>
            </Stack>
            
          </Box>
        </Box>
        <Box height="auto">
          <Box color="#fff">
            <Text mb={5} fontSize="20px" fontWeight="bold">Connect</Text>

            <Stack spacing="15px">
                <Text>Facebook</Text>
                <Text>Instagram</Text>
                <Text>Twitter</Text>
                <Text>Linkdin</Text>
            </Stack>
           
          </Box>
        </Box>
        <Flex color="#fff" fontWeight='bold'>
          <Stack spacing={10}>
            <Text fontSize='35px' w={{ base: "390px", md: ""}}>Subscribe to get latest update</Text>
            <InputGroup size="lg" w={{ base: "365px", md: ""}}>
              <Input
                pr="4.5rem"
                // type={show ? 'text' : 'password'}
                placeholder="Your Email"
              />
              <InputRightElement width="auto">
                <Button h="2.85rem" size="sm" color="#000">
                  {/* {show ? 'Hide' : 'Show'} */}
                  Subscribe
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Flex>
        <Box w="10px"/>

      </SimpleGrid>
    </>
  );
}
