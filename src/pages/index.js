import React from "react"
// import { Link } from "gatsby"
// import scrollTo from 'gatsby-plugin-smoothscroll';
import HeroSection from "../components/HeroSection"
import Image from '../components/image'
import Layout from "../components/layout"
import Meeting from '../components/Meeting'
import SEO from "../components/seo"
import Purpose from '../components/Purpose'

import "../../node_modules/bootstrap/dist/css/bootstrap.css"


const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Purpose />
    <Meeting />
    <Image />
  </Layout>
)

export default IndexPage
