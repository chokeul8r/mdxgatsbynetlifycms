import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

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
          <main>{children}</main>
          <footer className="bg-dark pt-3 pb-3">
                  <div className="container text-white text-center">
              {data.site.siteMetadata.title} © All Rights Reserved{" "}
              {new Date().getFullYear()}
            </div>
          </footer>
        </>
      )
    }}
  />
)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
