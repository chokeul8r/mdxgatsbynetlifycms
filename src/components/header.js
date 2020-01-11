import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Jumbotron } from "react-bootstrap"

export const Header = ({ siteTitle }) => (
  <Jumbotron fluid>
    <Container>
      <h1>
        <Link style={{ textDecoration: "none", }}  to="/">{siteTitle}</Link>
      </h1>
    </Container>
  </Jumbotron>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
