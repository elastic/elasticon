import Image from "next/image";
import Link from "next/link";
import Query, { Paths } from "../../lib/contentstack";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Panel from "@/components/Panel";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";

export default function Location({ data, footerData, globalData }) {
  console.log(data);
  const date = new Date(data.date).toLocaleDateString("en-US", {
    dateStyle: "long",
  });

  const address = data.venue_address.replace(/\n/g, "<br>");

  return (
    <>
      <Hero
        footer={
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="gap-4 grid md:grid-cols-3 grow text-white">
              <div>
                <Heading className="text-teal mb-4" size="h5">
                  Date
                </Heading>
                <p className="md:text-lg">{date}</p>
              </div>
              <div>
                <Heading className="text-teal mb-4" size="h5">
                  Cost
                </Heading>
                <p className="md:text-lg">{data.cost}</p>
              </div>
              <div>
                <Heading className="text-teal mb-4" size="h5">
                  Location
                </Heading>
                <p className="md:text-lg">
                  <a
                    className="border-b border-blue-800 hover:border-blue-400 hover:text-blue-400 pb-1"
                    href={data.venue_name.href}
                  >
                    {data.venue_name.title}
                  </a>
                </p>
                <p
                  className="mt-5 opacity-80"
                  dangerouslySetInnerHTML={{
                    __html: address,
                  }}
                />
              </div>
            </div>
          </div>
        }
        imageAlt="collage of stars, shapes and lines with a grungy texture and a picture of Big Ben in London"
        imageHeight={552}
        imagesrc="/events/elasticon/images/location-london.png"
        imageWidth={744}
        mainContent={
          <>
            <Heading
              className="font-semibold mb-8 text-teal"
              color="peach"
              size="h5"
            >
              Find answers for what&apos;s next
            </Heading>
            <Heading className="text-white" size="h1">
              {globalData.series_name} {data.title}
            </Heading>
            <p className="text-white my-8">
              Spend the day with your local Elastic community and leave with
              answers that matter. Packed with demos, breakout sessions,
              networking, technical tips and guidance, and exclusive
              announcements, ElasticON London is the event for anyone working
              with the Elasticsearch platform.
            </p>
            <div className="flex items-center mb-10">
              <Button href="/register">Register now</Button>
            </div>
          </>
        }
      >
        <Navigation location="London" />
      </Hero>
      <Panel>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Heading className="mb-6 text-blue-800" size="h3">
              What to expect
            </Heading>
            <p className="mb-4">
              Designed for you, ElasticON Frankfurt will show you how to get the
              most relevant search, observability, and security results at
              unprecedented speed with open and flexible enterprise
              solutions&mdash;powered by Elasticsearch Platform and AI. 
            </p>
            <ul className="list-disc list-outside pl-4">
              <li>
                See how your peers are using Elastic to lead their industries
              </li>
              <li>Get the latest solutions, news and updates</li>
              <li>Connect with our team of experts</li>
              <li>
                Get an inside track on how Elastic can help you be even more
                efficient and make smarter decisions every day
              </li>
            </ul>
          </div>
          <div>
            <Heading className="mb-6 text-blue-800" size="h3">
              Who should&nbsp;attend
            </Heading>
            <p className="mb-4">
              The entire Elastic community is welcome: Developers, architects,
              IT professionals, DevOps engineers, and anyone working with or
              interested in the Elasticsearch platform.
            </p>
            <Wave />
          </div>
        </div>
      </Panel>
      <Panel className="bg-zinc-100">
        <Heading className="mb-10 text-blue-800 md:text-center" size="h3">
          Spiffy headline here like this
        </Heading>
        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Heading className="mb-4" size="h5">
              The keynote
            </Heading>
            <p>
              We’re moving fast! Hear about the latest product updates and
              announcements right from our leadership.
            </p>
          </div>
          <div>
            <Heading className="mb-4" size="h5">
              The keynote
            </Heading>
            <p>
              We’re moving fast! Hear about the latest product updates and
              announcements right from our leadership.
            </p>
          </div>
          <div>
            <Heading className="mb-4" size="h5">
              The keynote
            </Heading>
            <p>
              We’re moving fast! Hear about the latest product updates and
              announcements right from our leadership.
            </p>
          </div>
          <div>
            <Heading className="mb-4" size="h5">
              The keynote
            </Heading>
            <p>
              We’re moving fast! Hear about the latest product updates and
              announcements right from our leadership.
            </p>
          </div>
        </div>
      </Panel>
      <Panel>
        <Heading className="mb-14 text-blue-800 text-center" size="h3">
          Register for {globalData.series_name} {data.title}
        </Heading>
        <p>FORM</p>
      </Panel>
      <Footer data={footerData} globalData={globalData} location={data.title} />
    </>
  );
}

export async function getStaticPaths() {
  const [allLocations] = await Paths("event");

  const paths = allLocations.map((location) => {
    return {
      params: {
        location: location.url,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { location } = params;
  const [allLocations] = await Paths("event");
  const footerData = await Query("footer", "blt6f73b6b55468ee3a");
  const globalData = await Query("site_config", "blt6e01f6ef8267a554");

  const locationData = allLocations.find((loc) => loc.url === location);

  return {
    props: {
      data: locationData,
      footerData,
      globalData,
    },
  };
}
