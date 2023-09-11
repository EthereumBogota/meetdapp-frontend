import React from 'react'
import '@/styles/globals.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Box } from '@chakra-ui/react'

interface LayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Box overflow={"hidden"}>
                <Navbar />
                {children}
                <Footer />
            </Box>
        </>
    )
}

export default Layout