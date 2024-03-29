import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import LinkShare from "@components/LinkShare";
import ViewsTime from "@components/ViewsTime";
import Link from "next/link";
import { Avatar } from "@mantine/core";

import { useAuth } from "@lib/context/AuthContext";
import { useEffect, useState } from "react";
interface Props {
  data: any;
  articlesId: string;
}

export default function ArticleCard({ data, articlesId }: Props) {
  const { uid } = useAuth();

  const [liked, setLiked] = useState<boolean>(false);
  useEffect(() => {
    if (data.likedBy.includes(uid)) {
      setLiked(true);
    }
  }, []);
  return (
    <div
      className="homeArticlesCard bg-primary-background-700 rounded-xl relative"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.75) calc(0.3vh + 0.3vw) calc(0.3vh + 0.3vw) calc(0.2vh + 0.2vw) 0px",
      }}
    >
      <div className="bg-gradient-to-r from-primary-red to-primary-dark-red rounded-bl-xl rounded-tr-xl absolute z-10 right-0 flex justify-center items-center">
        <div className="bg-gray-800 font-Righteous text-[calc(1.3vw+1.3vh)] sm:text-[calc(0.6vw+0.6vh)] text-white rounded-bl-xl rounded-tr-xl z-10 right-0 flex justify-center items-center px-4 m-[1px] py-1">
          {data.type ? data.type[0]?.toUpperCase() + data.type?.slice(1) : <></>}
        </div>
      </div>
      <Link href={`${process.env.BASE_URL}/articles/${articlesId}`} passHref>
        <div className="homeArticleMainImg cursor-pointer">
          <Image
            src={data.normalImage1?.url}
            alt="Article Card"
            layout="fill"
            objectFit="cover"
            className="h-64 w-64 rounded-xl"
          />
        </div>
      </Link>
      <div className="relative">
        <div className="absolute z-10 -bottom-12 sm:-bottom-7 right-4 sm:right-2 m-2">
          <div className="relative">
            <div className="absolute bottom-0 -right-1 z-20 flex justify-center items-center">
              <div className="absolute h-2 w-2 bg-white rounded-full" />
              <MdVerified className="z-30" color="#42A5F5" />
            </div>
            <div className="homeArticleProImg">
              {data.authorPhotoURL ? (
                <Image
                  src={data.authorPhotoURL}
                  alt="Article Card"
                  layout="fill"
                  className="rounded-xl border"
                />
              ) : (
                <Avatar
                  sx={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "20%",
                    backgroundColor: "black",
                    position: "relative",
                  }}
                >
                  {data.authorName?.split("")[0]}
                </Avatar>
              )}
            </div>
            <div className="absolute text-[9px] text=[#EEEBDC] w-full h-10 text-right px-1">
              {data.authorName}
            </div>
          </div>
        </div>
      </div>
      <Link href={`${process.env.BASE_URL}/articles/${articlesId}`} passHref>
        <div className="homeArticleTitle overflow-scroll no-scrollbar text-white pb-0 cursor-pointer">
          {data.title}
        </div>
      </Link>
      <Link href={`${process.env.BASE_URL}/articles/${articlesId}`} passHref>
        <div className="homeArticleDesc cursor-pointer overflow-scroll no-scrollbar">
          {data.subHeading}
        </div>
      </Link>
      <div className="text-[calc(1vw+1vh)] sm:text-[calc(.45vw+.45vh)] w-full px-7 sm:px-2 flex justify-between">
        <div
          style={{ color: "#fff" }}
          className=" rounded-full shadow shadow-black bg-primary-background-700  mt-1 p-[3px] px-[10px]"
        >
          {data.category ? data.category[0]?.toUpperCase() + data.category?.slice(1) : <></>}
        </div>
        <ViewsTime viewCount={data.viewedBy} publishTime={data.createdAt} />
      </div>
      <div className={"w-full mt-5 sm:mt-2.5 px-7 sm:px-3 flex justify-between items-center"}>
        <LinkShare liked={liked} uid={uid} setLiked={setLiked} articleId={articlesId} />
        <div
          style={{
            fontFamily: "Righteous",
            fontWeight: "400",
            color: "#fff",
          }}
          className="flex items-center text-[calc(1.3vw+1.3vh)] sm:text-[calc(0.6vw+0.6vh)]"
        >
          <HiOutlineLocationMarker size={15} />
          <span style={{ paddingLeft: ".5vw" }}>{data.city}</span>
        </div>
      </div>
    </div>
  );
}
