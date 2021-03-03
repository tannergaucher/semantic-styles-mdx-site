import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"

import { Card, Image, P } from "./src/components"

const scope = {
  Image,
  P,
  Link,
  Card,
}

const components = {
  pre: props =>
    props.children.props.live ? (
      <div>
        <details className="details" id="components-details">
          <summary className="summary" id="components-summary">
            {props.children.props.metastring
              .split("title=")[1]
              .replace(/['"]+/g, "")}
          </summary>
          <LiveProvider
            code={props.children.props.children}
            scope={scope}
            tabIndex="-1"
          >
            <LivePreview
              style={{
                marginTop: `var(--space-md)`,
                marginBottom: `0`,
              }}
            />
            <details
              className="details"
              id="components-details"
              style={{ marginBottom: `0` }}
              open
            >
              <summary
                className="summary text--md"
                id="components-summary"
                style={{ paddingLeft: `0`, marginBottom: `0` }}
              >
                Live Source Code
              </summary>
              <LiveEditor
                style={{
                  background: `var(--code-bg)`,
                  fontFamily: `var(--mono)`,
                  borderRadius: `var(--radius)`,
                  boxShadow: `var(--elevation-2)`,
                }}
              />
              <LiveError
                style={{
                  fontSize: `var(--text-xs)`,
                  borderRadius: `var(--radius)`,
                  margin: `var(--space-lg) 0`,
                  boxShadow: `var(--elevation-3)`,
                  color: `tomato`,
                  background: `var(--code-bg)`,
                  padding: `var(--space-sm)`,
                }}
              />
            </details>
          </LiveProvider>
        </details>
      </div>
    ) : (
      <>
        <Highlight
          {...defaultProps}
          code={props.children.props.children}
          language={props.children.props.className.replace(/language-/, "")}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </>
    ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
