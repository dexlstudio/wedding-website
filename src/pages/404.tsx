import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import NotFound from '../components/notfound'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <NotFound/>
  )
}

export const Head: HeadFC = () => {
  return (
    <>
    <title>Page Not Found</title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Poiret+One&family=Syncopate&display=swap" rel="stylesheet" />
    <link 
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Syncopate&display=swap" />
    </>  
  )
}
export default NotFoundPage
