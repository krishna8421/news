import type { NextPage } from "next";
import HomePageLayout from "@layouts/HomePageLayout";
import Carousel from "@components/Carousel";
import CategoryMenu from "@components/CategoryMenu";
import { CategoryProvider } from "@lib/context/CategoryContext";
import ArticleContainer from "@components/ArticleContainer";
import ArticleCard from "@components/ArticleCard";
import LimeLightCard from "@components/LimeLightCard";
import { HiOutlineLocationMarker } from "react-icons/hi";
import LimeLightContainer from "@components/LimeLightContainer";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@firebase/client";
import { Select } from "@mantine/core";
import { City, Country, State } from "country-state-city";
import { FaSearch } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { query, where } from "firebase/firestore";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Home: NextPage = () => {
  const [searchLocation, setSearchLocation] = useState(false);
  const [articleData, setArticleData] = useState<any>([]);
  const [articlesId, setArticlesId] = useState<any>([]);
  SwiperCore.use([Autoplay]);
  useEffect(() => {
    const getData = async () => {
      const articlesRef = collection(db, "articles");
      const articlesData = await getDocs(articlesRef);
      const data: any[] = [];
      const articlesId: any[] = [];
      articlesData.forEach((element) => {
        data.push(element.data());
        articlesId.push(element.ref.id);
      });
      setArticleData(data);
      setArticlesId(articlesId);
    };
    getData().then();
  }, []);

  // function for category 1 filteration
  const cat1Filter = async (cat1Value: any) => {
    const getData1 = async () => {
      const articlesRef = collection(db, "articles");
      const q = query(articlesRef, where("category", "==", `${cat1Value}`));
      const articlesData = await getDocs(q);
      const data: any[] = [];
      const articlesId: any[] = [];
      articlesData.forEach((element) => {
        data.push(element.data());
        articlesId.push(element.ref.id);
      });
      setArticleData(data);
      setArticlesId(articlesId);
    };
    getData1().then();
  };

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

  return (
    <HomePageLayout>
      <div className="primetime w-full">
        <Carousel />
      </div>
      <div className="homeRightSec w-full pt-4 lg:pt-16">
        {/*
           TODO
            Use Radio Groups of headlessUI
         */}
        <CategoryProvider>
          {/* @ts-ignore */}
          <CategoryMenu cat1Filter={cat1Filter} />
        </CategoryProvider>
        <div className="w-11/12 m-auto h-16 gap-2 pt-4 text-2xl font-Righteous mb-2 text-white flex items-center">
          <div style={{ display: "flex", alignItems: "center" }}>
            <HiOutlineLocationMarker />
            {searchLocation ? (
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
                    select: {
                      appearance: "none",
                      fontSize: "calc(.1vw + 1vh) !important",
                    },
                    root: {
                      fontSize: "calc(.1vw + 1vh) !important",
                    },
                    input: {
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
                      backgroundColor: "transparent !important",
                    },
                    "input:focus": {
                      borderColor: "transparent !important",
                    },
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
                    select: {
                      appearance: "none",
                    },
                    input: {
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
                      backgroundColor: "transparent !important",
                    },
                    "input:focus": {
                      borderColor: "transparent !important",
                    },
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
                    select: {
                      fontSize: "calc(1vw + 1vh)",
                      appearance: "none",
                    },
                    input: {
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
                      backgroundColor: "transparent !important",
                    },
                    "input:focus": {
                      borderColor: "transparent !important",
                    },
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
            ) : (
              <div
                style={{
                  fontSize: "calc(1vw + 1vh)",
                  marginLeft: "1vw",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {country}, {state}, {city}
                <div
                  className="locationEditBtn"
                  style={{ marginLeft: "2vw" }}
                  onClick={() => setSearchLocation(true)}
                >
                  <MdModeEditOutline />
                </div>
              </div>
            )}
          </div>
        </div>
        <ArticleContainer>
          {articleData.map((data: any, i: number) => (
            <ArticleCard key={i} data={data} articlesId={articlesId[i]} />
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
              onSlideChange={() => console.log("slide change")}
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
