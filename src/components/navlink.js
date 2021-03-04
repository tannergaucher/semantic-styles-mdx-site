import React from "react"
import { Link } from "gatsby"

const Navlink = ({ text, to, location }) => (
  <Link data-is-active={location.pathname === to} to={to} className="nav-link">
    <h4 style={{ margin: `0` }}>{text}</h4>
  </Link>
)

export default Navlink
