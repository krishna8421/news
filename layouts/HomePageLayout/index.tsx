import { ReactNode } from "react";
import NavBar from "@components/NavBar";

interface Props {
  children: ReactNode;
}

export default function HomePageLayout({ children }: Props) {
  return (
    <div className="bg-black h-screen w-screen text-gray-300 overflow-x-hidden text-gray-300">
      <NavBar />
      <div className=" flex w-screen flex-wrap lg:flex-nowrap">{children}</div>
    </div>
  );
}
