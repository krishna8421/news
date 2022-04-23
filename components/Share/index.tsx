import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
// import { useRouter } from "next/router";
import { Input } from "@mantine/core";
import { useState, useEffect } from "react";
import { MdContentCopy } from "react-icons/md";

interface Props {
  isShareBoxOpen: boolean;
  closeShare: () => void;
  articleId: string;
}

export default function Share({ isShareBoxOpen, closeShare, articleId }: Props) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(`${process.env.BASE_URL}/article/${articleId}`);
  }, [articleId]);

  return (
    <Transition appear show={isShareBoxOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-y-auto z-[1000]" onClose={closeShare}>
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
              className="transition-all  rounded-lg mt-[10vh] transform  inline-block overflow-hidden w-[21rem]"
            >
              <div
                className="bg-primary-background-900 rounded-2xl border-slate-800 border flex flex-col justify-center shadow-2xl py-[2rem] gap-4 px-[4rem] w-[30rem] mx-auto"
                style={{ color: "white" }}
              >
                <p className="font-Righteous text-lg ">Share</p>
                <div className="flex gap-6 items-center">
                  <Input
                    variant="filled"
                    placeholder="URL"
                    value={url}
                    onChange={(e: any) => setUrl(e.target.value)}
                  />
                  {/* </><div className="rounded bg-gray-200">
                </div> */}
                  <div
                    className="rounded-full cursor-pointer p-2 hover:animate-pulse hover:bg-zinc-800 "
                    onClick={() => {
                      navigator.clipboard.writeText(url);
                    }}
                  >
                    <MdContentCopy />
                  </div>
                </div>
                <div className="flex gap-2 justify-around w-full mt-4">
                  <EmailShareButton url={url as string}>
                    <EmailIcon size={32} round={true} />
                  </EmailShareButton>
                  <FacebookShareButton url={url as string}>
                    <FacebookIcon size={32} round={true} />
                  </FacebookShareButton>
                  <WhatsappShareButton url={url as string}>
                    <WhatsappIcon size={32} round={true} />
                  </WhatsappShareButton>
                  <TelegramShareButton url={url as string}>
                    <TelegramIcon size={32} round={true} />
                  </TelegramShareButton>
                  <TwitterShareButton url={url as string}>
                    <TwitterIcon size={32} round={true} />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
