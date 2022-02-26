import NavBar from "@common/NavBar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Auth({ children }:Props) {
  return(
    <div className="min-h-screen w-full">
      <NavBar/>
      {children}
    </div>
  )
}
