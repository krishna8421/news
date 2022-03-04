import { MdAlternateEmail, MdPassword } from "react-icons/md";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@lib/firebase/auth";
import { useAuth } from "@lib/context/AuthContext";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleShowPass = () => setShow(!show);
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Must be an Email").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/^[a-zA-Z0-9 #?!@$%^&*-]/, "Must be Alphanumeric")
      .required("Required"),
  });
  const { setError } = useAuth();
  const loginWithEmailAndPasswordHandler = async (email: string, pass: string) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, pass);
      console.log(result);
    } catch (error: any) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className="w-8/12 mx-auto">
      <div className="text-4xl leading-relaxed font-Inter ">Login to your account</div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await loginWithEmailAndPasswordHandler(values.email, values.password);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center flex-col mt-4">
              {/*Email*/}
              <div className="relative flex flex-col w-72">
                <div className="flex items-center">
                  <div className="absolute ml-2 text-white">
                    <MdAlternateEmail size={20} />
                  </div>
                  <input
                    autoComplete="on"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-white bg-opacity-10 p-3 rounded-md w-full pl-10 focus:outline-none"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="text-red-500 text-sm mt-2 ml-2">
                  {errors.email && touched.email && <div className="">{errors.email}</div>}
                </div>
              </div>
              {/*Password*/}
              <div className="relative flex flex-col w-72 mt-4">
                <div className="flex items-center">
                  <div className="absolute ml-2 text-white">
                    <MdPassword size={20} />
                  </div>
                  <input
                    autoComplete="on"
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="bg-white bg-opacity-10 p-3 rounded-md w-full pl-10 focus:outline-none"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <div className="absolute right-2">
                    {show ? (
                      <AiFillEye size={22} color="white" onClick={handleShowPass} />
                    ) : (
                      <AiFillEyeInvisible size={22} color="white" onClick={handleShowPass} />
                    )}
                  </div>
                </div>
                <div className="text-red-500 text-sm mt-2 ml-2">
                  {errors.password && touched.password && <div className="">{errors.password}</div>}
                </div>
              </div>
              {/*Submit Button*/}
              <button
                className="bg-primary-red p-3 px-6 rounded my-4 w-72 text-white"
                type="submit"
                disabled={isSubmitting}
              >
                Login
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
