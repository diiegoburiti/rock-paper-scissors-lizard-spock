import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Koton Game</title>
          <link rel="icon" href="/img/favicon.ico" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
