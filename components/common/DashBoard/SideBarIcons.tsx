import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  route: string;
  icon: ReactNode;
  isActive: boolean;
}

export default function SideBarIcons({ route, icon, isActive }: Props) {
  return (
    <Link href={route} passHref>
      <div className={`${isActive ? "border-l-2 border-indigo-300" : ""}`}>
        <div
          className={`p-3 flex items-center justify-center m-3 cursor-pointer bg-white rounded-lg hover:text-white ${
            isActive ? "bg-opacity-10 text-white" : "bg-transparent text-gray-700"
          }`}
        >
          {icon}
        </div>
      </div>
    </Link>
  );
}
