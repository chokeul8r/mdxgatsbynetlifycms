import React from "react"
import { Link } from "gatsby"
import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import Layout from "../app-layout.component"
import { safelyGetFrontMatter } from "../cms"

export const ThankYouPageTemplate = ({
  title,
  headline,
  outtro,
  profileImage,
}) => (
  <Layout>
    <SEO title={title} />
    <Heading tag={1}>{title}</Heading>
    <h1>{headline}</h1>
    <RenderMarkdown md={outtro} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={profileImage} alt="Thank You" />
    </div>
    <Link to="/">Go back to the homepage...</Link>
  </Layout>
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
