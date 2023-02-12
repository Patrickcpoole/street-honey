import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import NavDrawer from './NavDrawer'

const Layout = ({children}) => {
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
        <Footer />
      </footer>
    </div>
  )
}

export default Layout