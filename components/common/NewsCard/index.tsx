import Image from "next/image";
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";

interface Props {
  title: string;
  newsProvider: string;
}

export default function NewsCard({ title, newsProvider }: Props) {
  const like = false;
  return (
    <div className="flex flex-col items-center">
      <div className="w-64 h-52 relative">
        <Image
          src="https://source.unsplash.com/1200x900/?news"
          alt="News"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <p className="font-Inter w-60 mt-5 text-md">{title}</p>
      <div className="w-60 mt-5 flex justify-between">
        <p className="font-Inter text-xs font-semibold text-gray-400">{newsProvider}</p>
        <div className="flex">
          {like ? (
            <AiFillHeart className="text-red-500" />
          ) : (
            <AiOutlineHeart className="text-gray-500" />
          )}
          <AiOutlineShareAlt className="text-gray-500 ml-4" />
        </div>
      </div>
    </div>
  );
}
