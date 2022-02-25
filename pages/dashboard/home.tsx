import Dashboard from "@layouts/DashBoard";
import { NextPage } from "next";
import State from "@common/DashBoard/Home/Stats";
import { useState, useEffect } from "react";
import Posts from "@common/DashBoard/Home/Posts";


const Home: NextPage = () => {
  const [greetings, setGreetings] = useState("");
  console.log(greetings);
  useEffect(() => {
    (() => {
      const time = new Date().getHours();
      if (time >= 0 && time < 12) {
        setGreetings("Morning");
      } else if (time >= 12 && time < 18) {
        setGreetings("Afternoon");
      } else {
        setGreetings("Evening");
      }
    })();
  }, []);
  const testData = {
    name: "Krishna Kumar",
    shortHeading1: "This is the 1st post",
    shortHeading2: "This is the 2nd post",
    shortDescription1: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
    shortDescription2: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
  };
  return (
    <Dashboard>
      <div className="pt-16 pl-8 md:pl-32 md:pt-20 pb-10">
        <h1 className="font-Poppins font-light md:text-3xl text-xl">Good {greetings} ,</h1>
        <h1 className="font-Poppins font-light md:text-5xl text-3xl mt-4">{testData.name}</h1>
        <h3 className="font-Poppins font-semibold text-xl md:mt-20 mt-12 text-gray-600">Stats</h3>
        <div className="md:mt-12 mt-4 flex flex-wrap">
          <State title="Post Read" value={15} />
          <State title="Likes Given" value={5} />
        </div>
        {/*Only if Author*/}
        <h3 className="font-Poppins font-semibold text-xl md:mt-12 mt-8 text-gray-600">Your Posts</h3>
        <div className="md:mt-12 mt-4 flex flex-wrap">
          <Posts shortHeading={testData.shortHeading1} shortDescription={testData.shortDescription1} />
          <Posts shortHeading={testData.shortHeading1} shortDescription={testData.shortDescription2} />
        </div>
      </div>
    </Dashboard>
  );
};

export default Home;
