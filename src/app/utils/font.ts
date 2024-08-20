import { Roboto, Roboto_Mono, Playfair_Display, Inter } from "next/font/google";
import { Lora } from "next/font/google";

const roboto_init = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const lora_init = Lora({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lora",
});

const inter_init = Inter({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inter",
});

const roboto_mono_init = Roboto_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto_mono",
});

const playfair_init = Playfair_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-playfair_display",
});

export const roboto = roboto_init.variable;
export const roboto_mono = roboto_mono_init.variable;
export const playfair = playfair_init.variable;
export const lora = lora_init.variable;
export const inter = inter_init.variable;
