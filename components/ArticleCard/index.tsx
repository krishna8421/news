import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function ArticleCard() {
  const mockData = {
    category1: "Community",
    category2: "Entertainment",
    mainImg: "https://source.unsplash.com/1200x900/?news",
    authorProfile: "https://source.unsplash.com/100x100/?man",
    authorName: "Abhinandan Agarwal",
    verified: true,
    location: "Bhubaneswar",
    // title max length 60
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sem magna ",
    views: 2000,
    time: "2 days",
    isLiked: true,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sem magna lectus auctor sed nulla ultrices. Bibendum netus magna.",
  };
  return (
    <div
      style={{ width: "19vw", paddingBottom: "2.5vh" }}
      className="bg-primary-background-700 rounded-xl relative shadow-2xl"
    >
      <div className="bg-gradient-to-r from-primary-red to-primary-dark-red rounded-bl-xl rounded-tr-xl absolute z-10 right-0 flex justify-center items-center">
        <div className="bg-gray-800 font-Righteous text-sm text-white rounded-bl-xl rounded-tr-xl z-10 right-0 flex justify-center items-center px-4 m-[1px] py-1">
          {mockData.category1}
        </div>
      </div>
      <Image
        src={mockData.mainImg}
        alt="Article Card"
        width={256}
        height={184}
        className="h-64 w-64 rounded-xl"
      />
      <div className="relative">
        <div className="absolute z-10 -bottom-9 right-2 m-2">
          <div className="relative">
            <div className="absolute bottom-0 -right-1 z-20 flex justify-center items-center">
              <div className="absolute h-2 w-2 bg-white rounded-full" />
              <MdVerified className="z-30" color="#42A5F5" />
            </div>
            <Image
              src={mockData.authorProfile}
              alt="Article Card"
              width={56}
              height={56}
              className="rounded-xl border"
            />
            <div className="absolute text-[9px] text=[#EEEBDC] w-full h-10 text-right px-1">
              {mockData.authorName}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          fontWeight: "700",
          fontSize: "calc(.6vw + .6vh)",
          width: "11vw",
          paddingLeft: ".9vw",
          paddingBottom: "1vh",
        }}
        className="overflow-scroll no-scrollbar text-white pb-0"
      >
        {mockData.title}
      </div>
      <div
        style={{
          fontWeight: "600",
          fontSize: "calc(.51vw + .51vh)",
          opacity: "0.6",
          color: "#fff",
          padding: "0px 1vw 1vh",
        }}
        className="overflow-scroll no-scrollbar"
      >
        {mockData.discription}
      </div>
      <div className="text-[9px] w-full px-3 flex justify-between">
        <div
          style={{ color: "#fff" }}
          className=" rounded-full shadow shadow-black bg-primary-background-700  mt-1 p-[3px] px-[10px]"
        >
          {mockData.category2}
        </div>
        <div
          style={{ color: "#fff" }}
          className=" rounded-full shadow shadow-black bg-primary-background-700 mt-1 p-[3px] px-[10px] flex justify-center items-center"
        >
          <AiFillEye style={{ opacity: ".5" }} size={12} className="mx-1" />
          {mockData.views} views
          <BiTime style={{ opacity: ".5" }} size={12} className="mx-1" />
          {mockData.time}
        </div>
      </div>
      <div className={"w-full mt-2.5 px-3 flex justify-between items-center"}>
        {/*
          TODO
            Add drop shadow for like and share box
        */}
        <div
          style={{
            boxShadow:
              "calc(0.3vw + 0.3vh) calc(0.3vw + 0.3vh) calc(0.2vw + 0.2vh) 0px rgba(0,0,0,0.75)",
          }}
          className="bg-primary-background-500 rounded-full h-6 w-24 flex justify-around items-center"
        >
          {mockData.isLiked ? (
            <AiFillHeart color="#E3323B" size={15} className="flex-1" />
          ) : (
            <AiOutlineHeart size={15} className="flex-1" />
          )}
          <span style={{ color: "#fff", marginTop: "-.4vh" }} className="text-gray-400 flex-none">
            |
          </span>
          <AiOutlineShareAlt style={{ color: "#fff" }} className="flex-1" />
        </div>
        <div
          style={{
            fontFamily: "Righteous",
            fontWeight: "400",
            color: "#fff",
            fontSize: "calc(0.6vw + 0.6vh)",
          }}
          className="flex items-center"
        >
          <HiOutlineLocationMarker size={15} />
          <span style={{ paddingLeft: ".5vw" }}>{mockData.location}</span>
        </div>
      </div>
    </div>
  );
}
