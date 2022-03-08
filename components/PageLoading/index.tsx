import { Flex } from "@chakra-ui/react";
import ReactLoading from "react-loading";

export default function PageLoading() {
  return (
    <Flex className="h-screen flex justify-center items-center">
      <ReactLoading type="balls" color="#fff" />
    </Flex>
  );
}
