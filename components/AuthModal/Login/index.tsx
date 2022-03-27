// import { Input } from "@mantine/core";
import { Formik } from "formik";

export default function Login() {
  return (
    <div className="flex flex-col ">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values.email, values.password);
          setSubmitting(false);
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form>
            {() => console.log(handleSubmit, isSubmitting)}
            <input
              className="focus:outline-0 authFormInput"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              // variant="default"
              // radius="md"
              placeholder="Email Id"
              // sx={{
              //   input: {
              //     borderRadius: "md",
              //     minHeight: "4vh", height: "6vh !important",
              //     "&:focus": {
              //       border: "1px solid #E50914",
              //     },
              //   },
              // }}
            />
            <div className="text-xs text-red-500">
              {errors.email && touched.email && errors.email}
            </div>
            <input
              className="focus:outline-0 authFormInput"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              // variant="default"
              // radius="md"
              placeholder="Password"
              // sx={{
              //   input: {
              //     minHeight: "4vh", height: "6vh !important",
              //     borderRadius: "md",
              //     "&:focus": {
              //       border: "1px solid #E50914",
              //     },
              //   },
              // }}
            />
            {/* <input
              className="focus:outline-0 authFormInput"
              type="text"
              name="name"
              // onChange={handleChange}
              // onBlur={handleBlur}
              // value={}
              placeholder="Name"
            /> */}
            <div className="text-red-500" style={{ fontSize: "calc(.6vw + .6vh)" }}>
              {errors.password && touched.password && errors.password}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
