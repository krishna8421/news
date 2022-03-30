import NewPost from "@components/Profile/NewPost";
import Drafts from "@components/Profile/Drafts";
import ProfileSection from "@components/Profile/ProfileSection";
import HomePageLayout from "@layouts/HomePageLayout";
import { useState } from "react";
import { useAuth } from "@lib/context/AuthContext";
import Image from "next/image";
import NeedReviewIcon from "../../public/Need review selected.png";
import RejectedIcon from "../../public/Rejected selected.png";
import { IoMdLogOut } from "react-icons/io";
import { withAuth } from "@lib/hooks/withAuth";
import { CgProfile } from "react-icons/cg";
import { MdModeEditOutline } from "react-icons/md";
import { MdDrafts } from "react-icons/md";

const bodyContent = (val: number) => {
  switch (val) {
    case 1:
      return <ProfileSection />;
    case 2:
      return <NewPost />;
    case 3:
      return <Drafts />;
    case 4:
      return <>need review</>;
    case 5:
      return <>rejected</>;
    default:
      return null;
  }
};

const Profile = () => {
  const [val, setVal] = useState(1);
  const { signOutUser } = useAuth();
  return (
    <HomePageLayout>
      <div className="mt-16">
        <div className="drawer">
          <button className={val == 1 ? "drawerBtnActive" : "drawerBtn"} onClick={() => setVal(1)}>
            <span className="p-[5px] sm:mr-4 bg-white rounded-full">
              <CgProfile color="red" />
            </span>
            <div className="drawerBtnTxt hidden sm:block">Profile</div>
          </button>
          <button className={val == 2 ? "drawerBtnActive" : "drawerBtn"} onClick={() => setVal(2)}>
            <span className="p-[5px] sm:mr-4 bg-white rounded-full">
              <MdModeEditOutline color="red" />
            </span>
            <div className="drawerBtnTxt hidden sm:block">Create New Post</div>
          </button>
          <button className={val == 3 ? "drawerBtnActive" : "drawerBtn"} onClick={() => setVal(3)}>
            <span className="p-[5px] sm:mr-4 bg-white rounded-full">
              <MdDrafts color="red" />
            </span>
            <div className="drawerBtnTxt hidden sm:block">Drafts</div>
          </button>
          <button className={val == 4 ? "drawerBtnActive" : "drawerBtn"} onClick={() => setVal(4)}>
            <span className="drawerBtnIcon">
              <Image src={NeedReviewIcon} alt="Profile Icon" objectFit="cover" />
            </span>
            <div className="drawerBtnTxt hidden sm:block">Need Review</div>
          </button>
          <button className={val == 5 ? "drawerBtnActive" : "drawerBtn"} onClick={() => setVal(5)}>
            <span className="drawerBtnIcon">
              <Image src={RejectedIcon} alt="Profile Icon" objectFit="cover" />
            </span>
            <div className="drawerBtnTxt hidden sm:block">Rejected</div>
          </button>
          <button className="drawerBtn" onClick={signOutUser}>
            <span className="p-[5px] mr-4 bg-white rounded-full">
              <IoMdLogOut color="red" />
            </span>
            <div className="drawerBtnTxt hidden sm:block">Logout</div>
          </button>
        </div>
        <div className="">{bodyContent(val)}</div>
      </div>
    </HomePageLayout>
  );
};
export default withAuth(Profile);
