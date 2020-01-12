import React from "react"
import { Link } from "gatsby"
import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import Layout from "../app-layout.component"
import { safelyGetFrontMatter } from "../cms"

export const HomePageTemplate = ({
  title,
  featuredImage,
  headline,
  subHeadline,
  introduction,
  callToAction,
  profileImage,
  body,
}) => (
  <Layout>
    <SEO title={title} />
    <Heading tag={1}>{title}</Heading>
    <div style={{ maxWidth: `1500px`, marginBottom: `1.45rem` }}>
      <img src={featuredImage} alt="background" />
    </div>
    <h1>{headline}</h1>
    <h2>{subHeadline}</h2>
    <p>{introduction}</p>
    <RenderMarkdown md={ body } />
    <div>
      <button>{callToAction}</button>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={profileImage} alt="Ryan" />
    </div>
    <Link to="/thank-you/">Go to the Thank You Page</Link>
  </Layout>
)

const HomePage = ({ pageContext }) => {
  return (
    <HomePageTemplate
      {...safelyGetFrontMatter(pageContext)}
      isPreview={false}
    />
  )
}

export default HomePage
