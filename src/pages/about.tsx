import * as React from 'react'
import type { HeadFC, PageProps } from "gatsby"
import Layout from '../components/layout'

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      </Layout>
    </main>
  )
}

export const Head: HeadFC = () => <title>About Me</title>

export default AboutPage