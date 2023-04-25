import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Todoey</title>
        <meta name="description" content="This is the Todoey app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Hello Bold!</main>
    </>
  );
};

export default Home;
