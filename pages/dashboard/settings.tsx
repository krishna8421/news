import Dashboard from "@layouts/DashBoard";
import { NextPage } from "next";
import Image from "next/image";
import Avatar from "react-avatar";
import { signOut } from "firebase/auth";
import { useAuth } from "@lib/context/AuthContext";
import { auth } from "@lib/firebase/client";
import { useRouter } from "next/router";

const Settings: NextPage = () => {
  const { user, setError } = useAuth();
  const router = useRouter();
  return (
    <Dashboard>
      <div>
        <h3 className="font-Poppins font-semibold text-xl text-gray-600 mb-8">Settings</h3>
        <div className="flex items-center flex-col justify-center md:mr-20 mr-4">
          {user?.photoURL ? (
            <Image
              src={user?.photoURL}
              width={200}
              height={200}
              alt="Profile Picture"
              className="rounded-full"
            />
          ) : (
            <Avatar size="200" name={user?.displayName as string} round={true} textSizeRatio={2} />
          )}
          <div className=" mt-16">
            <div className="flex mb-8 flex-wrap">
              <h3 className="font-Poppins font-medium md:text-xl text-md text-gray-900 md:mr-8 mr-4">
                Name:
              </h3>
              <h3 className="font-Poppins font-medium md:text-xl text-md text-gray-900">
                {user?.displayName as string}
              </h3>
            </div>
            <div className="flex mb-8 flex-wrap">
              <h3 className="font-Poppins font-medium md:text-xl text-md text-gray-900  md:mr-8 mr-4">
                Email:
              </h3>
              <h3 className="font-Poppins font-medium md:text-xl text-md text-gray-900">
                {user?.email as string}
              </h3>
            </div>
          </div>
          <button
            className="bg-[#FA6364] px-7 py-3 rounded text-white mt-16 font-semibold"
            onClick={async () => {
              try {
                await router.push("/");
                await signOut(auth);
              } catch (error: any) {
                setError(error.message);
              }
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </Dashboard>
  );
};

export default Settings;
