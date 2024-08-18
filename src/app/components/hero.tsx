import Link from "next/link";

export default function Hero() {
  return (
    <div className="grid grid-cols-[2fr_1fr] mx-24 mb-32 mt-16 items-center ">
      <h1 className="font-roboto_mono text-7xl mr-6 ">
        Heyo, <br />
        I'm Julian
      </h1>
      {/* <div></div> */}
      <div className="mx-10 text-sm">
        <p className="font-roboto-500">
          Jack of all trades, master of some. On a journey to become a media
          demon and side questing an engineering degree.
          <br />
          <br />
          Recent works include shooting for hack the north, Socratica, and seek
          Discomfort
        </p>
        <p className="font-roboto-600 my-2 underline">
          <Link href="/about">more about me</Link>
        </p>
      </div>
    </div>
  );
}
