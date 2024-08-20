import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between bg-transparent text-text py-10 px-2 mx-14 my-2 font-inter">
      <div className="px-4 italic">
        <Link href="/"> julian yam</Link>
      </div>

      <div className="font-roboto-400 text-sm">
        <Link href="/about" className="px-2">
          about
        </Link>

        <a className="px-2">resume</a>

        <a href="" className="px-2">
          portfolio
        </a>
      </div>
    </div>
  );
}
