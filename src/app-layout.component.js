import React from "react"
import PropTypes from "prop-types"
import Footer from "./components/footer"
import "../static/css/wickedcss.min.css"

// Global application wrapper
export const AppLayout = ({ children }) => (
  <main className="h-100">
    {children}
    <Footer />
  </main>
)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
