import React from "react"
// import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';
import "../../node_modules/bootstrap/dist/css/bootstrap.css"


import Image from '../components/image'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import Purpose from '../components/Purpose'
import Meeting from '../components/Meeting'

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
