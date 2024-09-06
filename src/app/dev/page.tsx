import BodyDev from "../components/bodyDev";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Nav from "../components/nav";

export default function Dev() {
  return (
    <>
      <div className="bg-text font-inter  text-background min-h-screen  ">
        <Nav />
        <Hero
          hero1="Hello,"
          hero2="I'm Julian"
          desc1="A software developer studying mechatronics engineering @UWaterloo. Spending my free time messing around on Figma and being a freelance filmmaker/photographer. "
          desc2="Previously at Watonomous, VitalBio, ATS Automation, and the Machining Group. "
        />
        <BodyDev />

        <Footer />
      </div>
    </>
  );
}
