import FloatingSideBar from "@common/DashBoard/FloatingSideBar";
import Nav from "@common/DashBoard/Nav";
import { FC } from "react";

const Dashboard: FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-dashboard flex">
      <FloatingSideBar />
      <div className="ml-16 w-full">
        <Nav />
        <div className="w-full pt-32 pl-8 md:pl-32 md:pt-40 pb-10">{children}</div>
      </div>
    </div>
  );
};

export default Dashboard;
