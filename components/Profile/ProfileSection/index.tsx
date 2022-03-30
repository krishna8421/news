import Image from "next/image";
import { useState } from "react";
import RedBackground from "../../../public/red-background-rec.png";
import LikeIcon from "../../../public/Like Icon.png";
import ViewIcon from "../../../public/Views icon.png";
import { MdModeEditOutline } from "react-icons/md";

const ProfileSection = () => {
  const [editMode, setEditMode] = useState(false);
  const mockData = {
    mainImg: "https://source.unsplash.com/1200x900/?news",
    authorProfile: "https://source.unsplash.com/100x100/?man",
    name: "Sushant Mishra",
    bio: "Laboris amet deserunt dolor aliqua exercitation adipisicing excepteur cillum ipsum commodo eiusmod. Quis est sit occaecat cupidatat aute ea nostrud est sit elit. Commodo officia sit enim ullamco veniam.",
  };
  return (
    <div className="proSecBody">
      <div className="hidden sm:block w-[80vw]">
        <Image
          src={RedBackground}
          alt="Profile Banner"
          height={"200%"}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="proImg">
          <Image
            src={mockData.authorProfile}
            alt="Profile Pic"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="proContent">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="proContentHeading">
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                {mockData.name}
                <div
                  style={{
                    width: "calc(1.5vw + 1.5vh)",
                    height: "calc(1.5vw + 1.5vh)",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "1vw",
                  }}
                >
                  <Image
                    src="/verified.png"
                    alt="Verified icon"
                    width={200}
                    height={200}
                    className="w-[1vw] h-[1vh]"
                  />
                </div>
              </div>
              <div
                style={{
                  padding: "calc(.2vw + .2vh)",
                  backgroundColor: "#E50914",
                  borderRadius: "calc(.3vw + .3vh)",
                  cursor: "pointer",
                }}
                onClick={() => setEditMode(!editMode)}
              >
                <MdModeEditOutline />
              </div>
            </div>
            <div style={{ marginBottom: "2.5vh", fontSize: "calc(.7vw + .7vh)" }}>
              Editor in chief
            </div>
            <div style={{ marginBottom: "3vh", display: "flex" }}>
              <div className="likeNView">
                <div className="likeNViewIcon">
                  <Image src={LikeIcon} alt="Like Icon" objectFit="cover" />
                </div>{" "}
                242
              </div>
              <div className="likeNView">
                <div className="likeNViewIcon">
                  <Image src={ViewIcon} alt="View Icon" objectFit="cover" />
                </div>{" "}
                745
              </div>
            </div>
            <div
              style={{
                marginBottom: ".5vh",
                fontWeight: "600",
                fontSize: "calc(1vw + 1vh)",
                fontFamily: "Segoe UI",
              }}
            >
              Bio
            </div>
            <div
              style={{
                marginBottom: "3vh",
                border: "calc(.1vw + .1vh) solid #303030",
                borderRadius: "calc(.3vw + .3vh)",
                padding: ".5vh 1vw",
                fontSize: "calc(.7vw + .7vh)",
              }}
            >
              {mockData.bio}
            </div>
            <div style={{ marginBottom: "2.5vh", fontWeight: "600", fontSize: "calc(1vw + 1vh)" }}>
              Total Content Uploaded
              <span
                style={{
                  backgroundColor: "#E50914",
                  color: "white",
                  padding: ".4vh 1vw",
                  borderRadius: "1vh",
                  marginLeft: "1vw",
                  fontFamily: "Segoe UI",
                  fontWeight: "400",
                  fontSize: "calc(1vw + 1vh)",
                }}
              >
                23
              </span>
            </div>
            <div>carousel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
