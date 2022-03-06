import Image from "next/image";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@lib/context/AuthContext";
import Link from "next/link";
import { greeting } from "@lib/utils/greet";

interface ShowAuthPopUpType {
  show: boolean;
  type: string;
}

interface Props {
  isAuth: boolean;
  setShowAuthPopUp: ({ show, type }: ShowAuthPopUpType) => void;
}

export default function NavBar({ isAuth = false, setShowAuthPopUp }: Props) {
  const { user } = useAuth();
  const [name, setName] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");
  const [greet, setGreet] = useState<string>("");

  useEffect(() => {
    if (user) {
      setName(user.displayName as string);
      if (user.photoURL) {
        setImgUrl(user.photoURL as string);
      }
    }
  }, [user]);

  const router = useRouter();

  useEffect(() => {
    setGreet(greeting());
  }, []);

  return (
    <div className="h-16 flex justify-between px-5 items-center w-full top-0 z-10 bg-black fixed">
      <div
        className="font-semibold font-Cinzel text-2xl cursor-pointer"
        onClick={async () => {
          await router.push("/");
        }}
      >
        NEWS
      </div>
      {isAuth ? (
        <div className="flex items-center">
          <div className="mr-4 font-Poppins">
            <h3 className="text-slate-200 text-xs mr-8">Good {greet},</h3>
            <h1 className="">{name}</h1>
          </div>
          <Link href="/dashboard">
            <a className="cursor-pointer">
              {imgUrl !== "" ? (
                <Image
                  src={imgUrl}
                  width={40}
                  height={40}
                  alt="User Avatar"
                  className="rounded-full"
                />
              ) : (
                <Avatar size="40" name={name} round={true} />
              )}
            </a>
          </Link>
        </div>
      ) : (
        <div className="flex items-center">
          <h3
            className="mr-5 cursor-pointer"
            onClick={() => {
              setShowAuthPopUp({
                show: true,
                type: "login",
              });
            }}
          >
            Login
          </h3>
          <div
            className="cursor-pointer bg-primary-red text-white rounded-full px-6 py-2"
            onClick={() => {
              setShowAuthPopUp({
                show: true,
                type: "register",
              });
            }}
          >
            Register
          </div>
        </div>
      )}
    </div>
  );
}
