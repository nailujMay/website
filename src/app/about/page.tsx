import Footer from "../components/footer";
import Nav from "../components/nav";
export default function About() {
  return (
    <>
      <div className="bg-background font-inter  text-text min-h-screen  ">
        <Nav></Nav>

        <div className=" items-center mt-16 mb-36 ">
          <div className="flex flex-col  items-center md:flex-row md:justify-center md:items-center">
            <div className="w-3/4 md:w-1/4 h-auto mx-8 ">
              <img src="profile.jpg"></img>
            </div>
            <div className="w-3/4 md:w-1/4">
              <h1 className="text-3xl my-6 font-semibold">
                Nice to meet you! <br /> I'm Julian
              </h1>
              <p className="text-sm">
                I am a software developer, photographer, and filmmaker from
                Markham, Ontario. Currently shooting events, making short films,
                and struggling to get through my engineering degree.
                <br />
                <br />
                On an off day you can find me exploring new places, cooking, and
                planning the next adventure. Travel plans are always in the
                works, just waiting for the check to come in. Scheming to go to
                Mt. Kilomanjaro, the south of France, and that firehut just
                outside of Seattle.
                <br />
                <br />
                Come say hi!
              </p>

              <a href="mailto:julian.c.yam@gmail.com">
                <button className="bg-contact text-text px-4 py-2 my-4 text-sm">
                  julian.c.yam@gmail.com
                </button>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
