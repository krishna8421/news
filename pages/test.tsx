import type { NextPage } from "next";
import { withAuth } from "@lib/hooks/withAuth";
import HomePageLayout from "@layouts/HomePageLayout";

const Test: NextPage = () => {
  return <HomePageLayout>Test</HomePageLayout>;
};
export default withAuth(Test);
