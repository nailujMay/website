interface Video {
  [key: string]: string[];
}

const videoData: Video = {
  stills: [
    "stills/waterloo.jpg",
    "stills/the_idea.jpg",
    "stills/on_spec.jpg",
    "stills/jazz for cows.jpg",
    "stills/oneofthosedays.jpg",
    "stills/everywhere.png",
  ],
};

export default function BodyVideo() {
  const stills: Array<string> = [
    "stills/waterloo.jpg",
    "stills/the_idea.jpg",
    "stills/on_spec.jpg",
    "stills/jazz for cows.jpg",
    "stills/oneofthosedays.jpg",
    "stills/everywhere.png",
  ];
  const link: Array<string> = [
    "https://www.youtube.com/watch?v=cJPbcvJATOE",
    "https://www.youtube.com/watch?v=2hF7syBRvQc",
    "https://www.youtube.com/watch?v=OD0NzYlQWDY",
    "https://www.youtube.com/watch?v=wLmTSMrmewA",
    "https://www.youtube.com/watch?v=UQYWiurdy6E",
  ];
  return (
    <>
      <div className=" grid grid-cols-[1fr_4fr] mx-16 mt-24">
        {/* body headings */}
        <div className="mx-4 pr-8">
          <div className="font-roboto_mono mb-6">
            <h1 className="text-6xl ">02 </h1>
            <h1 className="text-4xl">filmmaking</h1>
          </div>
          <div className="my-4 text-sm">
            A more recent venture of mine. Filming any story that pops into my
            head as well as the occasional ad.
          </div>
        </div>
        {/* gallery body */}
        <div>
          <div className="gap-4 columns-2 md:columns-3">
            {stills.map((still, index) => (
              <div key={index} className="mb-4 h-1/2">
                <a
                  href={link[index]}
                  target="_blank"
                  className="block transform transition duration-200 hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={still}
                    alt={`Photo ${index}`}
                    className="object-contain w-full h-full"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
