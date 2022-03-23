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
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam",
    views: 2000,
    time: "2 days",
    isLiked: true,
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sem magna lectus auctor sed nulla ultrices. Bibendum netus magna.",
  };
  return (
    /**
     * TODO
     *  Change the width to variable using grid?
     *  Create small components for the every thing here
     */
    <div className="bg-primary-background-700 h-96 w-64 rounded-xl relative shadow-2xl">
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
      <div className="w-2/3 h-20 tracking-tight overflow-scroll no-scrollbar text-white text-sm font-semibold  p-2 pl-3 pb-0">
        {mockData.title}
      </div>
      <div className="w-full h-12 tracking-tight overflow-scroll no-scrollbar text-xs font-light text-white/60  pl-3">
        {mockData.discription}
      </div>
      <div className="text-[9px] w-full px-3 flex justify-around">
        <div className=" rounded-full shadow shadow-black bg-primary-background-700  mt-1 p-[3px] px-[10px]">
          {mockData.category2}
        </div>
        <div className=" rounded-full shadow shadow-black bg-primary-background-700 mt-1 p-[3px] px-[10px] flex justify-center items-center">
          <AiFillEye size={12} className="mx-1" />
          {mockData.views} views
          <BiTime size={12} className="mx-1" />
          {mockData.time}
        </div>
      </div>
      <div className={"w-full mt-2.5 px-3 flex justify-between items-center"}>
        {/*
          TODO
            Add drop shadow for like and share box
        */}
        <div className="bg-primary-background-500 rounded-full h-6 w-24 flex justify-around items-center">
          {mockData.isLiked ? (
            <AiFillHeart color="#E3323B" size={15} className="flex-1" />
          ) : (
            <AiOutlineHeart size={15} className="flex-1" />
          )}
          <span className="text-gray-400 flex-none">|</span>
          <AiOutlineShareAlt className="flex-1" />
        </div>
        <div className="flex text-[9px] font-semibold items-center">
          <HiOutlineLocationMarker size={15} />
          <span className="ml-2">{mockData.location}</span>
        </div>
      </div>
    </div>
  );
}
