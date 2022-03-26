import { Input } from "@mantine/core";

export default function Login({ handleChange, handleBlur, values, errors, touched }: any) {
  return (
    <div className="w-full w-2/3 mx-auto flex flex-col gap-4 ">
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
      <div className="text-xs text-red-500">{errors.email && touched.email && errors.email}</div>
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
    </div>
  );
}
