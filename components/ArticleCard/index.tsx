import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import LinkShare from "@components/LinkShare";

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
      className="homeArticlesCard bg-primary-background-700 rounded-xl relative"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.75) calc(0.3vh + 0.3vw) calc(0.3vh + 0.3vw) calc(0.2vh + 0.2vw) 0px",
      }}
    >
      <div className="bg-gradient-to-r from-primary-red to-primary-dark-red rounded-bl-xl rounded-tr-xl absolute z-10 right-0 flex justify-center items-center">
        <div className="bg-gray-800 font-Righteous text-[calc(1.3vw+1.3vh)] sm:text-[calc(0.6vw+0.6vh)] text-white rounded-bl-xl rounded-tr-xl z-10 right-0 flex justify-center items-center px-4 m-[1px] py-1">
          {mockData.category1}
        </div>
      </div>
      <div className="homeArticleMainImg">
        <Image
          src={mockData.mainImg}
          alt="Article Card"
          layout="fill"
          // width={256}
          // height={184}
          className="h-64 w-64 rounded-xl"
        />
      </div>
      <div className="relative">
        <div className="absolute z-10 -bottom-12 sm:-bottom-7 right-4 sm:right-2 m-2">
          <div className="relative">
            <div className="absolute bottom-0 -right-1 z-20 flex justify-center items-center">
              <div className="absolute h-2 w-2 bg-white rounded-full" />
              <MdVerified className="z-30" color="#42A5F5" />
            </div>
            <div className="homeArticleProImg">
              <Image
                src={mockData.authorProfile}
                alt="Article Card"
                layout="fill"
                className="rounded-xl border"
              />
            </div>
            <div className="absolute text-[9px] text=[#EEEBDC] w-full h-10 text-right px-1">
              {mockData.authorName}
            </div>
          </div>
        </div>
      </div>
      <div className="homeArticleTitle overflow-scroll no-scrollbar text-white pb-0">
        {mockData.title}
      </div>
      <div className="homeArticleDesc overflow-scroll no-scrollbar">{mockData.discription}</div>
      <div className="text-[calc(1vw+1vh)] sm:text-[calc(.45vw+.45vh)] w-full px-7 sm:px-3 flex justify-between">
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
          <AiFillEye style={{ opacity: ".5", marginLeft: "0vh" }} size={12} className="mx-1" />
          {mockData.views} views
          <BiTime style={{ opacity: ".5", marginLeft: "2vh" }} size={12} className="mx-1" />
          {mockData.time}
        </div>
      </div>
      <div className={"w-full mt-5 sm:mt-2.5 px-7 sm:px-3 flex justify-between items-center"}>
        <LinkShare liked />
        <div
          style={{
            fontFamily: "Righteous",
            fontWeight: "400",
            color: "#fff",
          }}
          className="flex items-center text-[calc(1.3vw+1.3vh)] sm:text-[calc(0.6vw+0.6vh)]"
        >
          <HiOutlineLocationMarker size={15} />
          <span style={{ paddingLeft: ".5vw" }}>{mockData.location}</span>
        </div>
      </div>
    </div>
  );
}
