import Nav from "./components/nav";
import Hero from "./components/hero";
import Body from "./components/bodyPhoto";
import BodyPhoto from "./components/bodyPhoto";
import BodyVideo from "./components/bodyVideo";
import Head from "next/head";
import Footer from "./components/footer";
import ScrollProgressBar from "./components/scrollBar";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <ScrollProgressBar></ScrollProgressBar>
        <Nav></Nav>

        <Hero
          hero1="Heyo"
          hero2="I'm Julian"
          desc1="Jack of all trades, master of some. On a journey to become a media
            demon and side questing an engineering degree."
          desc2="I'm shooting every chance I get. Recent works include shooting for
            Hack the North, Socratica, TEDX and Seek Discomfort"
        />
        <BodyPhoto />
        <BodyVideo />
        <Footer />
      </div>
    </>
  );
}
