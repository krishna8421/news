import NewPost from "@components/Profile/NewPost";
import ProfileSection from "@components/Profile/ProfileSection";
import HomePageLayout from "@layouts/HomePageLayout";
import { useState } from "react";
import { useAuth } from "@lib/context/AuthContext";

const bodyContent = (val: number) => {
  switch (val) {
    case 1:
      return <ProfileSection />;
    case 2:
      return <NewPost />;
    case 3:
      return <>draft</>;
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
          <button onClick={() => setVal(1)}>profile</button>
          <button onClick={() => setVal(2)}>new post</button>
          <button onClick={() => setVal(3)}>draft</button>
          <button onClick={() => setVal(4)}>need review</button>
          <button onClick={() => setVal(5)}>rejected</button>
          <button onClick={signOutUser}>Logout</button>
        </div>
        <div className="">{bodyContent(val)}</div>
      </div>
    </HomePageLayout>
  );
};
export default Profile;
