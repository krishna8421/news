// import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import styles from "./Search.module.css";
// import { FaSearch } from "react-icons/fa";
// import { Input } from "@mantine/core";
import { useAuth } from "@lib/context/AuthContext";
import TagBox from "@components/TagBox";
import { useData } from "@lib/context/DataContext";
import React from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

interface Props {
  isSearchBoxOpen: boolean;
  closeSearch: () => void;
}

export default function Search({ isSearchBoxOpen, closeSearch }: Props) {
  const { user } = useAuth();
  const mockData = {
    tags: ["media", "mumbai", "ukraine", "tanmaybhat", "waronukraine", "russia"],
  };
  const [searchText, setSearchText] = React.useState("");
  const { profileImage } = useData();
  const searchAction = (val: any) => {
    setSearchText(val);
    if (val.length > 2) {
      // api call
      console.log("okok", val);
    }
  };

  return (
    <Transition appear show={isSearchBoxOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto z-[1000]" onClose={closeSearch}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/30 backdrop-blur" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              style={{ width: "90vw" }}
              className="transition-all  rounded-lg mt-[10vh] transform shadow-2xl inline-block overflow-hidden w-[21rem]"
            >
              <div
                className="bg-primary-background-900  h-12 rounded-lg flex items-center pr-10"
                style={{ color: "white" }}
              >
                <input
                  autoComplete="off"
                  type="text"
                  name="search"
                  placeholder="Search for topics, locations, editors & sources"
                  className="bg-primary-background-900 text-[calc(.9vw+.9vh)] text-white font-semibold bg-opacity-10 p-3 rounded-md w-full pl-10 focus:outline-none"
                  value={searchText}
                  onChange={(e) => searchAction(e.target.value)}
                />
                <FaSearch size={15} onClick={searchAction} />
              </div>
              <div
                style={{ maxHeight: "75vh", overflowY: "scroll", padding: "2vh 3vw" }}
                className="bg-[#292929] mt-4 rounded-lg text-white flex flex-col items-start p-4"
              >
                {searchText.length < 3 ? (
                  <>
                    {user && (
                      <>
                        <div>Hey,</div>
                        <span className="text-xl font-Righteous">
                          {user.displayName?.split(" ")[0] as string}
                        </span>
                      </>
                    )}
                    <div className="w-full mt-4 gap-2 bg-primary-background-900 rounded-lg h-16 flex flex-wrap p-2 px-4 overflow-hidden overflow-y-auto no-scrollbar">
                      {mockData.tags.map((tag, i) => (
                        <button key={i} onClick={() => searchAction(tag)}>
                          <TagBox key={i} tag={tag} />
                        </button>
                      ))}
                    </div>
                    <div
                      className="flex flex-wrap justify-between"
                      style={{ marginTop: "1.5vh", width: "100%" }}
                    >
                      <div className="searchMenuCategories">
                        <span>Hops</span> <button className="searchMenuCatNxtBtn">&gt;</button>
                      </div>
                      <div className="searchMenuCategories">
                        <span>Influencers</span>{" "}
                        <button className="searchMenuCatNxtBtn">&gt;</button>
                      </div>
                      <div className="searchMenuCategories">
                        <span>Community</span> <button className="searchMenuCatNxtBtn">&gt;</button>
                      </div>
                      <div className="searchMenuCategories">
                        <span>TCL</span> <button className="searchMenuCatNxtBtn">&gt;</button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-wrap justify-center">
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                    <div className="searchArticleCard">
                      <div className="searchArticleImg">
                        {profileImage ? (
                          <Image
                            src={profileImage}
                            alt="Profile Pic"
                            layout="fill"
                            objectFit="cover"
                            style={{ borderRadius: "calc(1vw + 1vh)" }}
                          />
                        ) : (
                          <>no img</>
                        )}
                      </div>
                      <div className="searchArticleText">
                        Toyota’s cheapest car 2022 Glanza launched in India: Check price, features
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
