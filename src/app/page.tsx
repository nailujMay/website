import Nav from "./components/nav";
import Hero from "./components/hero";
import Body from "./components/bodyPhoto";
import BodyPhoto from "./components/bodyPhoto";
import BodyVideo from "./components/bodyVideo";
import Head from "next/head";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Nav></Nav>

        <Hero></Hero>
        <BodyPhoto></BodyPhoto>
        <BodyVideo></BodyVideo>
        <Footer></Footer>
      </div>
    </>
  );
}
