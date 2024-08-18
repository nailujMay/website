import { Roboto, Roboto_Mono } from "next/font/google";

const roboto_init = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const roboto_mono_init = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto_mono",
});

export const roboto = roboto_init.variable;
export const roboto_mono = roboto_mono_init.variable;
