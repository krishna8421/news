import type { NextPage } from "next";
import HomePageLayout from "@layouts/HomePageLayout";
import Carousel from "@components/Carousel";
import CategoryMenu from "@components/CategoryMenu";
import { CategoryProvider } from "@lib/context/CategoryContext";
import ArticleContainer from "@components/ArticleContainer";
import ArticleCard from "@components/ArticleCard";
import { AiFillEye } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";

const Home: NextPage = () => {
  const imgUrlArr = [
    "https://source.unsplash.com/1200x900/?tv",
    "https://source.unsplash.com/1200x900/?game",
    "https://source.unsplash.com/1200x900/?paper",
    "https://source.unsplash.com/1200x900/?vikings",
    "https://source.unsplash.com/1200x900/?iphone",
    "https://source.unsplash.com/1200x900/?mac",
    "https://source.unsplash.com/1200x900/?russia",
  ];
  return (
    <HomePageLayout>
      <div className="primetime w-full">
        <Carousel imgUrlArr={imgUrlArr} />
        <div className="primetimeContent">
          <div style={{ backgroundColor: "#460B0A", padding: "2vh 2vw", width: "fit-content" }}>
            Primetime
          </div>
          <div style={{ padding: "0px 1vmax 0px 2vmax", marginBottom: ".5vmax" }}>
            <div style={{display: "flex", alignItems: "center"}}>
              <div className="text-[calc(2.5vw+2.5vh)] sm:text-[calc(1.5vw+1.5vh)]" style={{ fontWeight: "600" }}>Originals</div>
              <div
                  style={{
                    width: "calc(1.5vw + 1.5vh)",
                    height: "calc(1.5vw + 1.5vh)",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "1vw",
                    marginTop: "1.5vh"
                  }}
                >
                  <Image
                    src="/verified.png"
                    alt="Verified icon"
                    width={200}
                    height={200}
                    className="w-[1vw] h-[1vh]"
                  />
                </div>
            </div>
            <div
              className="primetimeLikesNtime rounded-full shadow shadow-black bg-primary-background-700 mt-1 p-[3px] px-[10px] flex justify-center items-center"
            >
              <AiFillEye style={{ opacity: ".5", marginLeft: "0vh" }} size={12} className="mx-1" />
              2350 views
              <BiTime style={{ opacity: ".5", marginLeft: "2vh" }} size={12} className="mx-1" />
              20 mins ago
            </div>
            <div className="text-[calc(1.5vw+1.5vh)] sm:text-[calc(1vw+1vh)]" style={{ fontWeight: "600", margin: "1.5vmax 0px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id euismod blandit diam sit amet convallis amet.</div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  backgroundColor: "#fff", color: "black"
                }}
                className="rounded-full h-8 sm:h-4 w-32 sm:w-20 flex justify-around items-center"
              >
                <AiFillHeart
                  color="#E3323B"
                  className="flex-1 text-[calc(1.4vw+1.4vh)] sm:text-[calc(.7vw+.7vh)]"
                />
                <span style={{ color: "black", marginTop: "-.4vh" }} className="flex-none">
                  |
                </span>
                <AiOutlineShareAlt
                  style={{ color: "black" }}
                  className="flex-1 text-[calc(1.4vw+1.4vh)] sm:text-[calc(.7vw+.7vh)]"
                />
              </div>
              <div style={{ fontFamily: "Righteous", fontWeight: "400", color: "#fff" }} className="flex items-center text-[calc(1.3vw+1.3vh)] sm:text-[calc(0.6vw+0.6vh)]" >
                <HiOutlineLocationMarker size={15} />
                <span style={{ paddingLeft: ".5vw" }}>Bhubaneshwar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeRightSec w-full pt-4 lg:pt-16">
        {/*
           TODO
            Use Radio Groups of headlessUI
         */}
        <CategoryProvider>
          <CategoryMenu />
        </CategoryProvider>

        <ArticleContainer>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </ArticleContainer>
      </div>
    </HomePageLayout>
  );
};
export default Home;
