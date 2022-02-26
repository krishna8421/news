import { NextPage } from "next";
import Auth from "@layouts/Auth";

const Register: NextPage = () => {
  return (
    <Auth>
      <h1>Login</h1>
      <p>Register to application</p>
    </Auth>
  );
};
export default Register;
