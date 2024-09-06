"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Use this instead of useRouter

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const pathname = usePathname(); // Get the current path

  const backgroundColor = pathname === "/dev" ? "bg-text" : "bg-background";
  const textColor = pathname === "/dev" ? "bg-background" : "bg-text";

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 h-screen w-2 ${backgroundColor}`}>
      <div
        className={`${textColor} w-full`}
        style={{ height: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
