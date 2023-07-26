import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/events/elasticon/favicon.ico" />
      </Head>
      <body>
        <div className="max-w-[1440px] mx-auto px-1 sm:px-2 md:px-4">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
