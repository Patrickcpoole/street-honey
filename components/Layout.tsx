import React, { ReactNode } from 'react';
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import NavDrawer from './NavDrawer'
import FooterBanner from './FooterBanner'

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Head>
        <title>Street Honey</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        <NavDrawer />
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