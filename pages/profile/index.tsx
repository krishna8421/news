import HomePageLayout from "@layouts/HomePageLayout";
import { useState } from "react";
import NewPost from "./NewPost";
import ProfileSection from "./ProfileSection";

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

  return (
    <HomePageLayout>
      <div className="drawer">
        <button onClick={() => setVal(1)}>profile</button>
        <button onClick={() => setVal(2)}>create new post</button>
        <button onClick={() => setVal(3)}>draft</button>
        <button onClick={() => setVal(4)}>need review</button>
        <button onClick={() => setVal(5)}>rejected</button>
      </div>
      <div className="" style={{}}>
        {bodyContent(val)}
      </div>
    </HomePageLayout>
  );
};
export default Profile;
