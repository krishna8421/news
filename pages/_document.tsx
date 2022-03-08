import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { theme } from "@lib/styles/themes";
import { ColorModeScript } from "@chakra-ui/react";
import { SITE_DESCRIPTION } from "@lib/constants";

export default class Document extends NextDocument {
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
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
