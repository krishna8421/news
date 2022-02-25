import FloatingSideBar from "@common/DashBoard/FloatingSideBar";
import Nav from "@common/DashBoard/Nav";
import { FC } from "react";

const Dashboard: FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-dashboard flex">
      <FloatingSideBar />
      <div className="ml-16 w-full">
        <Nav/>
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
