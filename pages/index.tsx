import type { NextPage } from "next";
import { CategoryProvider } from "@lib/context/CategoryContext";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, startAfter } from "firebase/firestore";
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

// COMPONENTS =====================================================
import ArticleCard from "@components/ArticleCard";
import LimeLightCard from "@components/LimeLightCard";
import ArticleContainerScroll from "@components/ArticleContainerScroll";
import ArticleContainer from "@components/ArticleContainer";
import LimeLightContainer from "@components/LimeLightContainer";
import HomePageLayout from "@layouts/HomePageLayout";
import Carousel from "@components/Carousel";
import CategoryMenu from "@components/CategoryMenu";

const Home: NextPage = () => {
  const [searchLocation, setSearchLocation] = useState(false);
  const [articleData, setArticleData] = useState<any>([]);
  const [articlesId, setArticlesId] = useState<any>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [lastFetched, setLastFetched] = useState<any>();
  const [cat1, setCat1] = useState<any>();

  const articleLimit = 3;

  SwiperCore.use([Autoplay]);

  const getData = async (cat1Value: any) => {
    console.log(country, city, state);
    const articleCollection = collection(db, "articles");
    const articlesRef = cat1Value
      ? query(
          articleCollection,
          where("country", "==", `${country}`),
          where("state", "==", `${state}`),
          where("city", "==", `${city}`),
          where("category", "==", `${cat1Value}`),

          orderBy("createdAt"),
          limit(articleLimit),
        )
      : query(
          articleCollection,
          where("country", "==", `${country}`),
          where("state", "==", `${state}`),
          where("city", "==", `${city}`),
          orderBy("createdAt"),
          limit(articleLimit),
        );
    const articlesData = await getDocs(articlesRef);

    const last = articlesData.docs[articlesData.docs.length - 1];
    setLastFetched(last);

    var data: any[] = [];
    var articlesIdTemp: any[] = [];
    articlesData.forEach((element) => {
      data.push(element.data());
      articlesIdTemp.push(element.ref.id);
    });

    setArticleData(data);
    setArticlesId(articlesIdTemp);
    if (articlesData.docs.length < articleLimit) {
      setHasMore(false);
    } else setHasMore(true);
  };

  const getNext = async () => {
    const articleCollection = collection(db, "articles");
    const articlesRef = cat1
      ? query(
          articleCollection,
          where("category", "==", `${cat1}`),
          where("country", "==", `${country}`),
          where("state", "==", `${state}`),
          where("city", "==", `${city}`),
          orderBy("createdAt"),
          startAfter(lastFetched),
          limit(articleLimit),
        )
      : query(
          articleCollection,
          where("country", "==", `${country}`),
          where("state", "==", `${state}`),
          where("city", "==", `${city}`),
          orderBy("createdAt"),
          startAfter(lastFetched),
          limit(articleLimit),
        );

    const articlesData = await getDocs(articlesRef);

    const last = articlesData.docs[articlesData.docs.length - 1];
    console.log("last", last);
    setLastFetched(last);

    var data: any[] = [];
    var articlesIdTemp: any[] = [];
    articlesData.forEach((element) => {
      data.push(element.data());
      articlesIdTemp.push(element.ref.id);
    });

    data = [...articleData, ...data];
    articlesIdTemp = [...articlesId, ...articlesIdTemp];

    setArticleData(data);
    setArticlesId(articlesIdTemp);
    if (articlesData.docs.length < articleLimit) {
      setHasMore(false);
    } else setHasMore(true);
  };

  // function for category 1 filteration
  const cat1Filter = async (cat1Value: any) => {
    setCat1(cat1Value);
    getData(cat1Value);
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
    if (!state) {
      setState("DL");
    }

    if (!city) {
      setCity("New Delhi");
    }

    setAllCities(
      City.getCitiesOfState("IN", "DL").map((city) => {
        return {
          value: city.name,
          label: city.name,
        };
      }),
    );
  }, []);

  useEffect(() => {
    getData(0).then();
  }, [city]);

  return (
    <HomePageLayout>
      <div className="primetime w-full">
        <Carousel />
      </div>
      <div className="homeRightSec w-full pt-4 lg:pt-16" id="scrollParent">
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
          {articlesId.length > 0 &&
            articleData.map((data: any, i: number) =>
              i < Math.min(articleData.length, 3) && articlesId[i] != undefined ? (
                <ArticleCard key={i} data={data} articlesId={articlesId[i]} />
              ) : (
                <></>
              ),
            )}
          <LimeLightContainer>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
              // onSlideChange={() => console.log("slide change")}
              loop={true}
              autoplay={{
                delay: 5 * 1000,
                disableOnInteraction: false,
              }}
            >
              {articleData.map((data: any, i: number) => {
                if (data?.limelight?.url) {
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
                if (data?.limelight?.url) {
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
                if (data?.limelight?.url) {
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
                if (data?.limelight?.url) {
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
                if (data?.limelight?.url) {
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

        <ArticleContainerScroll
          offset={3}
          articleData={articleData}
          articlesId={articlesId}
          hasMore={hasMore}
          getNext={getNext}
          id="scrollParent"
        />
      </div>
    </HomePageLayout>
  );
};
export default Home;
