// import { useState, useRef, Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { IAuthModalType } from "@interface/AuthModal.interface";
// import Image from "next/image";

interface Props {
  closeAuthModal: () => void;
  openAuthModal: (type: IAuthModalType) => void;
  isAuthModalOpen: boolean;
}

export default function AuthModal({ closeAuthModal, isAuthModalOpen }: Props) {
  return (
    <Dialog
      open={isAuthModalOpen}
      onClose={closeAuthModal}
      className="fixed inset-0 overflow-y-auto z-50 pt-[10vh]"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-md" />
      <div className="relative w-5 h-5 bg-gray-500"></div>
    </Dialog>
  );
}
