import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { withAuth } from "@lib/hooks/withAuth";

const Test: NextPage = () => {
  return (
    <Box>
      <h1>Protected Routes</h1>
    </Box>
  );
};
export default withAuth(Test);
