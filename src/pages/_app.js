import { Inter, Space_Grotesk } from "@next/font/google";

import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${spaceGrotesk.variable} ${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
