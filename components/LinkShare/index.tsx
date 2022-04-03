import { AiOutlineHeart, AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";

interface Props {
  liked?: boolean;
}

export default function LinkShare({ liked = false }: Props) {
  return (
    <div
      style={{
        boxShadow:
          "calc(0.3vw + 0.3vh) calc(0.3vw + 0.3vh) calc(0.2vw + 0.2vh) 0px rgba(0,0,0,0.75)",
      }}
      className="bg-primary-background-500 rounded-full h-12 sm:h-6 w-48 sm:w-24 flex justify-around items-center"
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
        |
      </span>
      <AiOutlineShareAlt
        style={{ color: "#fff" }}
        className="flex-1 text-[calc(2vw+2vh)] sm:text-[calc(1vw+1vh)]"
      />
    </div>
  );
}
