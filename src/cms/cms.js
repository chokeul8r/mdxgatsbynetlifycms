import CMS from "netlify-cms-app"

import { HomePagePreview, ThankYouPagePreview } from "./preview-templates"
import { ctaEditorConfig } from "./editor-components"
// import { testimonialEditorConfig } from "./testimonial.editor"
import NetlifyCmsWidgetFontpicker from "netlify-cms-widget-fontpicker"



// Add Previews
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("thank-you", ThankYouPagePreview)

// Extend editor
CMS.registerEditorComponent(ctaEditorConfig)
// CMS.registerEditorComponent(testimonialEditorConfig)
CMS.registerWidget([NetlifyCmsWidgetFontpicker.Widget()])

