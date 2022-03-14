import type { NextPage } from "next";
import HomePageLayout from "@layouts/HomePageLayout";
import Carousel from "@components/Carousel";
import CategoryMenu from "@components/CategoryMenu";
import CategoryBox from "@components/CategoryBox";
import { MdBusinessCenter } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { BiChip } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import ArticleContainer from "@components/ArticleContainer";

const Home: NextPage = () => {
  // Complete the function to show the articles related to the
  // category that was returned
  const categoryBoxOnClickHandler = (category: string) => {
    console.log(category);
  };
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
        <CategoryMenu>
          <CategoryBox
            categoryBoxOnClickHandler={categoryBoxOnClickHandler}
            hoverColor="orange"
            name={"Business"}
            icon={<MdBusinessCenter size={20} />}
          />
          <CategoryBox
            categoryBoxOnClickHandler={categoryBoxOnClickHandler}
            hoverColor="violet"
            name={"Entertainment"}
            icon={<MdMovie size={20} />}
          />
          <CategoryBox
            categoryBoxOnClickHandler={categoryBoxOnClickHandler}
            hoverColor="teal"
            name={"Technology"}
            icon={<BiChip size={20} />}
          />
          <CategoryBox
            categoryBoxOnClickHandler={categoryBoxOnClickHandler}
            hoverColor="sky"
            name={"Politics"}
            icon={<FaBookOpen size={20} />}
          />
          <CategoryBox
            categoryBoxOnClickHandler={categoryBoxOnClickHandler}
            hoverColor="red"
            name={"Sports"}
            icon={<IoMdFootball size={20} />}
          />
          <CategoryBox
            categoryBoxOnClickHandler={categoryBoxOnClickHandler}
            hoverColor="green"
            name={"Entrepreneur"}
            icon={<BsGraphUp size={20} />}
          />
        </CategoryMenu>
        <ArticleContainer>Hola</ArticleContainer>
      </div>
    </HomePageLayout>
  );
};
export default Home;
