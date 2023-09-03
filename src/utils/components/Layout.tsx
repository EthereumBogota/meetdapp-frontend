import React from 'react'
import '@/styles/globals.css'
import { AppProps } from 'next/app'

interface LayoutProps {
    children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({children}) => {
    return(
        <>
            {children}
        </>
    )
}

export default Layout