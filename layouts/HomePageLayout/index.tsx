import { ReactNode, useState } from "react";
import NavBar from "@components/NavBar";
import AuthModal from "@components/AuthModal";
import { IAuthModal, IAuthModalType } from "@interface/AuthModal.interface";

interface Props {
  children: ReactNode;
}

export default function HomePageLayout({ children }: Props) {
  const isOpenInitialState: IAuthModal = {
    value: false,
    type: "close",
  };
  let [isOpen, setIsOpen] = useState<IAuthModal>(isOpenInitialState);
  const closeAuthModal = () => setIsOpen(isOpenInitialState);
  const openAuthModal = (type: IAuthModalType) => setIsOpen({ value: true, type });
  return (
    <div
      className="bg-primary-background-900 h-screen w-screen text-gray-300 overflow-x-hidden text-gray-300"
      id="subScrollParent"
    >
      <AuthModal
        closeAuthModal={closeAuthModal}
        openAuthModal={openAuthModal}
        isAuthModalOpen={isOpen.value}
        authModalType={isOpen.type}
      />
      <NavBar openAuthModal={openAuthModal} />
      <div className=" flex w-screen flex-wrap lg:flex-nowrap">{children}</div>
    </div>
  );
}
