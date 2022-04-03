import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import RedBackground from "../../../public/red-background-rec.png";
import LikeIcon from "../../../public/Like Icon.png";
import ViewIcon from "../../../public/Views icon.png";
import { MdModeEditOutline } from "react-icons/md";
import { Input, Textarea } from "@mantine/core";
import { IoIosSave } from "react-icons/io";
import { useData } from "@lib/context/DataContext";
import { useAuth } from "@lib/context/AuthContext";
import { Avatar } from "@mantine/core";

const ProfileSection = () => {
  const { name, designation, bio, profileImage, updateName, updateBio, updateDesignation } =
    useData();
  const { uid } = useAuth();

  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState("");
  const [newBio, setNewBio] = useState("");
  const [newDesignation, setNewDesignation] = useState("");
  // const [newProfileImage, setNewProfileImage] = useState("");

  useEffect(() => {
    setNewName(name);
    setNewBio(bio);
    setNewDesignation(designation);
  }, [name, designation, bio]);

  const handleEdit = () => {
    if (editMode) {
      if (name !== newName) {
        updateName(newName, uid as string);
      }
      if (bio !== newBio) {
        updateBio(newBio, uid as string);
      }
      if (designation !== newDesignation) {
        updateDesignation(newDesignation, uid as string);
      }
      return setEditMode(false);
    } else if (!editMode) {
      return setEditMode(true);
    }
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
          {profileImage ? (
            <Image
              src={profileImage}
              alt="Profile Pic"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          ) : (
            <Avatar
              radius="xl"
              sx={{
                height: "calc(7vw + 7vh)",
                width: "calc(7vw + 7vh)",
                borderRadius: "100%",
                position: "relative",
                "@media screen and (max-width: 640px)": {
                  margin: "0 auto 4vh",
                  height: "calc(10vw + 10vh)",
                  width: "calc(10vw + 10vh)",
                },
              }}
            >
              {name.split("")[0]}
            </Avatar>
          )}
        </div>
        <div className="proContent">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="proContentHeading">
              <div style={{ display: "flex", alignItems: "flex-end" }} className="mb-2">
                {editMode ? (
                  <Input
                    size="md"
                    variant="unstyled"
                    value={newName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)}
                    classNames={{
                      unstyledVariant: "border-b border-primary-red focus:border-primary-red",
                      input: "text-2xl font-Righteous text-slate-300 h-auto",
                    }}
                  />
                ) : (
                  <div className="pb-1 text-2xl font-Righteous text-slate-300">{newName}</div>
                )}
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
                  padding: "calc(.3vw + .3vh)",
                  backgroundColor: "#E50914",
                  borderRadius: "calc(.3vw + .3vh)",
                  cursor: "pointer",
                }}
                onClick={handleEdit}
              >
                {!editMode ? <MdModeEditOutline /> : <IoIosSave />}
              </div>
            </div>
            <div style={{ marginBottom: "2.5vh", fontSize: "calc(.7vw + .7vh)" }}>
              {editMode ? (
                <Input
                  size="md"
                  variant="unstyled"
                  value={newDesignation}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setNewDesignation(e.target.value)}
                  classNames={{
                    unstyledVariant: "border-b border-primary-red focus:border-primary-red",
                    input: "text-xs font-Inter w-24 text-slate-300 h-auto",
                  }}
                />
              ) : (
                <div className="text-xs font-Inter text-slate-300">{newDesignation}</div>
              )}
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
              {editMode ? (
                <Textarea
                  className="w-full"
                  minRows={4}
                  maxRows={6}
                  classNames={{
                    unstyledVariant: "border-b border-primary-red focus:border-primary-red",
                    input: "text-sm font-Montserrat font-medium text-slate-300 h-auto p-0",
                  }}
                  variant="unstyled"
                  value={newBio}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNewBio(e.target.value)}
                />
              ) : (
                <div className="text-sm font-Montserrat font-medium text-slate-300">{newBio}</div>
              )}
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
            <div className="proArticleSec">
              <div className="proArticleCard">
                <div className="proArticleImg">
                  {profileImage ? (
                    <Image
                      src={profileImage}
                      alt="Profile Pic"
                      layout="fill"
                      objectFit="cover"
                      style={{ borderRadius: "calc(1vw + 1vh)" }}
                    />
                  ) : (
                    <>no image</>
                  )}
                </div>
                <div className="proArticleTxt">
                  Akshay Kumar cheers for Anupam Khers The Kashmir Files; Says, Amazing to see the
                  audience back to the cinemas in large numbers
                </div>
              </div>
              <div className="proArticleCard">
                <div className="proArticleImg">
                  {profileImage ? (
                    <Image
                      src={profileImage}
                      alt="Profile Pic"
                      layout="fill"
                      objectFit="cover"
                      style={{ borderRadius: "calc(1vw + 1vh)" }}
                    />
                  ) : (
                    <>no image</>
                  )}
                </div>
                <div className="proArticleTxt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam sem magna
                </div>
              </div>
              <div className="proArticleCard">
                <div className="proArticleImg">
                  {profileImage ? (
                    <Image
                      src={profileImage}
                      alt="Profile Pic"
                      layout="fill"
                      objectFit="cover"
                      style={{ borderRadius: "calc(1vw + 1vh)" }}
                    />
                  ) : (
                    <>no image</>
                  )}
                </div>
                <div className="proArticleTxt">
                  Akshay Kumar cheers for Anupam Khers The Kashmir Files; Says, Amazing to see the
                  audience back to the cinemas in large numbers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
