import React from 'react'
import Head from 'next/head'
import { func, object } from 'prop-types'

function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>SBT News - A sua fonte de informação</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

App.propTypes = {
  Component: func,
  pageProps: object
}

export default App
