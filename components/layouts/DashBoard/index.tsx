import FloatingSideBar from "@common/DashBoard/FloatingSideBar";
import { FC } from "react";

const Dashboard: FC = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <FloatingSideBar />
      <div className="ml-16 mt-16 w-full">
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
