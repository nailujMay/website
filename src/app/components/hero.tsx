import Link from "next/link";

export default function Hero() {
  return (
    <div className="md:flex mx-24 mb-24 mt-8  ">
      <h1 className="font-lora font-bold text-5xl md:mr-6 w-1/3 ">
        Heyo, <br />
        I'm Julian
      </h1>
      {/* <div></div> */}
      <div className="font-inter md:mx-10 text-sm w-1/3 px-4 ">
        <p className=" ">
          Jack of all trades, master of some. On a journey to become a media
          demon and side questing an engineering degree.
        </p>
      </div>
      <div className="w-1/3 font-inter text-sm px-4">
        <p>
          {" "}
          Recent works include shooting for hack the north, Socratica, and seek
          Discomfort
        </p>
        <p className="font-inter underline">
          <Link href="/about">more about me</Link>
        </p>
      </div>
    </div>
  );
}
