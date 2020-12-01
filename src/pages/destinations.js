import React from "react"


import Layout from "../components/layout"
import Speaker from '../components/Speaker'
import SEO from "../components/seo"
import "../../src/components/layout.css"

const Destinations = () => (
  <Layout>
    <SEO title="speaker" />
    <Speaker />
  </Layout>
)

export default Destinations
