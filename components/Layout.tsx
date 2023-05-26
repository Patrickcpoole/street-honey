import React, { ReactNode } from 'react';
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import NavDrawer from './NavDrawer'
import CartDrawer from './CartDrawer';
import FooterBanner from './FooterBanner'

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout bg-offWhite">
      <Head>
        <title>Street Honey</title>
      </Head>
      <header className='relative h-20'>
        
        <Navbar />
       
      </header>
      <main className="main-container">
        <NavDrawer />
        <CartDrawer />
        {children}
      </main>
      <footer>
      <FooterBanner></FooterBanner>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout