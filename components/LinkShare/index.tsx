import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";

interface Props {
  liked?: boolean;
  theme?: "light" | "dark";
  classNameProp?: string;
}

export default function LinkShare({ liked = false, theme = "dark", classNameProp }: Props) {
  return (
    <div
      style={{
        boxShadow:
          "calc(0.3vw + 0.3vh) calc(0.3vw + 0.3vh) calc(0.2vw + 0.2vh) 0px rgba(0,0,0,0.75)",
      }}
      className={`${
        theme === "light" ? "!bg-white" : ""
      } ${classNameProp} bg-primary-background-500 rounded-full h-12 sm:h-6 w-48 sm:w-24 flex justify-around items-center`}
    >
      {liked ? (
        <AiFillHeart
          color="#E3323B"
          className="flex-1 text-[calc(2vw+2vh)] sm:text-[calc(1vw+1vh)]"
        />
      ) : (
        <AiOutlineHeart className="flex-1 text-[calc(2vw+2vh)] sm:text-[calc(1vw+1vh)]" />
      )}
      <span style={{ color: "#fff", marginTop: "-.4vh" }} className="text-gray-400 flex-none">
        <p className={`${theme === "light" ? "!text-black" : ""}`}>|</p>
      </span>
      <AiOutlineShareAlt
        className="flex-1 text-[calc(2vw+2vh)] sm:text-[calc(1vw+1vh)]"
        color={`${theme === "light" ? "black" : "white"}`}
      />
    </div>
  );
}
