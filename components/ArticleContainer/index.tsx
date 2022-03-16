import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ArticleContainer({ children }: Props) {
  return <div className="w-11/12 m-auto flex gap-6 flex-wrap justify-center p-8">{children}</div>;
}
