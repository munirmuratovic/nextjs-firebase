import { useEffect } from "react";
import Register from "../../components/auth/Register";
import GuestWrapper from "../../components/auth/GuestWrapper";
import Navbar from "../../components/layout/Navbar";
import Head from "next/head";

const RegisterPage = () => {
  return (
    <div>
      <Head>
        <title>Next-Firebase | Register</title>
      </Head>
      <GuestWrapper>
        <Register />
      </GuestWrapper>
    </div>
  );
};

export default RegisterPage;
