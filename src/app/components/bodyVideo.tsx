interface Video {
  link: string;
  title: string;
  description: string;
}

const videoList: Video[] = [
  {
    link: "https://www.youtube.com/embed/OD0NzYlQWDY?si=XZvriTdM76ZtiC45",
    title: "On Running Spec Ad",
    description:
      "When you happen to be a filmmaker and need new shoes.\n \nA cinematic running commercial paired with some Elivs. Capturing the love I have for running and testing my skills as a filmmaker. \n Shout out to my roomie Jun Chao (@jun_chaoyang) for helping me shoot this . ",
  },
  {
    link: "https://www.youtube.com/embed/wLmTSMrmewA?si=cVWl9s8Xmrcwq0Kg",
    title: "Jazz for Cows",
    description:
      " If your friend asks you to film him while he plays jazz for cows, you have to say yes. \n\n Drove up north and asked a random farmer if we could play for his cows. He said yes! That night the cows were serenaded with Frank Sinatra and Laufey",
  },
  {
    link: "https://www.youtube.com/embed/cJPbcvJATOE?si=cdqYPC6RxGCdE1-7",
    title: "My Waterloo",
    description:
      "A love letter to Waterloo, Ontario. \n\n Being a student at the University of Waterloo, the city of Waterloo has become my home. Taught to hate it, learned to love it, Waterloo has been a magical place where I have been tested in all aspects of my life. Now I am proud to say that I'm a local :)",
  },
  {
    link: "https://www.youtube.com/embed/OD0NzYlQWDY?si=XZvriTdM76ZtiC45",
    title: "One of Those Days",
    description:
      "Sometimes the days get to you. \n\n A short story slightly based on real life. When work gets you down, you just want to go home and rest. However school has other plans. ",
  },
  {
    link: "https://www.youtube.com/embed/OD0NzYlQWDY?si=XZvriTdM76ZtiC45",
    title: "The Idea",
    description:
      "Ideas are hard to come up with. \n\n This is the first video I ever made. It was for nights and weekends s5. Went through all the amature pitfalls to produce this video inlcuding shooting in the wrong codec and taking an entire night to convert it to something usable. This video kickstarted my video journey. Never looked back ever since. ",
  },
];

export default function BodyVideo() {
  return (
    <>
      <div className=" grid grid-cols-[1fr_4fr] mx-16 mt-40">
        {/* body headings */}
        <div className="mx-4 pr-8">
          <div className="font-roboto_mono mb-6">
            <h1 className="text-6xl ">02 </h1>
            <h1 className="text-4xl">filmmaking</h1>
          </div>
          <div className="my-4 px-6 py-4 text-sm font-roboto bg-gray-200">
            A more recent venture of mine. Filming any story that pops into my
            head as well as the occasional ad.
          </div>
        </div>
        {/* gallery body */}
        <div className="flex-col ">
          {stills.map((still, index) => (
            <div key={index} className="flex mb-8 justify-between ">
              <div className="w-1/3 mx-8 ">
                <h1 className=" text-3xl mb-4 font-roboto_mono">
                  {videoList[index].title}
                </h1>
                <p>
                  {videoList[index].description
                    .split("\n")
                    .map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                </p>
              </div>
              <iframe
                className="w-1/2 h-80"
                src={stills[index]}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
