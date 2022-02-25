import Dashboard from "@layouts/DashBoard";
import { NextPage } from "next";
import Image from "next/image";
import Avatar from "react-avatar";

const Settings: NextPage = () => {
  const testData = {
    name: "Krishna Kumar",
    email: "krishna@gmail.com",
    pic: true,
    picLink: "https://avatars.githubusercontent.com/u/93767454?s=200&v=4",
  };
  return (
    <Dashboard>
      <div>
        <h3 className="font-Poppins font-semibold text-xl text-gray-600 mb-8">Settigns</h3>
        <div className="flex items-center flex-col justify-center md:mr-20 mr-4">
          {testData.pic ? (
            <Image
              src={testData.picLink}
              width={200}
              height={200}
              alt="User Avatar"
              className="rounded-full"
            />
          ) : (
            <Avatar size="40" name={"krishna kumar"} round={true} />
          )
          }
          <div className=" mt-16">
            <div className="flex mb-8 flex-wrap">
              <h3 className="font-Poppins font-medium md:text-xl text-md text-gray-900 md:mr-8 mr-4">Name:</h3>
              <h3 className="font-Poppins font-medium md:text-xl text-md text-gray-900">{testData.name}</h3>
            </  div>
            <div className="flex mb-8 flex-wrap">
              <h3 className="font-Poppins font-medium md:text-xl text-md text-gray-900  md:mr-8 mr-4">Email:</h3>
              <h3 className="font-Poppins font-medium md:text-xl text-md text-gray-900">{testData.email}</h3>
            </  div>
          </div>
          <button className="bg-[#FA6364] px-7 py-3 rounded text-white mt-16 font-semibold">Log Out</button>
        </div>
      </div>
    </Dashboard>
  );
};

export default Settings;
