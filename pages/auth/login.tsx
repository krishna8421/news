import { NextPage } from "next";
import Auth from "@layouts/Auth";

const Login: NextPage = () => {
  return (
    <Auth>
      <h1>Login</h1>
      <p>Login to application</p>
    </Auth>
  );
};
export default Login;
