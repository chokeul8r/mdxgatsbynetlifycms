import React from "react"

import { Heading, SEO } from "../components"
import { RenderMarkdown } from "../core"
import Layout from "../app-layout.component"
import {
    safelyGetFrontMatter,
    withFallback,
} from "../cms"

export const ThankYouPageTemplate = ({title, sections}) => (
    <Layout>
        <SEO title={title} />
        <Heading tag={1}>{title}</Heading>
        {withFallback(sections, []).map((section, i) => {
            return (
                <section key={i}>
                    <h2>{section.title}</h2>
                    <RenderMarkdown
                        md={section.body}
                    />
                    <hr />
                </section>
            )
        })}
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
