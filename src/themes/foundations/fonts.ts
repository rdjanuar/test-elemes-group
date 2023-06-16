import { Rubik } from "next/font/google";

const rubik = Rubik({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: "normal",
});

export const fonts = {
  body: rubik.style.fontFamily,
  heading: rubik.style.fontFamily,
};
