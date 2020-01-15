import React from "react"
import { Link } from "gatsby"
import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import { safelyGetFrontMatter, withFallback } from "../cms"
import { Jumbotron, Image, Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const StyledImage = styled(Image)`
  max-width: 350px;
  height: auto;
`

export const ThankYouPageTemplate = ({
  title,
  headline,
  profileImage,
  sections,
}) => (
  <>
    <SEO title={title} />
    <Jumbotron className="bg-primary">
      <div className="d-flex justify-content-center text-white slideRight">
        <h1 className="text-white">{title}</h1>
      </div>
    </Jumbotron>
    <Container className="my-3 py-2">
      <Row className="my-5 py-5 px-3">
        <Col sm={12} lg={6} className="px-3 py-3 slideRight">
          <div className="d-flex justify-content-center justify-content-lg-start">
            <StyledImage src={profileImage} alt="Thank You" roundedCircle />
          </div>
        </Col>
        <Col sm={12} lg={6} className="px-4 py-3 slideLeft">
          <div className="text-center text-lg-left">
            <Heading tag={1}>{headline}</Heading>
          </div>
          {withFallback(sections, []).map((section, i) => {
            return (
              <section className="text-secondary mt-5 mb-5" key={i}>
                <RenderMarkdown md={section.body} />
              </section>
            )
          })}
          <Link to="/">Go back to the homepage...</Link>
        </Col>
      </Row>
    </Container>
  </>
)

const ThankYouPage = ({ pageContext }) => {
  return (
    <ThankYouPageTemplate
      {...safelyGetFrontMatter(pageContext)}
      isPreview={false}
    />
  )
}

export default ThankYouPage
