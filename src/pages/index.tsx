import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import "./index.css";

import Layout from '../components/layout'



export const App = () => {
  return (
    <Layout/>
  )
}

export const Head: HeadFC = () => {
  return (
    <>
    <title>Home Page</title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poiret+One&family=Syncopate&display=swap" rel="stylesheet" />
    <link 
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Syncopate&display=swap" />

    </>
    
  )
}
  

export default App