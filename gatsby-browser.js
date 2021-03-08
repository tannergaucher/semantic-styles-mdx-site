import React, { Suspense } from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"

import { Card, Image, P } from "./src/components"

const LiveCodeEditor = React.lazy(() =>
  import("./src/components/live-code-editor.js")
)

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
          <Suspense fallback={<>Loading...</>}>
            <LiveCodeEditor
              code={props.children.props.children}
              scope={scope}
            />
          </Suspense>
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
