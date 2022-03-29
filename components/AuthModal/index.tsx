import { Dialog } from "@headlessui/react";
import { IAuthModalType } from "@interface/AuthModal.interface";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { auth, db } from "@firebase/client";
import Login from "./Login";
import Register from "./Register";
import { doc, getDoc, setDoc } from "firebase/firestore";

interface Props {
  closeAuthModal: () => void;
  openAuthModal: (type: IAuthModalType) => void;
  isAuthModalOpen: boolean;
  authModalType: IAuthModalType;
}

export default function AuthModal({
  closeAuthModal,
  openAuthModal,
  isAuthModalOpen,
  authModalType,
}: Props) {
  // const router = useRouter();
  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const UserDocRef = doc(db, "users", result.user.uid);
      const docSnap = await getDoc(UserDocRef);
      const date = new Date();
      if (!docSnap.exists()) {
        await setDoc(UserDocRef, {
          name: result.user.displayName,
          email: result.user.email,
          userUid: auth.currentUser?.uid,
          preferencesTag: [],
          isEditor: false,
          likedArticles: [],
          createdAt: date.toISOString(),
          articles: [],
        });
      }
    } catch (error: any) {
      /**
       * TODO
       *  Handle error
       */
      console.log(error.message);
    }
    closeAuthModal();
  };
  return (
    <Dialog
      open={isAuthModalOpen}
      onClose={closeAuthModal}
      className="fixed inset-0 overflow-y-auto z-50 flex justify-center "
    >
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-md" />
      <div className="flex justify-center" style={{ paddingTop: "7vh", paddingBottom: "7vh" }}>
        <div
          className="relative rounded-[3rem] bg-primary-background-900 flex flex-col sm:flex-row"
          style={{ width: "70vw", height: "85vh" }}
        >
          <div className="relative flex-1">
            <div className="z-10 absolute w-full h-full flex justify-center items-center rounded-[3rem]">
              <div className="smokyScreen relative bg-white/10 backdrop-blur-sm rounded-[3rem] flex justify-center flex-col text-white">
                <h1 className="font-Righteous w-full" style={{ fontSize: "calc(1.5vw + 1.5vh)" }}>
                  Get regular updates on your favourite topics.
                </h1>
                <p className="mt-4" style={{ fontSize: "calc(.6vw + .6vh)" }}>
                  Consequat ea exercitation excepteur minim ipsum cupidatat nulla. quis aliquip
                  ipsum laboris non non.
                </p>
                <div className="absolute" style={{ bottom: "0px" }}>
                  <div className="relative playstore">
                    <Image
                      src="/play-store.png"
                      alt="play-store"
                      objectFit="cover"
                      layout="fill"
                      className="absolute rounded-[3rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="redbg">
              <Image
                src="/red-background.png"
                alt="red-background"
                objectFit="cover"
                layout="fill"
                className="absolute rounded-[3rem] w-[12vw] h-8vh"
              />
            </div>
          </div>
          <div
            className="flex-1 text-white flex items-center flex-col"
            style={{ padding: "2vh 0px" }}
          >
            <div className="relative authlogo">
              <Image
                src="/logo.png"
                alt="play-store"
                objectFit="cover"
                layout="fill"
                className="absolute authlogoImg"
              />
            </div>
            <h2
              className="font-Righteous"
              style={{ marginTop: "3vh", fontSize: "calc(1.5vw + 1.5vh)" }}
            >
              {authModalType == "login" && "Login to your Account"}
              {authModalType == "register" && "Register new Account"}
            </h2>
            {/*<h5*/}
            {/*  className="text-xs mt-2 font-light text-slate-400 px-8 text-center"*/}
            {/*  style={{*/}
            {/*    textAlign: "center",*/}
            {/*    fontSize: "calc(0.4vw + 0.4vh)",*/}
            {/*    width: "65%",*/}
            {/*    margin: "1.5vh 0px",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  {authModalType == "login" &&*/}
            {/*    "Consequat ea exercitation excepteur minim ipsum cupidatat nulla. quis aliquip ipsum laboris non non. exercitation excepteur."}*/}
            {/*  {authModalType == "register" &&*/}
            {/*    "Consequat ea exercitation excepteur minim ipsum cupidatat nulla. quis aliquip ipsum laboris non non. exercitation excepteur."}*/}
            {/*</h5>*/}
            <div>
              {authModalType == "login" && <Login closeAuthModal={closeAuthModal} />}
              {authModalType == "register" && <Register closeAuthModal={closeAuthModal} />}
            </div>
            <div className="my-2">or</div>
            <div className="mx-auto">
              <div
                className="select-none w-72 p-3 m-auto flex border border-primary-red focus:outline-0 rounded-lg flex justify-center cursor-pointer"
                onClick={handleGoogleAuth}
              >
                Sign in with Google
              </div>
            </div>
            <div
              style={{ fontSize: "calc(.6vw + .6vh)", bottom: "1vh" }}
              className="text-slate-400 absolute cursor-pointer select-none"
            >
              <a
                onClick={() => {
                  if (authModalType == "login") openAuthModal("register");
                  if (authModalType == "register") openAuthModal("login");
                }}
              >
                {authModalType == "login" && "Don't have an account?"}
                {authModalType == "register" && "Already have an account?"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
