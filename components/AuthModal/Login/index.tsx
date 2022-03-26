import { Input } from "@mantine/core";
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
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              variant="default"
              size="lg"
              radius="md"
              placeholder="Email"
              sx={{
                input: {
                  borderRadius: "md",
                  "&:focus": {
                    border: "1px solid #E50914",
                  },
                },
              }}
            />
            <div className="text-xs text-red-500">
              {errors.email && touched.email && errors.email}
            </div>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              variant="default"
              size="lg"
              radius="md"
              placeholder="Password"
              sx={{
                input: {
                  borderRadius: "md",
                  "&:focus": {
                    border: "1px solid #E50914",
                  },
                },
              }}
            />
            <div className="text-xs text-red-500">
              {errors.password && touched.password && errors.password}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
