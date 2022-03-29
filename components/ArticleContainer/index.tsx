import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ArticleContainer({ children }: Props) {
  return (
    <div style={{ gap: "5vh 1.5vw" }} className="w-11/12 m-auto flex flex-wrap">
      {children}
    </div>
  );
}
