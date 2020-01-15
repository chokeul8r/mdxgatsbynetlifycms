import React from "react"

export const Heading = ({ tag, children }) => {
  const Htag = `h${tag}`
  return <Htag style={{ color: "#222" }}>{children}</Htag>
}

export default Heading
