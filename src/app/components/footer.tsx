"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Use this instead of useRouter

export default function Footer() {
  const pathname = usePathname(); // Get the current path

  const backgroundColor = pathname === "/dev" ? "bg-text" : "bg-background";
  const textColor = pathname === "/dev" ? "bg-background" : "bg-text";
  return (
    <>
      <div className="py-4 font-inter bg-transparent ">
        <hr className={`${textColor}`} />
        <div className="my-4 mx-6 flex justify-between items-center text-sm">
          <div>
            <p>
              julian yam <br /> © 2024
            </p>
          </div>
          <div className="flex items-center ">
            <div className="flex flex-col md:flex-row">
              <a
                href="mailto:julian.c.yam@gmail.com"
                className="md:px-4 font-bold"
              >
                julian.c.yam@gmail.com
              </a>
              <a
                href="https://www.instagram.com/nailuj.may/"
                className="md:px-4"
                target="_blank"
              >
                instagram
              </a>
              <a
                href="https://www.youtube.com/@julian-yam"
                className="md:px-4"
                target="_blank"
              >
                youtube
              </a>
              <a
                href="https://x.com/nailuj_may"
                className="md:px-4"
                target="_blank"
              >
                twitter
              </a>
              <a
                href="https://github.com/nailujMay"
                className="md:px-4"
                target="_blank"
              >
                github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
