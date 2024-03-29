/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {

  // Initialize Optimizely
  const optimizelySnippet = 'https://cdn.optimizely.com/js/18132920325.js';

  return (
    <Html lang="en">
      <Head>
        <link rel='preconnect' href='https://logx.optimizely.com' />
        <link rel='preload' as='script' href={optimizelySnippet} />
        <script type='text/javascript' src={optimizelySnippet}></script>

        <link rel="icon" href="/events/elasticon/favicon.ico" />
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KNJMG2M');
          `,
          }}
        />
      </Head>
      <body>
        <div className="max-w-[1440px] mx-auto px-1 sm:px-2 md:px-4">
          <Main />
        </div>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KNJMG2M"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <NextScript />
      </body>
    </Html>
  );
}
