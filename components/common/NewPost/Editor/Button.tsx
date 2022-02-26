import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  icon: ReactNode;
  isActive?: boolean;
}

export default function Button({ onClick, icon, isActive = false }: Props) {
  return (
    <button
      onClick={onClick}
      className={`border border-gray-400 rounded-lg p-2 md:m-2  ${
        isActive ? "bg-gray-900 text-white" : ""
      }`}
    >
      {icon}
    </button>
  );
}
