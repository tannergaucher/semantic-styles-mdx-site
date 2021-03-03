import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "semantic-styles"

import { Navlinks } from "."
import { useSiteMetadata } from "../hooks"

const Layout = ({ location, children }) => {
  const { title } = useSiteMetadata()
  return (
    <>
      {/* TODO App pattern */}
      <header className="header padding">
        <Link to="/" className="nav-link">
          <h1 className="title" style={{ marginBlockStart: `var(--space-md)` }}>
            {title}
          </h1>
        </Link>
        <Navlinks location={location} />
      </header>
      <main className="main">{children}</main>
      <footer className="footer padding">
        <Link to="/" className="nav-link">
          <h2 className="title" style={{ marginBlockEnd: `var(--space-md)` }}>
            {title}
          </h2>
        </Link>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
