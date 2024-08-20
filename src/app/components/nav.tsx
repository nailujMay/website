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

        <a
          href="https://drive.google.com/file/d/1rq2idgTAslx4Io-Ix-p_ZXJXAFF3CV6T/view?usp=sharing"
          target="_blank"
          className="px-2"
        >
          resume
        </a>

        <a
          href="https://drive.google.com/file/d/1QMmJeBVMsDcEONoybDCQ5FQH2KCTkwUK/view?usp=sharing"
          className="px-2"
          target="_blank"
        >
          portfolio
        </a>
      </div>
    </div>
  );
}
