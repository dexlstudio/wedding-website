import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import { Link } from 'gatsby'
import Schedule from './schedule'
import Header from './header'
import Footer from './footer'
// import React, { useState, useEffect } from 'react'

import {
  Main,
  NavigationItem,
  SaveTheDate,
  HotelRoomSnippet,
  Date,
  AddressLabel,
  Address,
  UpperContent
} from './styled'

const Layout = () => {
  window.addEventListener('scroll', () => console.log("SDF:LKJDSF"))  
  return (
    <Main>
      <Header/>
      {/* <nav>
        <ul className={navLinks}>
          <NavigationItem>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </NavigationItem>
        </ul>
      </nav> */}
        <UpperContent>
        <SaveTheDate>SAVE THE DATE</SaveTheDate>
        <Date>JUNE 1st 2024</Date>
        <AddressLabel
          href="https://www.wickinn.com/">Wickaninnish Inn</AddressLabel>
        <Address
          href="https://maps.app.goo.gl/3DMo5MGEchAzKUyb9">
          500 Osprey Lane <br/>
          Tofino, BC VoR 2Zo
        </Address>
        <HotelRoomSnippet>
          Your hotel rooms have been paid for as part of our gift to you. If you wish to stay at a different hotel or would like to request a specific room type, please let us know.
        </HotelRoomSnippet>
        </UpperContent>
        <Schedule/>
      <Footer/>
    </Main>
  )
}

export default Layout