import React from "react"
import { Link } from "gatsby"
import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import { safelyGetFrontMatter, withFallback } from "../cms"
import ModalPopUp from "../components/modal"
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap"
import styled from "styled-components"

const StyledImage = styled(Image)`
 max-width: 350px;
 height: auto;
`
const StyledJumbotron = styled(Jumbotron)`
  height: 94vh;
  width: 100vw;
`

export const HomePageTemplate = ({
  title,
  sections,
  featuredImage,
  headline,
  subHeadline,
  profileImage,
}) => {
  return (
    <>
      <SEO title={title} />
      {/* <div style={{ maxWidth: `1500px`, marginBottom: `1.45rem` }}>
      <img src={featuredImage} alt="background" />
    </div> */}
      <StyledJumbotron className="bg-secondary m-0 bg-primary">
        <Container className="mt-5 mb-4 ">
          <Row>
            <Col sm={12} lg={6} className="px-1">
              <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <StyledImage
                  src={profileImage}
                  alt="placeholder"
                  roundedCircle
                />
              </div>
            </Col>
            <Col sm={12} lg={6} className="px-1">
              <Heading tag={1}>{headline}</Heading>
              <Heading tag={4}>{subHeadline}</Heading>
              {withFallback(sections, []).map((section, i) => {
                return (
                  <section className="text-light" key={i}>
                    <RenderMarkdown md={section.body} />
                  </section>
                )
              })}
              <ModalPopUp />
            </Col>
            <Link className="text-white text-right" to="/thank-you/">
              Go to the Thank You Page >>
            </Link>
          </Row>
        </Container>
      </StyledJumbotron>
    </>
  )
}

const HomePage = ({ pageContext }) => {
  return (
    <HomePageTemplate
      {...safelyGetFrontMatter(pageContext)}
      isPreview={false}
    />
  )
}

export default HomePage
