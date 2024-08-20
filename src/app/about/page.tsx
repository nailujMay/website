import Footer from "../components/footer";
import Nav from "../components/nav";
export default function About() {
  return (
    <>
      <Nav></Nav>

      <div className="flex-1 items-center my-16">
        <div className="flex justify-center items-center">
          <div className="w-1/4 h-auto mx-8">
            <img src="profile.jpg"></img>
          </div>
          <div className="w-1/4 font-roboto">
            <h1 className="text-3xl my-4">Nice to meet you! I'm Julian</h1>
            <p className="text-sm">
              I am a photographer and filmmaker from Markham, Ontario. Currently
              shooting events, making short films, and struggling to get through
              my engineering degree.
              <br />
              <br />
              On an off day you can find me exploring new places, cooking, and
              planning the next adventure. Travel plans are always in the works,
              just waiting for the check to come in. Scheming to go to Mt.
              Kilomanjaro, the south of France, and that firehut just outside of
              Seattle.
              <br />
              <br />
              Come say hi!
            </p>

            <a href="mailto:julian.c.yam@gmail.com">
              <button className="bg-gray-300 text-text px-10 py-4 my-4 text-sm">
                julian.c.yam@gmail.com
              </button>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
