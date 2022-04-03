// import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import styles from "./Search.module.css";
// import { FaSearch } from "react-icons/fa";
// import { Input } from "@mantine/core";
import { useAuth } from "@lib/context/AuthContext";
import TagBox from "@components/TagBox";

interface Props {
  isSearchBoxOpen: boolean;
  closeSearch: () => void;
}

export default function Search({ isSearchBoxOpen, closeSearch }: Props) {
  const { user } = useAuth();
  const mockData = {
    tags: ["media", "mumbai", "ukraine", "tanmaybhat", "waronukraine", "russia"],
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
          {/* <span className="inline-block h-screen pt-[10vh]" aria-hidden="true">
            &#8203;
          </span> */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="transition-all  rounded-lg mt-[10vh] transform shadow-2xl inline-block overflow-hidden w-[21rem]">
              <div className="bg-[#292929] h-12 rounded-lg"></div>
              <div className="bg-[#292929] mt-4 rounded-lg text-white flex flex-col items-start p-4">
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
                    <TagBox key={i} tag={tag} />
                  ))}
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
