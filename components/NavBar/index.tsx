import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@lib/constants";
import { useAuth } from "@lib/context/AuthContext";
import Avatar from "react-avatar";
import PageLoading from "@components/PageLoading";

export default function NavBar() {
  const { user, isAuth, loading } = useAuth();
  if (loading) return <PageLoading />;
  return (
    <div className="h-16 w-screen flex  justify-between items-center px-4 fixed top-0 bg-black/5 backdrop-blur-lg z-40">
      <Link href="/" passHref>
        <div className="relative h-8 w-36 overflow-hidden cursor-pointer">
          <Image
            src="/logo.png"
            alt={SITE_NAME}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority={true}
          />
        </div>
      </Link>
      {isAuth ? (
        <Link href="/profile">
          <a className="cursor-pointer">
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
          </a>
        </Link>
      ) : (
        <div className="flex items-center">
          <h3 className="mr-5 cursor-pointer">Login</h3>
          <div className="cursor-pointer bg-primary-red text-white rounded-full px-6 py-2">
            Register
          </div>
        </div>
      )}
    </div>
  );
}
