import { ReactNode } from "react";

interface Props {
  name: string;
  icon: ReactNode;
  hoverColor: string;
  isActive: boolean;
  cat1Filter: any;
}

export default function CategoryBox({ name, icon, hoverColor, isActive, cat1Filter }: Props) {
  return (
    <div
      style={{
        padding: "calc(.3vw + .3vh)",
        paddingRight: "calc(.5vw + .5vh)",
        fontWeight: "600",
        cursor: "pointer",
      }}
      className="flex items-center bg-white/10 rounded-xl mx-2 shadow-lg shadow-slate-900/40 group"
      onClick={() => cat1Filter(name.toLowerCase())}
    >
      <div
        style={{ padding: "calc(.3vw + .3vh)" }}
        className={`rounded-full group-hover:bg-${hoverColor}-600 ${
          isActive ? `bg-${hoverColor}-600` : "bg-white/20"
        } mr-2 z-5 transition ease-in-out `}
      >
        {icon}
      </div>
      {name}
    </div>
  );
}
