import Nav from "./components/nav";
import Hero from "./components/hero";
import Body from "./components/bodyPhoto";
import BodyPhoto from "./components/bodyPhoto";
import BodyVideo from "./components/bodyVideo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Julian Yam</title>{" "}
      </Head>
      <div className="min-h-screen bg-background">
        <Nav></Nav>

        <Hero></Hero>
        <BodyPhoto></BodyPhoto>
        <BodyVideo></BodyVideo>
      </div>
    </>
  );
}
