import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function CategoryMenu({ children }: Props) {
  return (
    <div className="my-4 w-11/12 m-auto h-16 overflow-y-hidden overflow-x-auto flex no-scrollbar items-center hover:bg-red">
      {children}
    </div>
  );
}
