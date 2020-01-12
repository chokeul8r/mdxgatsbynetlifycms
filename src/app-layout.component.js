import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { Header } from "./components"

// Global application wrapper
export const AppLayout = ({ children, pageContext }) => (
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
    render={data => {
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="container">
            <main>{children}</main>
            <footer>© {new Date().getFullYear()}</footer>
          </div>
        </>
      )
    }}
  />
)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
