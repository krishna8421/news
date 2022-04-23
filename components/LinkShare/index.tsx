import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { useState } from "react";
import Share from "@components/Share";
interface Props {
  liked?: boolean;
  theme?: "light" | "dark";
  classNameProp?: string;
  articleId: string;
}

export default function LinkShare({
  liked = false,
  theme = "dark",
  classNameProp,
  articleId,
}: Props) {
  const [isShareBoxOpen, setIsShareBoxOpen] = useState(false);
  const closeShare = () => setIsShareBoxOpen(false);
  const openShare = () => setIsShareBoxOpen(true);
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
          className="flex-1 text-[calc(2vw+2vh)] sm:text-[calc(1vw+1vh)] cursor-pointer"
        />
      ) : (
        <AiOutlineHeart className="flex-1 text-[calc(2vw+2vh)] sm:text-[calc(1vw+1vh)]" />
      )}
      <span style={{ color: "#fff", marginTop: "-.4vh" }} className="text-gray-400 flex-none">
        <p className={`${theme === "light" ? "!text-black" : ""}`}>|</p>
      </span>
      <AiOutlineShareAlt
        className="flex-1 text-[calc(2vw+2vh)] sm:text-[calc(1vw+1vh)] cursor-pointer"
        color={`${theme === "light" ? "black" : "white"}`}
        onClick={openShare}
      />
      <Share isShareBoxOpen={isShareBoxOpen} closeShare={closeShare} articleId={articleId} />
    </div>
  );
}
