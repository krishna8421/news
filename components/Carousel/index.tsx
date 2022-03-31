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
    <div className="w-full h-full">
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
