import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="max-w-[1440px] mx-auto">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
