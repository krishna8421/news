import NavBar from "@common/NavBar";
import { ReactNode, useState } from "react";
import AuthLayout from "@layouts/AuthLayout";
import Login from "@common/Auth/Login";
import Register from "@common/Auth/Register";
import { IoMdClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@lib/context/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@lib/firebase/client";

interface Props {
  children: ReactNode;
}

export default function HomeLayout({ children }: Props) {
  const { isAuth, setError } = useAuth();

  const authWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error: any) {
      setError(error.message);
      console.log(error);
    }
  };

  const defaultAuthPopUpState = {
    show: false,
    type: "",
  };
  const [showAuthPopUp, setShowAuthPopUp] = useState(defaultAuthPopUpState);
  const closeAuthPopUp = () => {
    setShowAuthPopUp(defaultAuthPopUpState);
  };
  return (
    <div className=" min-h-screen w-full bg-primary-dark text-gray-300 relative overflow-hidden">
      {showAuthPopUp.show && (
        <AuthLayout>
          <div className="bg-black w-[28.5rem]  rounded-md border border-slate-800 flex flex-col mt-16 bg-indigo-600">
            <div className="flex justify-end p-3">
              <button
                className="bg-gray-800 p-1 rounded hover:bg-gray-700 hover:scale-105 transition ease-in-out"
                onClick={closeAuthPopUp}
              >
                <IoMdClose size={20} />
              </button>
            </div>
            {showAuthPopUp.type === "login" && <Login closeAuthPopUp={closeAuthPopUp} />}
            {showAuthPopUp.type === "register" && <Register closeAuthPopUp={closeAuthPopUp} />}
            <div className="w-8/12 mx-auto flex flex-col items-center justify-center">
              <h4>OR</h4>
              <div className="relative bg-white text-black flex items-center p-3 px-6 rounded-md w-72 mt-4 cursor-pointer">
                <div className="absolute ml-4">
                  <FcGoogle size={30} />
                </div>
                <button
                  onClick={async (e) => {
                    e.preventDefault();
                    await authWithGoogle();
                  }}
                >
                  <a className="pl-16">
                    {showAuthPopUp.type === "login" ? "Sign In with Google" : "Sign Up with Google"}
                  </a>
                </button>
              </div>
            </div>
            <div className="my-8  flex w-full cursor-pointer justify-center">
              <a
                onClick={() => {
                  if (showAuthPopUp.type === "login") {
                    setShowAuthPopUp({ ...showAuthPopUp, type: "register" });
                  } else {
                    setShowAuthPopUp({ ...showAuthPopUp, type: "login" });
                  }
                }}
              >
                {showAuthPopUp.type === "login"
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </a>
            </div>
          </div>
        </AuthLayout>
      )}
      <NavBar isAuth={isAuth} setShowAuthPopUp={setShowAuthPopUp} />
      {children}
    </div>
  );
}
