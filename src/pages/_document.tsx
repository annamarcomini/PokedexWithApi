import Document, { Html, Head, Main, NextScript } from  "next/document" 


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"
          />
          <link rel="icon" href="/favicon.svg"/>
 
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
