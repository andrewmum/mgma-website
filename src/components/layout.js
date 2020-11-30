
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from './Footer'
import Navbar from './Navbar'
import "./layout.css"

const Layout = ({ children }) => {
  
  return (
    <>
      <Navbar />
      
        <main>{children}</main>
       <Footer />
       
    
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
