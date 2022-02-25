import Dashboard from "@layouts/DashBoard";
import { NextPage } from "next";
import Posts from "@common/DashBoard/Home/Posts";

const Liked: NextPage = () => {
    const testPosts = [
      {
        shortHeading: "This is the 1st post",
        shortDescription: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
      },
      {
        shortHeading: "This is the 2nd post",
        shortDescription: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
      },
      {
        shortHeading: "This is the 3rd post",
        shortDescription: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
      },
      {
        shortHeading: "This is the 4th post",
        shortDescription: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
      },
      {
        shortHeading: "This is the 5th post",
        shortDescription: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
      },
      {
        shortHeading: "This is the 6th post",
        shortDescription: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
      },
      {
        shortHeading: "This is the 7th post",
        shortDescription: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
      },
      {
        shortHeading: "This is the 8th post",
        shortDescription: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
      },
      {
        shortHeading: "This is the 9th post",
        shortDescription: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
      },
      {
        shortHeading: "This is the 10th post",
        shortDescription: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
      },
      {
        shortHeading: "This is the 11th post",
        shortDescription: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat",
      },
    ];
    return (
      <Dashboard>
        <div>
          <h3 className="font-Poppins font-semibold text-xl text-gray-600">Liked Posts</h3>
          <div className="md:mt-12 mt-4 flex flex-wrap">
            {testPosts.map((post, index: number) => (
              <Posts key={index} shortHeading={post.shortHeading} shortDescription={post.shortDescription} />
            ))}
          </div>
        </div>
      </Dashboard>
    );
  }
;

export default Liked;
;
