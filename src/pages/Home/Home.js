import React from 'react'
import MainLayout from '../../layout/Index';
import { Stack, Box, Text, HStack, Button, Divider } from '@chakra-ui/react';
import AdminHeader from '../../layout/Header/AdminHeader';
import { FaHamburger } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi'
import  {BsPlayCircle} from 'react-icons/bs';
import Header from '../../layout/Header/Index';


export default function Home(){
  return (
    <MainLayout >
      <Box >
        <Header/>
      </Box>
      {/* <AdminHeader/> */}
      
      <Stack mt="300px">
        <Box>
          <Text>Home page</Text>
          <GiHamburgerMenu fontSize={'49px'} />
          <Text>Tjhios is askfbalknfalfd as</Text>
        </Box>
      </Stack>
    </MainLayout>
  )
}

