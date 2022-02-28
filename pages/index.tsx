import type { NextPage } from "next";
import HomeLayout from "@layouts/HomeLayout";
import HomePageMenuBar from "@common/HomePageMenuBar";
import Carousel from "@common/Carousel";
import NewsCard from "@common/NewsCard";

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
    <HomeLayout>
      <div className="flex min-h-[calc(100vh-4rem)] w-screen flex-wrap lg:flex-nowrap">
        <div className="lg:w-5/12 xl:w-1/3 w-full">
          <div className="lg:fixed lg:w-5/12 xl:w-1/3 w-full">
            <Carousel imgUrlArr={imgUrlArr} />
          </div>
        </div>
        <div className="lg:w-7/12 xl:w-2/3 w-full">
          <HomePageMenuBar />
          <div className="flex flex-wrap w-full p-10 mt-4 justify-center gap-8">
            <NewsCard
              title={"You can now get Ak47 without license."}
              newsProvider={"The Indian Express"}
            />
            <NewsCard
              title={"You can now get Ak47 without license."}
              newsProvider={"The Indian Express"}
            />
            <NewsCard
              title={"You can now get Ak47 without license."}
              newsProvider={"The Indian Express"}
            />
            <NewsCard
              title={"You can now get Ak47 without license."}
              newsProvider={"The Indian Express"}
            />
            <NewsCard
              title={"You can now get Ak47 without license."}
              newsProvider={"The Indian Express"}
            />
            <NewsCard
              title={"You can now get Ak47 without license."}
              newsProvider={"The Indian Express"}
            />
            <NewsCard
              title={"You can now get Ak47 without license."}
              newsProvider={"The Indian Express"}
            />
            <NewsCard
              title={"You can now get Ak47 without license."}
              newsProvider={"The Indian Express"}
            />
            <NewsCard
              title={"You can now get Ak47 without license."}
              newsProvider={"The Indian Express"}
            />
            <NewsCard
              title={"You can now get Ak47 without license."}
              newsProvider={"The Indian Express"}
            />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
