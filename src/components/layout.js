import React from "react"
import { Link } from "gatsby"

import "semantic-styles"
import "../index.css"

import { useSiteMetadata } from "../hooks"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <>
      <header className="header container padding">
        <Link to="/" className="nav-link">
          <h1 className="title" style={{ marginBlockStart: `var(--space-xl)` }}>
            {title}
          </h1>
        </Link>
      </header>
      <main className="main">{children}</main>
      <footer className="footer container padding">
        <Link to="/" className="nav-link">
          <h2 className="title" style={{ marginBlockEnd: `var(--space-xl)` }}>
            {title}
          </h2>
        </Link>
      </footer>
    </>
  )
}

export default Layout
