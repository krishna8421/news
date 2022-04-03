import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";

interface Props {
  imgUrlArr: string[];
}

export default function Carousel({ imgUrlArr }: Props) {
  return (
    <div className="w-full h-full relative">
      <div className="absolute h-12 w-28 bg-[#E50914] z-30 top-[50%] flex justify-center items-center">
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
        {imgUrlArr.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <div className="w-full lg:h-screen h-[70vh] relative shadow-2xl">
              <Image src={imgUrl} alt="Headline" layout="fill" objectFit="cover" priority={true} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
