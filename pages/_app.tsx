import { AppProps } from "next/app";
import "@lib/styles/global.css";
import { AuthProvider } from "@lib/context/AuthContext";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import Head from "next/head";
import { SITE_NAME } from "@lib/constants";
import { MantineProvider } from "@mantine/core";

const progress = new ProgressBar({
  size: 2,
  color: "#E50914",
  className: "progress-bar",
  delay: 100,
});

if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <MantineProvider
        theme={{
          colorScheme: "dark",
          colors: {
            "primary-red": [
              "#DEC8C9",
              "#D3ACAE",
              "#CD9093",
              "#CC7175",
              "#D24E55",
              "#DF2730",
              "#E50914",
              "#BA1C24",
              "#99272D",
              "#802E32",
            ],
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </AuthProvider>
  );
};

export default MyApp;
