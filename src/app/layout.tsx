import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { roboto, roboto_mono } from "./utils/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "julian yam ",
  description: "things by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto} ${roboto_mono}`}>{children}</body>
    </html>
  );
}
