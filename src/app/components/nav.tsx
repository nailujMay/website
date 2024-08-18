import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between bg-transparent text-text p-10 mx-14 my-2">
      <div className="px-4 italic">
        <Link href="/"> julian yam</Link>
      </div>

      <div className="font-roboto-400 text-sm">
        <a href="" className="px-2">
          instagram
        </a>
        <a href="" className="px-2">
          twitter
        </a>
        <a href="" className="px-2">
          github
        </a>
        <a href="" className="px-2">
          portfolio
        </a>
        <a href="" className="px-2">
          resume
        </a>
      </div>
    </div>
  );
}
