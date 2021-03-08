import React from "react"

import { Layout, SEO } from "../components"

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="404: Not found" />
    <div className="container padding">
      <h1 className="padding">NOT FOUND</h1>
      <p className="padding">
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
