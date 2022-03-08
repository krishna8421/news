import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { SITE_NAME } from "@lib/constants";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <Box>
        <h1>Hello</h1>
      </Box>
    </Box>
  );
};
export default Home;
