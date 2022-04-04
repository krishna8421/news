import type { NextPage } from "next";
import HomePageLayout from "@layouts/HomePageLayout";
import Carousel from "@components/Carousel";
import CategoryMenu from "@components/CategoryMenu";
import { CategoryProvider } from "@lib/context/CategoryContext";
import ArticleContainer from "@components/ArticleContainer";
import ArticleCard from "@components/ArticleCard";
import LimeLightCard from "@components/LimeLightCard";
import { AiFillEye } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";
import LimeLightContainer from "@components/LimeLightContainer";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@firebase/client";

const Home: NextPage = () => {
  const [articleData, setArticleData] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const articlesRef = collection(db, "articles");
      const articlesData = await getDocs(articlesRef);
      const data: any[] = [];
      articlesData.forEach((element) => {
        data.push(element.data());
      });
      setArticleData(data);
    };
    getData().then();
  }, []);

  const imgUrlArr = [
    "https://source.unsplash.com/1200x900/?tv",
    "https://source.unsplash.com/1200x900/?game",
    "https://source.unsplash.com/1200x900/?paper",
    "https://source.unsplash.com/1200x900/?vikings",
    "https://source.unsplash.com/1200x900/?iphone",
    "https://source.unsplash.com/1200x900/?mac",
    "https://source.unsplash.com/1200x900/?russia",
  ];
  // const {user} = useAuth()
  return (
    <HomePageLayout>
      <div className="primetime w-full">
        <Carousel imgUrlArr={imgUrlArr} />
        <div className="primetimeContent">
          <div className="h-12 w-28 bg-[#E50914] z-10 flex justify-center items-center">
            <div className="relative w-[80%] h-[80%]">
              <Image
                src="/primetimeLogo.png"
                alt="PrimeTime"
                layout="fill"
                objectFit="cover"
                className="rounded absolute"
                priority={true}
              />
            </div>
          </div>
          <div style={{ padding: "0px 1vmax 0px 2vmax", marginBottom: ".5vmax" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                className="text-[calc(2.5vw+2.5vh)] sm:text-[calc(1.5vw+1.5vh)]"
                style={{ fontWeight: "600" }}
              >
                Originals
              </div>
              <div
                style={{
                  width: "calc(1.5vw + 1.5vh)",
                  height: "calc(1.5vw + 1.5vh)",
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "1vw",
                  marginTop: "1.5vh",
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
            <div className="primetimeLikesNtime rounded-full shadow shadow-black bg-primary-background-700 mt-1 p-[3px] px-[10px] flex justify-center items-center">
              <AiFillEye style={{ opacity: ".5", marginLeft: "0vh" }} size={12} className="mx-1" />
              2350 views
              <BiTime style={{ opacity: ".5", marginLeft: "2vh" }} size={12} className="mx-1" />
              20 mins ago
            </div>
            <div
              className="text-[calc(1.5vw+1.5vh)] sm:text-[calc(1vw+1vh)]"
              style={{ fontWeight: "600", margin: "1.5vmax 0px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id euismod blandit diam sit
              amet convallis amet.
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  backgroundColor: "#fff",
                  color: "black",
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
              <div
                style={{ fontFamily: "Righteous", fontWeight: "400", color: "#fff" }}
                className="flex items-center text-[calc(1.3vw+1.3vh)] sm:text-[calc(0.6vw+0.6vh)]"
              >
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
        <div className="w-11/12 m-auto h-16 gap-2 pt-4 text-2xl font-Righteous mb-2 text-white flex items-center">
          <HiOutlineLocationMarker />
          <p>Patna, Bihar, India</p>
        </div>
        <ArticleContainer>
          {/* <ArticleCard />
          <ArticleCard />
          <ArticleCard /> */}

          {articleData.map((data: any, i: number) => (
            <ArticleCard key={i} data={data} />
          ))}
          <LimeLightContainer>
            {articleData.map((data: any, i: number) => {
              if (data.limelight.url) {
                return (
                  <LimeLightCard
                    key={i}
                    imgUrl={data.limelight.url}
                    author={data.authorName}
                    location={data.city}
                    title={data.title}
                    viewCount={data.viewedBy}
                    verified={data.isVerified}
                  />
                );
              } else return null;
            })}
          </LimeLightContainer>
        </ArticleContainer>
      </div>
    </HomePageLayout>
  );
};
export default Home;
