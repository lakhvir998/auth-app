import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import './style.css'
import NavBar from "../navbar"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="container">
        {/* <NavBar siteTitle={data.site.siteMetadata.title}/> */}
        {children}
      </div>)}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout