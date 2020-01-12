import React from "react"

import HomePage from "./home-page.template"
import ThankYouPage from "./thank-you-page.template"
import { AppLayout } from "../app-layout.component"
import { safelyGetFrontMatter } from "../cms"

// Extend this template map to allow your users to choose a page layout from the CMS
// If you're only looking for how to specify a different template per content folder, see:
// https://www.gatsbyjs.org/packages/gatsby-mdx/#installation
const componentTemplateMap = {
  "home-page": HomePage,
  "thank-you-page": ThankYouPage,
}

const CMSTemplate = props => {
  const { pageContext } = props
  const { templateKey } = safelyGetFrontMatter(pageContext)
  const Page = componentTemplateMap[templateKey]
  return (
    <AppLayout>
      {Page ? <Page {...props} /> : <ThankYouPage {...props} />}
    </AppLayout>
  )
}

export default CMSTemplate
