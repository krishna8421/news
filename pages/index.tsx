import type { NextPage } from "next";
import HomePageLayout from "@layouts/HomePageLayout";
import Carousel from "@components/Carousel";
import CategoryMenu from "@components/CategoryMenu";
import { CategoryProvider } from "@lib/context/CategoryContext";
import ArticleContainer from "@components/ArticleContainer";

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
      <div className="lg:w-5/12 xl:w-1/3 w-full">
        <div className="lg:fixed lg:w-5/12 xl:w-1/3 w-full">
          <Carousel imgUrlArr={imgUrlArr} />
        </div>
      </div>
      <div className="lg:w-7/12 xl:w-2/3 w-full lg:pt-16">
        <CategoryProvider>
          <CategoryMenu />
        </CategoryProvider>
        <ArticleContainer>Hola</ArticleContainer>
      </div>
    </HomePageLayout>
  );
};
export default Home;
