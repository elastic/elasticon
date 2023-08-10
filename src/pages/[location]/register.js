import { useEffect, useState } from "react";
import Query from "../../../lib/contentstack";

import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Navigation from "@/components/Navigation";
import Panel from "@/components/Panel";

export default function Register({ data }) {
  const { footerData, globalData, location } = data;
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (scriptLoaded) {
      window.MktoForms2.loadForm("//info.elastic.co", "813-MAM-392", 21030);
      return;
    }

    if (window.MktoForms2) return setScriptLoaded(true);

    const script = document.createElement("script");
    script.src = `//info.elastic.co/js/forms2/js/forms2.min.js`;
    script.onload = () => (window.MktoForms2 ? setScriptLoaded(true) : null);
    document.body.appendChild(script);
  });

  return (
    <>
      <div className="bg-blue-900 mb-4 rounded-bl-sm md:rounded-bl-md lg:rounded-bl-lg rounded-br-sm md:rounded-br-md lg:rounded-br-lg">
        <Navigation />
        <div className="p-10 sm:p-14 md:p-20 lg:p-24">
          <Heading
            className="font-semibold mb-8 text-teal"
            color="peach"
            size="h4"
          >
            {globalData?.series_name}
          </Heading>
          <Heading className="text-white" size="h1">
            Registration
          </Heading>
        </div>
      </div>

      <Panel className="border-2 border-zinc-200">
        <Heading
          className="capitalize mb-14 text-blue-800 md:text-center"
          size="h4"
        >
          Register for ElasticON {location}
        </Heading>
        <form className="max-w-2xl mx-auto" id="mktoForm_21030"></form>
      </Panel>

      <Footer data={footerData} />
    </>
  );
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const { location } = params;
  const footerData = await Query("footer", "blt6f73b6b55468ee3a");
  const globalData = await Query("site_config", "blt6e01f6ef8267a554");

  return {
    props: {
      data: {
        footerData,
        globalData,
        location,
      },
    },
  };
}
