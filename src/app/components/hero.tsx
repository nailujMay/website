import Link from "next/link";

export default function Hero() {
  return (
    <div className="  text-text md:flex mx-20 mb-24 mt-8 justify-between ">
      <h1 className="font-lora font-bold text-6xl w-full md:mr-6 md:w-1/3 ">
        Heyo, <br />
        I'm Julian
      </h1>
      {/* <div></div> */}
      <div className="w-full md:flex md:w-1/2 text-sm font-inter">
        <div className="my-6 md:w-1/2 md:pr-6 md:my-0">
          <p className=" ">
            Jack of all trades, master of some. On a journey to become a media
            demon and side questing an engineering degree.
          </p>
        </div>
        <div className="my-6 md:w-1/2 md:pl-6 md:my-0">
          <p>
            {" "}
            I'm shooting every chance I get. Recent works include shooting for
            Hack the North, Socratica, TEDX and Seek Discomfort
          </p>
          <p className="font-inter underline mt-8">
            <Link href="/about">more about me</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
