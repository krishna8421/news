import Image from "next/image";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Props {
  name: string;
  imgUrl: string;
  isAuth: boolean;
}

export default function NavBar({ isAuth = false, name, imgUrl }: Props) {
  const router = useRouter();
  const [greetings, setGreetings] = useState("");
  useEffect(() => {
    return () => {
      const time = new Date().getHours();
      if (time >= 0 && time < 12) {
        setGreetings("Morning");
      } else if (time >= 12 && time < 18) {
        setGreetings("Afternoon");
      } else {
        setGreetings("Evening");
      }
    };
  }, []);
  return (
    <div
      className="h-16 flex justify-between px-5 items-center w-full sticky top-0 z-50 backdrop-blur bg-white/75 border-gray-100 border-b-2">
      <div className="font-semibold font-Cinzel text-2xl cursor-pointer" onClick={async () => {
        await router.push("/");
      }}>

        NEWS
      </div>
      {isAuth ? (
        <div className="flex items-center">
          <div className="mr-4 font-Poppins">
            <h3 className="text-slate-600 text-sm mr-8">Good {greetings},</h3>
            <h1 className="font-semibold">{name}</h1>
          </div>
          {imgUrl ? (
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
        </div>
      ) : (
        <div className="flex items-center">
          <h3 className="mr-5 cursor-pointer" onClick={async () => {
            await router.push("/auth/login");
          }}>Login</h3>
          <div className="cursor-pointer bg-black text-white rounded-full px-8 py-3" onClick={async () => {
            await router.push("/auth/register");
          }}>
            Register
          </div>
        </div>
      )}

    </div>
  );
}
