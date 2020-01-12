import React from "react"
import { Link } from "gatsby"
import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import { safelyGetFrontMatter, withFallback } from "../cms"

export const ThankYouPageTemplate = ({
  title,
  headline,
  profileImage,
  sections,
}) => (
  <>
    <SEO title={title} />
    <Heading tag={1}>{title}</Heading>
    <h1>{headline}</h1>
      {withFallback(sections, []).map((section, i) => {
        return (
          <section key={i}>
            <RenderMarkdown md={section.body} />
          </section>
        )
      })}
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img src={profileImage} alt="Thank You" />
    </div>
    <Link to="/">Go back to the homepage...</Link>
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
