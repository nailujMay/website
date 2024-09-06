"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname to get the current route
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between bg-transparent py-12 px-2 mx-14 font-inter items-center">
      <div className="px-4 italic">
        <Link href="/"> julian yam</Link>
      </div>

      <div className="font-roboto-400 text-sm flex">
        {pathname === "/dev" ? (
          <Link href="/" className="px-2">
            photos + films
          </Link>
        ) : (
          <Link href="/dev" className="px-2">
            dev
          </Link>
        )}
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

        <div className="relative">
          {/* Tab with Dropdown */}
          <button onClick={toggleDropdown} className="px-2 text-sm">
            portfolio
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute mt-2 w-40 bg-transparent">
              <a href="https://drive.google.com/file/d/17wNhxTC-zdcqui8C1INlC10CRasrT4Ae/view?usp=sharing">
                <div className="px-4 py-2 hover:underline">hardware</div>
              </a>
              <a href="https://drive.google.com/file/d/1QMmJeBVMsDcEONoybDCQ5FQH2KCTkwUK/view?usp=sharing">
                <div className="px-4 py-2 hover:underline">photography</div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

{
  /* <a
          href="https://drive.google.com/file/d/1QMmJeBVMsDcEONoybDCQ5FQH2KCTkwUK/view?usp=sharing"
          className="px-2"
          target="_blank"
        >
          portfolio
        </a> */
}
