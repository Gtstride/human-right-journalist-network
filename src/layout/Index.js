import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar/Index'
import Footer from './Footer/Index';


export default function MainLayout({ children }) {
	return (
		<Box >
			<Navbar />
			<Box pt={'50px'}>
				{children}
			</Box>
			
			<Footer />
		</Box>
	);
}
