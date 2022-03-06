import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>
      <Box>
        <h1>Hello Next.js</h1>
      </Box>
    </Box>
  );
};
export default Home;
