import React from "react"
import { Link } from "gatsby"
import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import { safelyGetFrontMatter, withFallback } from "../cms"
import ModalPopUp from "../components/modal"
import { Container, Row, Col } from "react-bootstrap"

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
      <Container className="mt-5 mb-5 pt-5 pb-3">
        <Row>
          <Col sm={12} lg={6} className="px-1">
            {/* <div style={{ maxWidth: `1500px`, marginBottom: `1.45rem` }}>
              <img src={featuredImage} alt="background" />
            </div> */}
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <img src={profileImage} alt="Ryan" />
            </div>
          </Col>
          <Col sm={12} lg={6} className="px-1">
            <Heading tag={1}>{headline}</Heading>
            <Heading tag={4}>{subHeadline}</Heading>
            {withFallback(sections, []).map((section, i) => {
              return (
                <section key={i}>
                  <RenderMarkdown md={section.body} />
                </section>
              )
            })}
            <ModalPopUp />
          </Col>
          <Link to="/thank-you/">Go to the Thank You Page</Link>
        </Row>
      </Container>
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
