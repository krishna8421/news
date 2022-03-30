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
      icon: <BiNews size={20} />,
    },
    {
      name: "Business",
      hoverColor: "orange",
      icon: <MdBusinessCenter size={20} />,
    },
    {
      name: "Entertainment",
      hoverColor: "violet",
      icon: <MdMovie size={20} />,
    },
    {
      name: "Technology",
      hoverColor: "teal",
      icon: <BiChip size={20} />,
    },
    {
      name: "Politics",
      hoverColor: "sky",
      icon: <FaBookOpen size={20} />,
    },
    {
      name: "Sports",
      hoverColor: "red",
      icon: <IoMdFootball size={20} />,
    },
    {
      name: "Entrepreneur",
      hoverColor: "green",
      icon: <BsGraphUp size={20} />,
    },
  ];
  const { category } = useCategory();

  return (
    <div
      style={{ marginTop: "-1.5vh" }}
      className="w-11/12 m-auto h-16 overflow-y-hidden overflow-x-auto flex no-scrollbar items-center hover:bg-red"
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
