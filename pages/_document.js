/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable react/no-unknown-property */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Github Search</title>

        <meta
          name="description"
          content="Application that uses the Github API for searching users and repositories and showing the results in a nice way."
        />
        <meta name="keywords" content="Search github repos and users, test" />
        <meta name="author" content="kevin Gutierrez" />
        <link rel="icon" type="image/png" href="/github.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
