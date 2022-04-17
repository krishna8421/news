import { useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useAuth } from "@lib/context/AuthContext";
import TagBox from "@components/TagBox";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@firebase/client";
import SearchResultBox from "@components/SearchResultBox/SearchResultBox";

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
  const [searchResults, setSearchResults] = useState([]);

  const searchAction = (val: any) => {
    setSearchText(val);
  };

  const search = async (searchTerm: string[]) => {
    const ArticleRef = collection(db, "articles");
    const q = query(ArticleRef, where("tags", "array-contains-any", searchTerm));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc);
  };

  useEffect(() => {
    if (searchText.length > 2) {
      setSearchResults([]);
      const searchTextArr = searchText.trim().split(" ");
      search(searchTextArr).then((res: any) => {
        setSearchResults(res);
      });
    }
  }, [searchText]);
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
                      <span>Influencers</span> <button className="searchMenuCatNxtBtn">&gt;</button>
                    </div>
                    <div className="searchMenuCategories">
                      <span>Community</span> <button className="searchMenuCatNxtBtn">&gt;</button>
                    </div>
                    <div className="searchMenuCategories">
                      <span>TCL</span> <button className="searchMenuCatNxtBtn">&gt;</button>
                    </div>
                  </div>
                </>

                <div className="w-full flex gap-4 py-4">
                  {searchResults.length <= 0 ? (
                    <div className="w-full font-Montserrat ">No Search Results</div>
                  ) : (
                    searchResults.map((result: any, i) => {
                      const title = result.data().title;
                      const imgUrl = result.data().normalImage1.url;
                      const id = result.id;
                      return <SearchResultBox title={title} imgUrl={imgUrl} id={id} key={i} />;
                    })
                  )}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
