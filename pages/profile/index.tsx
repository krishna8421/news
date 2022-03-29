import NewPost from "@components/Profile/NewPost";
import Drafts from "@components/Profile/Drafts";
import ProfileSection from "@components/Profile/ProfileSection";
import HomePageLayout from "@layouts/HomePageLayout";
import { useState } from "react";
import { useAuth } from "@lib/context/AuthContext";
import Image from "next/image";
import ProfileIcon from "../../public/Selected profile.png";
import NewPostIcon from "../../public/Selected new icon.png";
import DraftsIcon from "../../public/Drafts icon selected.png";
import NeedReviewIcon from "../../public/Need review selected.png";
import RejectedIcon from "../../public/Rejected selected.png";

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
            <span className="drawerBtnIcon">
              <Image src={ProfileIcon} alt="Profile Icon" objectFit="cover" />
            </span>
            <div className="drawerBtnTxt">Profile</div>
          </button>
          <button className={val == 2 ? "drawerBtnActive" : "drawerBtn"} onClick={() => setVal(2)}>
            <span className="drawerBtnIcon">
              <Image src={NewPostIcon} alt="Profile Icon" objectFit="cover" />
            </span>
            <div className="drawerBtnTxt">Create New Post</div>
          </button>
          <button className={val == 3 ? "drawerBtnActive" : "drawerBtn"} onClick={() => setVal(3)}>
            <span className="drawerBtnIcon">
              <Image src={DraftsIcon} alt="Profile Icon" objectFit="cover" />
            </span>
            <div className="drawerBtnTxt">Drafts</div>
          </button>
          <button className={val == 4 ? "drawerBtnActive" : "drawerBtn"} onClick={() => setVal(4)}>
            <span className="drawerBtnIcon">
              <Image src={NeedReviewIcon} alt="Profile Icon" objectFit="cover" />
            </span>
            <div className="drawerBtnTxt">Need Review</div>
          </button>
          <button className={val == 5 ? "drawerBtnActive" : "drawerBtn"} onClick={() => setVal(5)}>
            <span className="drawerBtnIcon">
              <Image src={RejectedIcon} alt="Profile Icon" objectFit="cover" />
            </span>
            <div className="drawerBtnTxt">Rejected</div>
          </button>
          <button className={val == 6 ? "drawerBtnActive" : "drawerBtn"} onClick={signOutUser}>
            <span className="drawerBtnIcon">
              <Image src={ProfileIcon} alt="Profile Icon" objectFit="cover" />
            </span>
            Logout
          </button>
        </div>
        <div className="">{bodyContent(val)}</div>
      </div>
    </HomePageLayout>
  );
};
export default Profile;
