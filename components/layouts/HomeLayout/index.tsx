import NavBar from "@common/NavBar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function HomeLayout({ children }: Props) {
  return (
    <div className="min-h-screen w-full bg-primary-dark text-gray-300">
      <NavBar isAuth={false} />
      {children}
    </div>
  );
}
