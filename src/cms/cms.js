import CMS from "netlify-cms-app"

import { HomePagePreview, ThankYouPagePreview } from "./preview-templates"
import { ctaEditorConfig } from "./editor-components"

// Not reliably loaded by registerPreviewStyle, so import directly
import "../app.css"

// Add Previews 
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("thank-you", ThankYouPagePreview)

// Extend editor
CMS.registerEditorComponent(ctaEditorConfig)
