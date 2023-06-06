import { Space_Grotesk } from "@next/font/google";

import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${spaceGrotesk.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
