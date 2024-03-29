import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { SITE_DESCRIPTION } from "@lib/constants";
import { createGetInitialProps } from "@mantine/next";

const getInitialProps = createGetInitialProps();
export default class Document extends NextDocument {
  static getInitialProps = getInitialProps;
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="description" content={SITE_DESCRIPTION} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
