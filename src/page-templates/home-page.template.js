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

export const HomePageTemplate = ({
  title,
  sections,
  backgroundImage,
  headline,
  subHeadline,
  profileImage,
}) => {
  return (
    <>
      <SEO title={title} />
      {/* <div style={{ maxWidth: `1500px`, marginBottom: `1.45rem` }}>
      <img src={backgroundImage} alt="background" />
    </div> */}
      <Jumbotron fluid>
        <Container className="my-3 py-2">
          <Row className="my-5 py-5 px-3">
            <Col sm={12} lg={6} className="px-3 py-3 slideRight">
              <div className="d-flex justify-content-center justify-content-lg-start">
                <StyledImage 
                  src={profileImage}
                  alt="placeholder"
                  roundedCircle
                />
              </div>
            </Col>
            <Col sm={12} lg={6} className="px-4 py-3 slideLeft">
              <div className="text-center text-lg-left">
                <Heading tag={1}>{headline}</Heading>
              </div>
              <div className="text-center text-lg-left">
                <Heading tag={4}>{subHeadline}</Heading>
              </div>
              {withFallback(sections, []).map((section, i) => {
                return (
                  <section className="text-secondary mt-5 mb-5" key={i}>
                    <RenderMarkdown md={section.body} />
                  </section>
                )
              })}
              <ModalPopUp />
            </Col>
            <Link className="text-dark ml-5 pl-3" to="/thank-you/">
              Go to the Thank You Page >>
            </Link>
          </Row>
        </Container>
      </Jumbotron>
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
