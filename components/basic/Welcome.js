import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Welcome() {
  return (
    <div
      className={
        styles.container +
        " bg-white dark:bg-gray-800 bg-opacity-40 dark:bg-opacity-40"
      }
    >
      <Head>
        <title>Welcome to Next-Firebase</title>
      </Head>

      <div
        className="bg-white transition dark:bg-gray-800 text-black dark:text-white md:overflow-hidden h-screen"
        
      >
        <div className="p-0 sm:px-4 py-26 md:py-4 flex items-center justify-center h-full w-full bg-gray-100 dark:bg-gray-700">
          <div>
            <div className="md:flex md:flex-wrap">
              <div className="md:w-full w-2/3 text-center md:text-left md:pt-16">
                <h1 className="font-bold text-2xl md:text-5xl leading-tight mb-4">
                  Next-Firebase
                </h1>
                <p className="md:text-xl md:pr-48">
                  Next.js with Firebase boilerplate
                </p>
              </div>
            </div>
            <div className="flex gap-4 my-12 justify-center">
              <Link href="/login" passHref>
                <a className="rounded-md flex items-center justify-center h-16 w-32 md:text-xl bg-blue-500 dark:bg-blue-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white">
                  <div className="bi-box-arrow-in-right"> Login</div>
                </a>
              </Link>
              <Link href="/register" passHref>
                <a className="rounded-md flex items-center justify-center h-16 w-32 md:text-xl bg-green-500 dark:bg-green-700 hover:bg-green-600 dark:hover:bg-green-600 text-white">
                  Register
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-0 w-full p-4 bg-white dark:bg-gray-800 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          (C) 2022
        </span>
      </footer>
    </div>
  );
}
