import CMS from "netlify-cms-app"

import { HomePagePreview, ThankYouPagePreview } from "./preview-templates"
import { ctaEditorConfig } from "./editor-components"
// import NetlifyCmsWidgetFontpicker from "netlify-cms-widget-fontpicker"
// import * as ColorWidget from "netlify-cms-widget-color"
// import * as FontawesomeWidget from "netlify-cms-widget-fontawesome"

// Add Previews
CMS.registerPreviewTemplate("home", HomePagePreview)
CMS.registerPreviewTemplate("thank-you", ThankYouPagePreview)

// Extend editor
CMS.registerEditorComponent(ctaEditorConfig)
// CMS.registerWidget([NetlifyCmsWidgetFontpicker.Widget()])
// CMS.registerWidget("color", ColorWidget.Control)
// CMS.registerWidget(
//   "fontawesome",
//   FontawesomeWidget.Solid,
//   FontawesomeWidget.Preview
// )
