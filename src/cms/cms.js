import CMS from "netlify-cms-app"

import { HomePagePreview, ThankYouPagePreview } from "./preview-templates"
import { ctaEditorConfig } from "./editor-components"

// Add Previews
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("thank-you", ThankYouPagePreview)

// Extend editor
CMS.registerEditorComponent(ctaEditorConfig)
