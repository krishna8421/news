import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

interface Props {
  imgUrl: string;
  author: string;
  location: string;
  title: string;
  viewCount: number;
  verified?: boolean;
}

export default function LimeLightCard({
  imgUrl,
  author,
  location,
  title,
  viewCount,
  verified = false,
}: Props) {
  return (
    <div className="relative homeLimeLightCard rounded-xl overflow-hidden">
      <div className="absolute top-0 left-0 text-white bg-primary-background-900 z-10 rounded-xl flex py-[2px] items-center px-2 gap-2 text-[10px]">
        <AiOutlineEye color="rgba(255,255,255,0.2)" size={15} />
        {viewCount} views
      </div>
      <div className="absolute bottom-0 w-full px-4 z-10 bg-black/5 backdrop-blur-sm rounded-xl">
        <div className="w-[60%] gap-2 text-[.8rem] mt-2">
          {author}{" "}
          <span className="inline-block">{verified && <MdVerified color="#42A5F5" />} </span>
        </div>
        <div className="font-semibold">
          <span className="inline-block mr-2">
            <HiOutlineLocationMarker />
          </span>
          {location}
        </div>
        <div className="text-[.6rem] text-white pt-2 pb-4 font-bold">{title}</div>
      </div>
      <Image
        src={imgUrl}
        alt="LimeLightCard"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
    </div>
  );
}
