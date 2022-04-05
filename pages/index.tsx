import type { NextPage } from "next";
import HomePageLayout from "@layouts/HomePageLayout";
import Carousel from "@components/Carousel";
import CategoryMenu from "@components/CategoryMenu";
import { CategoryProvider } from "@lib/context/CategoryContext";
import ArticleContainer from "@components/ArticleContainer";
import ArticleCard from "@components/ArticleCard";
import LimeLightCard from "@components/LimeLightCard";
import { AiFillEye } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { AiFillHeart, AiOutlineShareAlt } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Image from "next/image";
import LimeLightContainer from "@components/LimeLightContainer";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@firebase/client";
import { Select } from "@mantine/core";
import { City, Country, State } from "country-state-city";
import { FaSearch } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Home: NextPage = () => {
  const [searchLocation, setSearchLocation] = useState(false);
  const [articleData, setArticleData] = useState<any>([]);
  SwiperCore.use([Autoplay]);
  useEffect(() => {
    const getData = async () => {
      const articlesRef = collection(db, "articles");
      const articlesData = await getDocs(articlesRef);
      const data: any[] = [];
      articlesData.forEach((element) => {
        data.push(element.data());
      });
      setArticleData(data);
    };
    getData().then();
  }, []);

  const imgUrlArr = [
    "https://source.unsplash.com/1200x900/?tv",
    "https://source.unsplash.com/1200x900/?game",
    "https://source.unsplash.com/1200x900/?paper",
    "https://source.unsplash.com/1200x900/?vikings",
    "https://source.unsplash.com/1200x900/?iphone",
    "https://source.unsplash.com/1200x900/?mac",
    "https://source.unsplash.com/1200x900/?russia",
  ];
  // const {user} = useAuth()

  /**
   * Location
   */
  const [country, setCountry] = useState<string | null>("IN");
  const [allCountries, setAllCountries] = useState<any>([]);
  const [state, setState] = useState<string | null>("DL");
  const [allStates, setAllStates] = useState<any>([]);
  const [city, setCity] = useState<string | null>("New Delhi");
  const [allCities, setAllCities] = useState<any>([]);

  useEffect(() => {
    setAllCountries(
      Country.getAllCountries().map((country) => {
        return {
          value: country.isoCode,
          label: country.name,
        };
      }),
    );
  }, []);

  const handleCountryChange = (value: string) => {
    setCountry(value);
    setAllStates(
      State.getStatesOfCountry(value).map((state) => {
        return {
          value: state.isoCode,
          label: state.name,
        };
      }),
    );
    setState(null);
    setCity(null);
  };

  const handleStateChange = (country: string, state: string) => {
    setState(state);
    setAllCities(
      City.getCitiesOfState(country, state).map((city) => {
        return {
          value: city.name,
          label: city.name,
        };
      }),
    );
    setCity(null);
  };

  useEffect(() => {
    setAllCountries(
      Country.getAllCountries().map((country) => {
        return {
          value: country.isoCode,
          label: country.name,
        };
      }),
    );

    setAllStates(
      State.getStatesOfCountry("IN").map((state) => {
        return {
          value: state.isoCode,
          label: state.name,
        };
      }),
    );
    setState("DL");
    setCity("New Delhi");

    setState("DL");
    setAllCities(
      City.getCitiesOfState("IN", "DL").map((city) => {
        return {
          value: city.name,
          label: city.name,
        };
      }),
    );
    setCity("New Delhi");
  }, []);

  console.log("ahah", country, state, city);
  return (
    <HomePageLayout>
      <div className="primetime w-full">
        <Carousel imgUrlArr={imgUrlArr} />
        <div className="primetimeContent">
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
                Originals
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
            <div className="primetimeLikesNtime rounded-full shadow shadow-black bg-primary-background-700 mt-1 p-[3px] px-[10px] flex justify-center items-center">
              <AiFillEye style={{ opacity: ".5", marginLeft: "0vh" }} size={12} className="mx-1" />
              2350 views
              <BiTime style={{ opacity: ".5", marginLeft: "2vh" }} size={12} className="mx-1" />
              20 mins ago
            </div>
            <div
              className="text-[calc(1.5vw+1.5vh)] sm:text-[calc(1vw+1vh)]"
              style={{ fontWeight: "600", margin: "1.5vmax 0px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id euismod blandit diam sit
              amet convallis amet.
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  backgroundColor: "#fff",
                  color: "black",
                }}
                className="rounded-full h-8 sm:h-4 w-32 sm:w-20 flex justify-around items-center"
              >
                <AiFillHeart
                  color="#E3323B"
                  className="flex-1 text-[calc(1.4vw+1.4vh)] sm:text-[calc(.7vw+.7vh)]"
                />
                <span style={{ color: "black", marginTop: "-.4vh" }} className="flex-none">
                  |
                </span>
                <AiOutlineShareAlt
                  style={{ color: "black" }}
                  className="flex-1 text-[calc(1.4vw+1.4vh)] sm:text-[calc(.7vw+.7vh)]"
                />
              </div>
              <div
                style={{ fontFamily: "Righteous", fontWeight: "400", color: "#fff" }}
                className="flex items-center text-[calc(1.3vw+1.3vh)] sm:text-[calc(0.6vw+0.6vh)]"
              >
                <HiOutlineLocationMarker size={15} />
                <span style={{ paddingLeft: ".5vw" }}>Bhubaneshwar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeRightSec w-full pt-4 lg:pt-16">
        {/*
           TODO
            Use Radio Groups of headlessUI
         */}
        <CategoryProvider>
          <CategoryMenu />
        </CategoryProvider>
        <div className="w-11/12 m-auto h-16 gap-2 pt-4 text-2xl font-Righteous mb-2 text-white flex items-center">
          <div style={{ display: "flex", alignItems: "center" }}>
            <HiOutlineLocationMarker />
            {searchLocation ?
              <>
                <Select
                  style={{}}
                  className="focus:outline-none border-transparent focus:border-transparent focus:ring-0"
                  searchable
                  placeholder="Country"
                  radius="lg"
                  size="md"
                  sx={{
                    "@media (max-width: 620px)": {
                      width: "100%",
                    },
                    "select": {
                      appearance: "none",
                      fontSize: "calc(.1vw + 1vh) !important",
                    },
                    root: {
                      fontSize: "calc(.1vw + 1vh) !important",
                    },
                    "input": {
                      padding: "0px",
                      paddingLeft: "1vw",
                      margin: "0px 1vmax",
                      fontSize: "calc(1vw + 1vh)",
                      fontWeight: "700",
                      color: "white",
                      height: "4vh",
                      minHeight: "4vh",
                      borderBottom: "1px solid white",
                      width: "10vw",
                      borderRadius: "0px",
                      backgroundColor: "transparent !important"
                    },
                    "input:focus": {
                      borderColor: "transparent !important",
                    }
                  }}
                  data={allCountries}
                  value={country}
                  onChange={(value: string) => handleCountryChange(value)}
                />
                <Select
                  disabled={!country}
                  searchable
                  placeholder="State"
                  radius="lg"
                  size="md"
                  sx={{
                    "@media (max-width: 620px)": {
                      width: "100%",
                    },
                    "select": {
                      appearance: "none"
                    },
                    "input": {
                      padding: "0px",
                      paddingLeft: "1vw",
                      margin: "0px 1vmax",
                      fontSize: "calc(1vw + 1vh)",
                      fontWeight: "700",
                      color: "white",
                      height: "4vh",
                      minHeight: "4vh",
                      borderBottom: "1px solid white",
                      width: "10vw",
                      borderRadius: "0px",
                      backgroundColor: "transparent !important"
                    },
                    "input:focus": {
                      borderColor: "transparent !important",
                    }
                  }}
                  data={allStates}
                  value={state}
                  onChange={(value: string) => {
                    if (!country) throw new Error("Country is not selected");
                    handleStateChange(country, value);
                  }}
                />
                <Select
                  disabled={!country || !state}
                  searchable
                  placeholder="City"
                  radius="lg"
                  size="md"
                  sx={{
                    "@media (max-width: 620px)": {
                      width: "100%",
                    },
                    "select": {
                      fontSize: "calc(1vw + 1vh)",
                      appearance: "none",
                    },
                    "input": {
                      padding: "0px",
                      paddingLeft: "1vw",
                      margin: "0px 1vmax",
                      fontSize: "calc(1vw + 1vh)",
                      fontWeight: "700",
                      color: "white",
                      height: "4vh",
                      minHeight: "4vh",
                      borderBottom: "1px solid white",
                      width: "10vw",
                      borderRadius: "0px",
                      backgroundColor: "transparent !important"
                    },
                    "input:focus": {
                      borderColor: "transparent !important",
                    }
                  }}
                  data={allCities}
                  value={city}
                  onChange={(value: string) => {
                    if (!country || !state) throw new Error("Country or State is not selected");
                    setCity(value);
                  }}
                />
                <div className="locationEditBtn">
                  <FaSearch size={15} onClick={() => setSearchLocation(false)} />
                </div>
              </>
              :
              <div style={{ fontSize: "calc(1vw + 1vh)", marginLeft: "1vw", display: "flex", alignItems: "center" }}>
                {country}, {state}, {city}
                <div className="locationEditBtn" style={{ marginLeft: "2vw" }} onClick={() => setSearchLocation(true)}>
                  <MdModeEditOutline />
                </div>
              </div>
            }

          </div>
        </div>
        <ArticleContainer>
          {/* <ArticleCard />
          <ArticleCard />
          <ArticleCard /> */}

          {articleData.map((data: any, i: number) => (
            <ArticleCard key={i} data={data} />
          ))}
          <LimeLightContainer>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            loop={true}
            autoplay
          >
            {articleData.map((data: any, i: number) => {
              if (data.limelight.url) {
                console.log("ggg");
                return (
                  <SwiperSlide>
                    <LimeLightCard
                      key={i}
                      imgUrl={data.limelight.url}
                      author={data.authorName}
                      location={data.city}
                      title={data.title}
                      viewCount={data.viewedBy}
                      verified={data.isVerified}
                    />
                  </SwiperSlide>
                );
              } else return null;
            })}
            {articleData.map((data: any, i: number) => {
              if (data.limelight.url) {
                console.log("ggg");
                return (
                  <SwiperSlide>
                    <LimeLightCard
                      key={i}
                      imgUrl={data.limelight.url}
                      author={data.authorName}
                      location={data.city}
                      title={data.title}
                      viewCount={data.viewedBy}
                      verified={data.isVerified}
                    />
                  </SwiperSlide>
                );
              } else return null;
            })}
            {articleData.map((data: any, i: number) => {
              if (data.limelight.url) {
                console.log("ggg");
                return (
                  <SwiperSlide>
                    <LimeLightCard
                      key={i}
                      imgUrl={data.limelight.url}
                      author={data.authorName}
                      location={data.city}
                      title={data.title}
                      viewCount={data.viewedBy}
                      verified={data.isVerified}
                    />
                  </SwiperSlide>
                );
              } else return null;
            })}
            {articleData.map((data: any, i: number) => {
              if (data.limelight.url) {
                console.log("ggg");
                return (
                  <SwiperSlide>
                    <LimeLightCard
                      key={i}
                      imgUrl={data.limelight.url}
                      author={data.authorName}
                      location={data.city}
                      title={data.title}
                      viewCount={data.viewedBy}
                      verified={data.isVerified}
                    />
                  </SwiperSlide>
                );
              } else return null;
            })}
            {articleData.map((data: any, i: number) => {
              if (data.limelight.url) {
                console.log("ggg");
                return (
                  <SwiperSlide>
                    <LimeLightCard
                      key={i}
                      imgUrl={data.limelight.url}
                      author={data.authorName}
                      location={data.city}
                      title={data.title}
                      viewCount={data.viewedBy}
                      verified={data.isVerified}
                    />
                  </SwiperSlide>
                );
              } else return null;
            })}
            </Swiper>
          </LimeLightContainer>
        </ArticleContainer>
      </div>
    </HomePageLayout>
  );
};
export default Home;
