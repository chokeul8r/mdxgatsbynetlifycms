import React from "react"
import { ThankYouPageTemplate } from "../../page-templates/thank-you-page.template"
import { CatchError } from "../../core"

export const ThankYouPagePreview = ({ entry }) => (
    <CatchError>
        <ThankYouPageTemplate {...entry.getIn(["data"]).toJS()} isPreview={true} />
    </CatchError>
)
