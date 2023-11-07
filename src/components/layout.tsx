import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import { Link } from 'gatsby'
import Schedule from './schedule'
import Header from './header'
import Footer from './footer'
// import React, { useState, useEffect } from 'react'

import {
  Main,
  BackgroundImage,
  NavigationItem,
  SaveTheDate,
  HotelRoomSnippet,
  Date,
  AddressLabel,
  Address,
  UpperContent
} from './styled'

const Layout = () => {
  const [bgopacity, setBgOpacity] = React.useState(1);
  window.addEventListener('scroll', (e) => {
      // console.log("SDF:LKJDSF" + window.scrollY)
      const x = window.scrollY;
      const a = 541;
      if (x < a) {
        const t = x/a - 1
        setBgOpacity(t*t)
      } else {
        setBgOpacity(0)
      }
    }
  )
  return (
    
    <Main >
      <BackgroundImage $imageOpacity={bgopacity}>
      </BackgroundImage>
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
          <Date
            target="_blank" 
            rel="noopener" 
            href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M2ZqZnVsdjlwdDJsZ3RzdXRwZGZscHJicWIgZGlhbi54aWFuZzFAbQ&tmsrc=dian.xiang1%40gmail.com">
            JUNE 1st 2024
          </Date>
          <AddressLabel
            href="https://www.wickinn.com/">Wickaninnish Inn</AddressLabel>
          <Address
            href="https://maps.app.goo.gl/3DMo5MGEchAzKUyb9">
            500 Osprey Lane      
          </Address>
          <Address
            href="https://maps.app.goo.gl/3DMo5MGEchAzKUyb9">
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