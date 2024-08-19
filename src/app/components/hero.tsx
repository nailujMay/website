import Link from "next/link";

export default function Hero() {
  return (
    <div className="md:grid grid-cols-[2fr_1fr] mx-24 mb-20 mt-8 items-center ">
      <h1 className="font-roboto_mono text-7xl md:mr-6 ">
        Heyo, <br />
        I'm Julian
      </h1>
      {/* <div></div> */}
      <div className="my-12 md:mx-10 text-sm">
        <p className="font-roboto">
          Jack of all trades, master of some. On a journey to become a media
          demon and side questing an engineering degree.
          <br />
          <br />
          Recent works include shooting for hack the north, Socratica, and seek
          Discomfort
        </p>
        <p className="font-roboto my-2 underline">
          <Link href="/about">more about me</Link>
        </p>
      </div>
    </div>
  );
}
