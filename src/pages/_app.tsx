import React from "react"
import "styles/global.scss"

export default function App({ Component, pageProps }: any) {
    return <Component {...pageProps} />
  }