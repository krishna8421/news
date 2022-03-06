import Image from "next/image";
import Avatar from "react-avatar";
import { useAuth } from "@lib/context/AuthContext";

export default function Nav() {
  const { user } = useAuth();

  return (
    <div className="h-16 flex justify-end px-5 items-center w-[calc(100%-4rem)] fixed z-50 backdrop-blur bg-white/75 border-gray-100 border-b-2">
      {user?.photoURL ? (
        <Image
          src={user?.photoURL as string}
          width={40}
          height={40}
          alt="User Avatar"
          className="rounded-full"
        />
      ) : (
        <Avatar size="40" name={user?.displayName as string} round={true} />
      )}
    </div>
  );
}
