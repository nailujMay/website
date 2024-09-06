import Link from "next/link";
interface Hero {
  hero1: string;
  hero2: string;
  desc1: string;
  desc2: string;
}

const Hero: React.FC<Hero> = ({ hero1, hero2, desc1, desc2 }) => {
  return (
    <div className=" md:flex mx-20 mb-24 mt-8 justify-between ">
      <h1 className="font-lora font-bold text-6xl w-full md:mr-6 md:w-1/3 ">
        {hero1} <br /> {hero2}
      </h1>
      {/* <div></div> */}
      <div className="w-full md:flex md:w-1/2 text-sm font-inter">
        <div className="my-6 md:w-1/2 md:pr-6 md:my-0">
          <p className=" ">{desc1}</p>
        </div>
        <div className="my-6 md:w-1/2 md:pl-6 md:my-0">
          <p>{desc2} </p>
          <p className="font-inter underline mt-8">
            <Link href="/about">more about me</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
