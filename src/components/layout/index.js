import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
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
      <>
        <NavBar siteTitle={data.site.siteMetadata.title}/>
        {children}
      </>)}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout