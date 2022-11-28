import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Toast from "../components/ui/Toast";
import Head from "next/head";

function MainApp({ Component, pageProps }) {
  useEffect(() => {
    document
      .querySelector("body")
      .classList.add(
        "bg-gray-100",
        "dark:bg-gray-900",
        "text-gray-900",
        "dark:text-gray-100",
        "scrollbar",
        "transition-background"
      );
  }, []);
  if (typeof window !== "undefined") {
    if (localStorage.getItem("dark") == "true") {
      document.documentElement.className = "dark";
    } else {
      document.documentElement.className = "";
    }
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
        <div id="backdrop" />
        <Navbar />
        <Toast />
        <Component {...pageProps} />
    </>
  );
}

export default MainApp;
