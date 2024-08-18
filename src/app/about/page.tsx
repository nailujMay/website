import Nav from "../components/nav";
export default function About() {
  return (
    <>
      <Nav></Nav>

      <div className="flex-1 items-center mt-10">
        <div className="flex justify-center items-center">
          <div className="w-1/4 h-auto mx-8">
            <img src="profile.jpg"></img>
          </div>
          <div className="w-1/4 font-roboto">
            <h1 className="text-3xl my-4">nice to meet you! i'm julian</h1>
            <p className="text-sm">
              I am a photographer and filmmaker from Markham, Ontario. Currently
              shooting events, making short films, and sturggling to get through
              my engineering degree.
              <br />
              <br />I spend most of my time exploring new places, cooking, and
              planning the next adventure. Travel plans are always in the works,
              just waiting for the check to come in. Bucketlist places include
              Mt. Kilomanjaro, South of France, and the firehut just outside of
              Seattle.
              <br />
              <br />
              Come say hi!
            </p>

            <a href="mailto:julian.c.yam@gmail.com">
              <button className="bg-gray-600 text-background px-8 py-2 my-4 text-sm">
                julian.c.yam@gmail.com
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
