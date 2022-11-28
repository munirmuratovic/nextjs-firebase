import Head from "next/head";
import DefaultPage from "../layout/DefaultPage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Next-Firebase</title>
        <meta name="description" content="Next-Firebase" />
      </Head>
      <DefaultPage>
        You are authenticated.
        <div className="flex">
          <div className="w-full flex-col items-center justify-center h-auto px-0 sm:px-2 py-3">
            <ul className="w-full sm:w-3/5 mx-auto grid gap-y-3 max-w-xl ">

            </ul>
          </div>
        </div>
      </DefaultPage>
    </>
  );
};

export default Home;
