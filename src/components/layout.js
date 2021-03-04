import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "semantic-styles"

import { useSiteMetadata } from "../hooks"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()
  return (
    <>
      <header className="header container padding">
        <Link to="/" className="nav-link only-fullscreen-padding">
          <h1 className="title" style={{ marginBlockStart: `var(--space-xl)` }}>
            {title}
          </h1>
        </Link>
      </header>
      <main className="main">{children}</main>
      <footer className="footer container padding">
        <Link to="/" className="nav-link only-fullscreen-padding">
          <h2 className="title">{title}</h2>
        </Link>
      </footer>
    </>
  )
}

export default Layout
