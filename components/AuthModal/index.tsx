// import { useState, useRef, Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { IAuthModalType } from "@interface/AuthModal.interface";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
// import { useRouter } from "next/router";
import { auth } from "@firebase/client";
import Login from "./Login";
// import Register from "./Register";
// import { Formik } from "formik";

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

  const handleGoogleAuth = () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    } catch (error: any) {
      /**
       * TODO
       *  Handle error
       */
      console.log(error);
    }
  };
  return (
    <Dialog
      open={isAuthModalOpen}
      onClose={closeAuthModal}
      className="fixed inset-0 overflow-y-auto z-50 flex justify-center "
    >
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-md" />
      <div className="flex pt-[10vh] justify-center">
        <div className="relative bg-white rounded-[3rem] mx-auto w-[60rem] h-[35rem] bg-primary-background-900 flex">
          <div className="relative flex-1">
            <div className="z-10 absolute w-full h-full flex justify-center items-center rounded-[3rem]">
              <div className="relative w-11/12 h-[32rem] bg-white/10 backdrop-blur-sm rounded-[3rem] flex justify-center px-4 flex-col text-white">
                <h1 className="font-Righteous w-full text-3xl ">
                  Get regular updates on your favourite topics.
                </h1>
                <p className="mt-4 text-sm">
                  Consequat ea exercitation excepteur minim ipsum cupidatat nulla. quis aliquip
                  ipsum laboris non non.
                </p>
                <div className="absolute bottom-8">
                  <div className="relative h-32 w-48">
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
            <Image
              src="/red-background.png"
              alt="red-background"
              objectFit="cover"
              layout="fill"
              className="absolute rounded-[3rem]"
            />
          </div>
          <div className="flex-1 text-white flex pt-8 items-center flex-col">
            <div className="relative h-8 w-36">
              <Image
                src="/logo.png"
                alt="play-store"
                objectFit="cover"
                layout="fill"
                className="absolute rounded-[3rem]"
              />
            </div>
            <h2 className="font-Righteous text-2xl mt-8">
              {authModalType == "login" && "Login to your Account"}
              {authModalType == "register" && "Register new Account"}
            </h2>
            {/*<h5 className="text-xs mt-4 font-light text-slate-400 px-8 text-center">*/}
            {/*  {authModalType == "login" && "Consequat ea exercitation excepteur minim ipsum cupidatat nulla. quis aliquip ipsum laboris non non. exercitation excepteur."}*/}
            {/*  {authModalType == "register" && "Consequat ea exercitation excepteur minim ipsum cupidatat nulla. quis aliquip ipsum laboris non non. exercitation excepteur."}*/}
            {/*</h5>*/}
            {/*<Formik*/}
            {/*  initialValues={authModalType == "login" ? {*/}
            {/*    name: "",*/}
            {/*    email: "",*/}
            {/*    password: "",*/}
            {/*  } : authModalType == "register" ? {*/}
            {/*    name: "",*/}
            {/*    email: "",*/}
            {/*    password: "",*/}
            {/*  } : {}}*/}
            {/*  onSubmit={(values, { setSubmitting }) => {*/}
            {/*    setSubmitting(true);*/}
            {/*    if (authModalType == "login") {*/}
            {/*      // login(values.email, values.password);*/}
            {/*      console.log(values.email, values.password);*/}
            {/*    } else if (authModalType == "register") {*/}
            {/*      // register(values.name, values.email, values.password);*/}
            {/*      console.log(values.name, values.email, values.password);*/}
            {/*    }*/}
            {/*    setSubmitting(false);*/}
            {/*  }}*/}
            {/*>*/}
            {/*  {({*/}
            {/*      values,*/}
            {/*      errors,*/}
            {/*      touched,*/}
            {/*      handleChange,*/}
            {/*      handleBlur,*/}
            {/*      handleSubmit,*/}
            {/*      isSubmitting,*/}
            {/*    }) => (*/}
            {/*    <form onSubmit={handleSubmit} className="w-full flex items-center flex-col">*/}
            {/*      <div className={`my-6 w-full ${authModalType == "login" ? "mt-16" : ""}`}>*/}
            {/*        {authModalType == "login" && (*/}
            {/*          <Login*/}
            {/*            handleChange={handleChange}*/}
            {/*            handleBlur={handleBlur}*/}
            {/*            values={values}*/}
            {/*            errors={errors}*/}
            {/*            touched={touched}*/}
            {/*          />*/}
            {/*        )}*/}
            {/*        {authModalType == "register" && (*/}
            {/*          <Register*/}
            {/*            // handleChange={handleChange}*/}
            {/*            // handleBlur={handleBlur}*/}
            {/*            // values={values}*/}
            {/*            // errors={errors}*/}
            {/*            // touched={touched}*/}
            {/*          />*/}
            {/*        )}*/}
            {/*      </div>*/}
            {/*      <div className="w-2/3 ">*/}
            {/*        <button*/}
            {/*          className="w-full bg-primary-red hover:bg-primary-light-red text-white py-3 rounded-md"*/}
            {/*          type="submit"*/}
            {/*          disabled={isSubmitting}*/}
            {/*        >*/}
            {/*          {authModalType == "login" && "Login"}*/}
            {/*          {authModalType == "register" && "Register"}*/}
            {/*        </button>*/}
            {/*      </div>*/}
            {/*    </form>*/}
            {/*  )}*/}
            {/*</Formik>*/}

            <div className="w-2/3 mx-auto">
              {authModalType == "login" && <Login />}
              {/*{authModalType == "register" && "Register"}*/}
            </div>
            <div className="my-2">or</div>
            <div className="w-2/3 mx-auto">
              <div
                className="select-none w-full border border-primary-red py-3 focus:outline-0 rounded-lg flex justify-center cursor-pointer"
                onClick={handleGoogleAuth}
              >
                Sign in with Google
              </div>
            </div>
            <div className="text-sm text-slate-400 absolute bottom-4 cursor-pointer select-none">
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
