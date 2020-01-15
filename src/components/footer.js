import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Footer = ({ pageContext }) => (
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
          <footer className="fixed-bottom bg-primary pt-3 pb-3">
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

export default Footer
