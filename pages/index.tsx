import type { NextPage } from "next";
import HomePageLayout from "@layouts/HomePageLayout";
import Carousel from "@components/Carousel";
import CategoryMenu from "@components/CategoryMenu";
import { CategoryProvider } from "@lib/context/CategoryContext";
import ArticleContainer from "@components/ArticleContainer";
import ArticleCard from "@components/ArticleCard";
import LimeLightCard from "@components/LimeLightCard";

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
        {/* <div className="lg:fixed lg:w-5/12 xl:w-1/3 w-full"> */}
        <Carousel imgUrlArr={imgUrlArr} />
        {/* </div> */}
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
          <LimeLightCard
            imgUrl={imgUrlArr[1]}
            author="Krishna Kumar"
            location="Patna"
            title="Watch: Alliance Air's Jabalpur runway mishap caught on camera by passenger"
            viewCount={500}
            verified
          />
        </ArticleContainer>
      </div>
    </HomePageLayout>
  );
};
export default Home;
