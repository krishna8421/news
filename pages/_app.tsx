import { AppProps } from "next/app";
import "@lib/styles/global.css";
import { AuthProvider } from "@lib/context/AuthContext";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { theme } from "@lib/styles/themes";

const progress = new ProgressBar({
  size: 2,
  color: "#E50914",
  className: "bar-of-progress",
  delay: 100,
});

if (typeof window !== "undefined") {
  progress.start();
  progress.finish();
}

Router.events.on("routeChangeStart", () => progress.start());
Router.events.on("routeChangeComplete", () => progress.finish());
Router.events.on("routeChangeError", () => progress.finish());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
}

export default MyApp;
