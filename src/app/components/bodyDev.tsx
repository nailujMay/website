interface item {
  title: string;
  topic: string;
  body: string;
  link: string;
}

const software: item[] = [
  {
    title: "Bill of Materials Extractor",
    topic: "THE MACHING GROUP",
    body: "A program that leverages OpenAI’s API to automatically read the Bill of materials from an engineering drawing.",
    link: "",
  },
  {
    title: "ML Dimension Locator ",
    topic: "THE MACHING GROUP",
    body: " Trained a YOLOv8 model to automatically locate and read dimensions on an engineering drawing for quoting purposes ",
    link: "",
  },
  {
    title: "Reflectify",
    topic: "FOR ME",
    body: "An AI journal app that helps you reveal your deepest thoughts. ",
    link: "",
  },
];

const hardware: item[] = [
  {
    title: "Hyperloop Battery",
    topic: "WATERLOOP",
    body: "A 120V battery pack that powers a prototype hyperloop pod.",
    link: "",
  },
  {
    title: "Spidey Sense Hat",
    topic: "HACK THE NORTH HACK",
    body: "A hat that gives Spiderman's spidey sense. Alerts you when object are approaching you at high velocities. ",
    link: "",
  },
  {
    title: "PB Safe",
    topic: "FOR ME",
    body: "A peanut butter safe that prevents nosey roomies from stealing my peanut butter. Complete with face ID and a custom locking mechanism. ",
    link: "",
  },
];

export default function BodyDev() {
  return (
    <>
      <div className="mx-20 mt-64">
        <div className="my-16">
          <div className=" mb-6">
            <h1 className="text-6xl font-lora font-semibold">01 </h1>
            <h1 className="text-3xl font-inter font-semibold">SOFTWARE</h1>
            <hr className="border-background border-2 my-2" />
          </div>
          <div className="grid grid-cols-3 gap-28">
            {software.map((software, index) => (
              <div key={index} className="">
                <a href={software.link} className="font-lora text-2xl ">
                  {software.title}
                </a>
                <p className="font-inter text-sm">{software.topic}</p>
                <p className="font-inter mt-4">{software.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-16">
          <div className=" mb-6">
            <h1 className="text-6xl font-lora font-semibold">02 </h1>
            <h1 className="text-3xl font-inter font-semibold">Hardware</h1>
            <hr className="border-backgroud border-2 my-2" />
          </div>
          <div className="grid grid-cols-3 gap-30">
            {hardware.map((software, index) => (
              <div key={index} className="">
                <a href={software.link} className="font-lora text-2xl ">
                  {software.title}
                </a>
                <p className="font-inter text-sm">{software.topic}</p>
                <p className="font-inter mt-4">{software.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
