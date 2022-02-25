import Editor from "@common/editor/Editor";
import Dashboard from "@layouts/DashBoard";
import { NextPage } from "next";

const New: NextPage = () => {
  return (
    <Dashboard>
      <div>
        New
        <Editor />
      </div>
    </Dashboard>
  );
};

export default New;
