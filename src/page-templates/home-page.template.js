import React from "react"
import { Link } from "gatsby"
import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import { safelyGetFrontMatter, withFallback } from "../cms"
import ModalPopUp from "../components/modal"

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
      <Heading tag={1}>{title}</Heading>
      <div style={{ maxWidth: `1500px`, marginBottom: `1.45rem` }}>
        <img src={featuredImage} alt="background" />
      </div>
      <h1>{headline}</h1>
      <h2>{subHeadline}</h2>
      <ModalPopUp />
      {withFallback(sections, []).map((section, i) => {
        return (
          <section key={i}>
            <RenderMarkdown md={section.body} />
          </section>
        )
      })}
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <img src={profileImage} alt="Ryan" />
      </div>
      <Link to="/thank-you/">Go to the Thank You Page</Link>
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
