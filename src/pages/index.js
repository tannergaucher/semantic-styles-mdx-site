import React from "react"

import { useSiteMetadata } from "../hooks"
import { Layout, SEO, Image } from "../components"

import {
  Color,
  Button,
  Card,
  Fieldset,
  Figure,
  Navlink,
  SummaryDetails,
  Textarea,
  App,
  ContentAsideGrid,
  AsideContentGrid,
  ContentGrid,
  ImageGrid,
  Spacing,
  Typography,
} from "../examples"

export default ({ location }) => {
  const { description, subHeading } = useSiteMetadata()
  return (
    <Layout location={location}>
      <article className="page" style={{ marginTop: `var(--space-md)` }}>
        <SEO title={`${description}`} />
        <div className="container">
          <div className="content padding">
            <br />
            <div className="card">
              <Image />
              <h2 className="card-heading">{description}</h2>
              <br />
              <p className="card-text">{subHeading}</p>
            </div>
            <br className="br" />
            <>
              <hr className="hr" />
              <Typography />
              <Color />
              <Spacing />
              <hr className="hr" />
              <Button />
              <Card />
              <Fieldset />
              <Figure />
              <Navlink />
              <SummaryDetails />
              <Textarea />
              <hr className="hr" />
              <App />
              <ContentGrid />
              <AsideContentGrid />
              <ContentAsideGrid />
              <ImageGrid />
              <hr className="hr" />
            </>
          </div>
        </div>
      </article>
    </Layout>
  )
}
