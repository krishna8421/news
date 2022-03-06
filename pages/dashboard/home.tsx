import Dashboard from "@layouts/DashBoard";
import { NextPage } from "next";
import State from "@common/DashBoard/Home/Stats";
import { useState, useEffect } from "react";
import Posts from "@common/DashBoard/Home/Posts";
import { greeting } from "@lib/utils/greet";
import { useAuth } from "@lib/context/AuthContext";

const Home: NextPage = () => {
  const [greet, setGreet] = useState("");
  useEffect(() => {
    setGreet(greeting());
  }, []);

  const { user } = useAuth();

  const testData = {
    shortHeading1: "This is the 1st post",
    shortHeading2: "This is the 2nd post",
    shortDescription1:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
    shortDescription2:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
  };

  return (
    <Dashboard>
      <div>
        <h1 className="font-Poppins font-light md:text-3xl text-xl">Good {greet} ,</h1>
        <h1 className="font-Poppins font-light md:text-5xl text-3xl mt-4">
          {user?.displayName as string}
        </h1>
        <h3 className="font-Poppins font-semibold text-xl md:mt-20 mt-12 text-gray-600">Stats</h3>
        <div className="md:mt-12 mt-4 flex flex-wrap">
          <State title="Post Read" value={15} />
          <State title="Likes Given" value={5} />
        </div>
        {/*Only if Author*/}
        <h3 className="font-Poppins font-semibold text-xl md:mt-12 mt-8 text-gray-600">
          Your Posts
        </h3>
        <div className="md:mt-12 mt-4 flex flex-wrap">
          <Posts
            shortHeading={testData.shortHeading1}
            shortDescription={testData.shortDescription1}
          />
          <Posts
            shortHeading={testData.shortHeading1}
            shortDescription={testData.shortDescription2}
          />
        </div>
      </div>
    </Dashboard>
  );
};

export default Home;
