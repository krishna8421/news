import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

interface Props {
  imgUrls: string[];
}

export default function ArticleCarousel({ imgUrls }: Props) {
  return (
    <div className="w-full h-full relative">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        loop={true}
        effect={"fade"}
        modules={[EffectFade, Scrollbar, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {imgUrls.map((imgUrl: any, index: number) => {
          return (
            <div key={index}>
              <SwiperSlide>
                <div className="w-full lg:h-screen h-[70vh] relative shadow-2xl">
                  {/* <div className="primetimeContent" key={index}>
                      <div className="h-12 w-28 bg-[#E50914] z-10 flex justify-center items-center">
                        <div className="relative w-[80%] h-[80%]">
                          <Image
                            src="/primetimeLogo.png"
                            alt="PrimeTime"
                            layout="fill"
                            objectFit="cover"
                            className="rounded absolute"
                            priority={true}
                          />
                        </div>
                      </div>
                      <div style={{ padding: "0px 1vmax 0px 2vmax", marginBottom: ".5vmax" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <div
                            className="text-[calc(2.5vw+2.5vh)] sm:text-[calc(1.5vw+1.5vh)]"
                            style={{ fontWeight: "600" }}
                          >
                            {article.authorName}
                          </div>
                          <div
                            style={{
                              width: "calc(1.5vw + 1.5vh)",
                              height: "calc(1.5vw + 1.5vh)",
                              display: "flex",
                              alignItems: "center",
                              marginLeft: "1vw",
                              marginTop: "1.5vh",
                            }}
                          >
                            <Image
                              src="/verified.png"
                              alt="Verified icon"
                              width={200}
                              height={200}
                              className="w-[1vw] h-[1vh]"
                            />
                          </div>
                        </div>
                        <ViewsTime
                          classNameProp="!w-48"
                          viewCount={article.viewedBy}
                          publishTime={article.createdAt}
                        />
                        <div
                          className="text-[calc(1.5vw+1.5vh)] sm:text-[calc(1vw+1vh)]"
                          style={{ fontWeight: "600", margin: "1.5vmax 0px" }}
                        >
                          {article.title}
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                          <LinkShare liked theme="light" />
                          <div
                            style={{ fontFamily: "Righteous", fontWeight: "400", color: "#fff" }}
                            className="flex items-center text-[calc(1.3vw+1.3vh)] sm:text-[calc(0.6vw+0.6vh)]"
                          >
                            <HiOutlineLocationMarker size={15} />
                            <span style={{ paddingLeft: ".5vw" }}>{article.city}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    articlesId */}
                  {/* <Link href={`${process.env.BASE_URL}/articles/${articlesId[index]}`} passHref> */}
                  <Image
                    src={imgUrl}
                    className="cursor-pointer"
                    alt="Headline"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                  />
                  {/* </Link> */}
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
