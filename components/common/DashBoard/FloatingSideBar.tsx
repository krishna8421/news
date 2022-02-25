import Link from "next/link";
import { AiFillHome, AiTwotoneSetting, AiTwotoneHeart, AiOutlineLogout } from "react-icons/ai";
import { IoAddCircle } from "react-icons/io5";
import SideBarIcons from "@common/DashBoard/SideBarIcons";
import { useRouter } from "next/router";

/**
 * TODO
 * Work on the isActive state of the buttons
 **/
export default function FloatingSideBar() {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;
  const navRoutes = {
    root: "/",
    home: "/dashboard/home",
    new: "/dashboard/new",
    liked: "/dashboard/liked",
    settings: "/dashboard/settings",
  };
  const logout = async () => {
    localStorage.removeItem("token");
    await router.push(navRoutes.root);
  };
  return (
    <div className="h-screen w-16 bg-white flex flex-col fixed z-50">
      <div className="font-Cinzel text-4xl h-16 p-3 font-medium hover:cursor-pointer w-full flex justify-center items-center bg-indigo-600 text-slate-100">
        <Link href={navRoutes.root} passHref>
          <a>
            N
          </a>
        </Link>
      </div>
      <div className={`flex justify-between flex-col bg-slate-900 h-full`}>
        <div className="flex justify-between flex-col  h-full">
          <div>
            <SideBarIcons route={navRoutes.home} icon={<AiFillHome />} isActive={isActive(navRoutes.home)} />
            <SideBarIcons route={navRoutes.new} icon={<IoAddCircle />} isActive={isActive(navRoutes.new)} />
            <SideBarIcons route={navRoutes.liked} icon={<AiTwotoneHeart />} isActive={isActive(navRoutes.liked)} />
            <SideBarIcons route={navRoutes.settings} icon={<AiTwotoneSetting />}
                          isActive={isActive(navRoutes.settings)} />
          </div>
          <div>
            <div
              className={`p-3 flex items-center justify-center m-3 cursor-pointer bg-white rounded-lg hover:text-white text-red-500 bg-transparent hover:bg-red-500`}
              onClick={logout}
            >
              <AiOutlineLogout />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

