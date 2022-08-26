import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/Header/Header";
import { SectionArtists } from "../../components/SectionArtists/SectionArtists";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Demo -Tekbees</title>
        <meta name="demo-app" content="demo-app" />
      </Head>
    <Header/>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
          <div className="w-full">
          <SectionArtists />
        </div>
      </main>
    </>
  );
};

export default Home;
