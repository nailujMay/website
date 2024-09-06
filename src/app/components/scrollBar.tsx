"use client";
import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

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
    <div className="fixed top-0 left-0 h-screen w-2 bg-background">
      <div
        className="bg-text w-full"
        style={{ height: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
