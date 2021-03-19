import React from "react"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"
import nightowl from "prism-react-renderer/themes/nightOwl"

export default function LiveCodeEditor({ code, scope }) {
  return (
    <>
      <LiveProvider code={code} scope={scope} theme={nightowl}>
        <LivePreview
          style={{
            marginTop: `var(--space-md)`,
            marginBottom: `0`,
          }}
        />
        <details
          className="details"
          id="components-details"
          style={{ marginBottom: `0`, boxShadow: `none` }}
        >
          <summary
            className="summary text--sm"
            id="components-summary"
            style={{ paddingLeft: `0`, marginBottom: `0` }}
          >
            Live Code
          </summary>
          <LiveEditor
            style={{
              background: `var(--code-bg)`,
              fontFamily: `var(--mono)`,
              borderRadius: `var(--radius)`,
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
    </>
  )
}
