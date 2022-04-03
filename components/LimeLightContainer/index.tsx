import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

export default function LimeLightContainer({ children }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="relative w-24 h-12">
        <Image
          src="/LimeLightLogo.png"
          alt="LimeLight"
          layout="fill"
          objectFit="cover"
          className="rounded absolute"
          priority={true}
        />
      </div>

      <div
        style={{ gap: "5vh 1.5vw" }}
        className="flex w-full no-scrollbar m-auto overflow-y-hidden overflow-x-auto items-center"
      >
        {children}
      </div>
    </div>
  );
}
