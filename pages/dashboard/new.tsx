import Editor from "@common/NewPost/Editor/Editor";
import Dashboard from "@layouts/DashBoard";
import { NextPage } from "next";
import InputField from "@common/NewPost/InputField";
import { useState } from "react";

const New: NextPage = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  return (
    <Dashboard>
      <div className="md:w-10/12 w-10/12">
        <h3 className="font-Poppins font-semibold text-xl text-gray-600 mb-10">New Post</h3>
        <div className="w-full bg-white rounded-xl md:p-10 p-2 shadow-sm mb-12">
          <InputField label="Heading" inputData={heading} setInputData={setHeading} />
          <InputField label="Description" inputData={description} setInputData={setDescription} />
          <InputField label="Image URL" inputData={imgUrl} setInputData={setImgUrl} />
        </div>
        <h3 className="font-Poppins font-semibold text-xl text-gray-600 mb-10">Content</h3>
        <div className="w-full bg-white rounded-xl md:p-10 p-5 shadow-lg">
          <Editor />
        </div>
        <div className="w-full flex justify-center">
          <button className="bg-emerald-500 p-3 px-10 rounded-lg text-white text-xl font-medium font-Inter mt-10">
            Post
          </button>
        </div>
      </div>
    </Dashboard>
  );
};

export default New;
