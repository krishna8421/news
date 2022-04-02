import CategoryBox from "@components/CategoryBox";
import { MdBusinessCenter } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import { BiChip, BiNews } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { BsGraphUp } from "react-icons/bs";
import { useCategory } from "@lib/context/CategoryContext";

interface Props {}

export default function CategoryMenu({}: Props) {
  // Complete the function to show the articles related to the
  // category that was returned
  // const categoryBoxOnClickHandler = (category: string) => {
  // };
  const categoryList = [
    {
      name: "Recommended",
      hoverColor: "indigo",
      icon: <BiNews style={{ fontSize: "calc(1vw + 1vh)" }} />,
    },
    {
      name: "Business",
      hoverColor: "orange",
      icon: <MdBusinessCenter style={{ fontSize: "calc(1vw + 1vh)" }} />,
    },
    {
      name: "Entertainment",
      hoverColor: "violet",
      icon: <MdMovie style={{ fontSize: "calc(1vw + 1vh)" }} />,
    },
    {
      name: "Technology",
      hoverColor: "teal",
      icon: <BiChip style={{ fontSize: "calc(1vw + 1vh)" }} />,
    },
    {
      name: "Politics",
      hoverColor: "sky",
      icon: <FaBookOpen style={{ fontSize: "calc(1vw + 1vh)" }} />,
    },
    {
      name: "Sports",
      hoverColor: "red",
      icon: <IoMdFootball style={{ fontSize: "calc(1vw + 1vh)" }} />,
    },
    {
      name: "Entrepreneur",
      hoverColor: "green",
      icon: <BsGraphUp style={{ fontSize: "calc(1vw + 1vh)" }} />,
    },
  ];
  const { category } = useCategory();

  return (
    <div
      style={{ marginTop: "-1.5vh", fontSize: "calc(.7vw + .7vh)" }}
      className="w-11/12 m-auto h-16 my-4 pt-4 overflow-y-hidden overflow-x-auto flex no-scrollbar items-center hover:bg-red"
    >
      {categoryList.map((data, index) => (
        <CategoryBox
          key={index}
          name={data.name}
          hoverColor={data.hoverColor}
          icon={data.icon}
          isActive={data.name.toLowerCase() === category}
        />
      ))}
    </div>
  );
}
