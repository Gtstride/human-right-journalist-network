import React from "react";
import {
  Box,
  Flex,
  Stack,
  SimpleGrid,
  Text,
  VStack,
  HStack,
  Image,
  Button,
  Divider,
} from "@chakra-ui/react";
import headerImage from "../../assets/header_bg.png";
import HeaderSlider from "../Slider/HeaderSlider";
import { HeaderSliderData } from "../Slider/HeaderSliderData";
import { BiPlayCircle } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";

const Index = () => {
  return (
    <Box>
      <Box w="100%" position={'absolute'}>
        <HeaderSlider slides={HeaderSliderData} />
      </Box>

      <Box pt={"100px"} pl={'50px'}>
              <Text position={'relative'} fontSize={"45px"} color="#fff">Save the environnment <br/> today for a better <br/> tomorrow</Text>
              <Button>Button Here</Button>
              <Button>Button Here</Button>
              <Text>What we do</Text>
      {/* <Box color={'black.500'}>
        
        <Button>Button Here</Button>
        <Text>Text COmes Here</Text>
      </Box> */}
      </Box>
      

    </Box>
  );
};

export default Index;