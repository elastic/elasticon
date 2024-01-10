import localFont from "next/font/local";

import "../../public/events/elasticon/globals.css";

const inter = localFont({
  src: [
    {
      path: "../../public/events/elasticon/fonts/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/events/elasticon/fonts/Inter-Bold.ttf",
      weight: "800",
      style: "bold",
    },
    {
      path: "../../public/events/elasticon/fonts/Inter-Black.ttf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-inter",
});

const spaceGrotesk = localFont({
  src: [
    {
      path: "../../public/events/elasticon/fonts/SpaceGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/events/elasticon/fonts/SpaceGrotesk-SemiBold.ttf",
      weight: "700",
      style: "semibold",
    },
    {
      path: "../../public/events/elasticon/fonts/SpaceGrotesk-Bold.ttf",
      weight: "800",
      style: "bold",
    },
  ],
  variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${spaceGrotesk.variable} ${inter.variable} font-body`}>
      <Component {...pageProps} />
    </main>
  );
}
