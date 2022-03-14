import { ReactNode } from "react";

// import { IconContext } from "react-icons";

interface Props {
  name: string;
  icon: ReactNode;
  hoverColor: string;
  categoryBoxOnClickHandler: (categoryName: string) => void;
}

export default function CategoryBox({ name, icon, hoverColor, categoryBoxOnClickHandler }: Props) {
  return (
    <div
      className="flex items-center bg-white/10 px-2 py-2.5 pr-6 rounded-xl mx-2 shadow-lg shadow-slate-900/40 group"
      onClick={() => categoryBoxOnClickHandler(name.toLowerCase())}
    >
      <div
        className={`p-2 rounded-full bg-white/20 mr-2 z-5 group-hover:bg-${hoverColor}-500/70 transition ease-in-out `}
      >
        {/*<IconContext.Provider value={{ color: "white" }}>*/}
        {icon}
        {/*</IconContext.Provider>*/}
      </div>
      {name}
    </div>
  );
}
