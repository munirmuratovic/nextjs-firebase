import Login from "../../components/auth/Login";
import GuestWrapper from "../../components/auth/GuestWrapper";
import Navbar from "../../components/layout/Navbar";
import Head from "next/head";

const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>Next-Firebase | Login</title>
      </Head>
      <GuestWrapper>
        <Login />
      </GuestWrapper>
    </div>
  );
};

export default LoginPage;
