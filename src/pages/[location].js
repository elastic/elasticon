import { ReactMarkdown } from "react-markdown/lib/react-markdown";
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

export default function Location({
  eventConfigData,
  locationData,
  footerData,
  globalData,
}) {
  const date = new Date(locationData.date).toLocaleDateString("en-US", {
    dateStyle: "long",
  });

  const address = locationData.venue_address.replace(/\n/g, "<br>");

  function replacePlaceholder(text) {
    return text.replace(/{LOCATION}/g, locationData.title);
  }

  console.log(locationData);

  return (
    <>
      <Hero
        footer={
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="gap-4 grid md:grid-cols-4 grow text-white">
              <div className="mb-4 md:mb-0">
                <Heading className="text-teal mb-4" size="h5">
                  Date
                </Heading>
                <p className="md:text-lg">{date}</p>
              </div>
              <div className="mb-4 md:mb-0">
                <Heading className="text-teal mb-4" size="h5">
                  Cost
                </Heading>
                <p className="md:text-lg">{locationData.cost}</p>
              </div>
              <div className="mb-4 md:mb-0">
                <Heading className="text-teal mb-4" size="h5">
                  Location
                </Heading>
                <p className="md:text-lg">
                  <a
                    className="border-b border-blue-800 hover:border-blue-400 hover:text-blue-400 pb-1"
                    href={locationData.venue_name.href}
                  >
                    {locationData.venue_name.title}
                  </a>
                </p>
                <p
                  className="mt-5 opacity-80"
                  dangerouslySetInnerHTML={{
                    __html: address,
                  }}
                />
              </div>
              {locationData.venue_image && (
                <img
                  alt="photo of the venue location"
                  className="rounded-sm"
                  src={locationData.venue_image.url}
                />
              )}
            </div>
          </div>
        }
        imageAlt={locationData.featured_image.description}
        imageHeight={552}
        imageSrc={locationData.featured_image.url}
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
              {globalData.series_name} {locationData.title}
            </Heading>
            <p className="text-white my-8">
              {replacePlaceholder(eventConfigData.description)}
            </p>
            <div className="flex items-center mb-10">
              <Button href="/register">Register now</Button>
              <Link
                className="flex gap-2 hover:gap-4 items-center text-blue-400 ml-6"
                href="#agenda"
              >
                View agenda
                <Image
                  alt="arrow icon"
                  height={12}
                  src="/events/elasticon/images/icon-right.svg"
                  width={25}
                />
              </Link>
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
              {eventConfigData.left_content.heading}
            </Heading>
            <ReactMarkdown className="markdown mb-4">
              {replacePlaceholder(eventConfigData.left_content.content)}
            </ReactMarkdown>
          </div>
          <div>
            <Heading className="mb-6 text-blue-800" size="h3">
              {eventConfigData.right_content.heading}
            </Heading>
            <p className="mb-8">
              {replacePlaceholder(eventConfigData.right_content.content)}
            </p>
            <Wave />
          </div>
        </div>
      </Panel>
      <Panel className="bg-zinc-100">
        <Heading className="mb-14 text-blue-800 md:text-center" size="h3">
          {eventConfigData.features.heading}
        </Heading>
        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-4">
          {eventConfigData.featuresData.map((feature, i) => (
            <div key={`feature-${i}`}>
              {/* eslint-disable-next-line */}
              <img alt={feature.icon.description} src={feature.icon.url} />
              <Heading className="my-4" size="h5">
                {feature.title}
              </Heading>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Panel>
      <div className="flex flex-col items-center mb-20">
        <iframe
          className="h-[800px] mb-10 w-full"
          src={locationData.agenda_cvent_module}
          title="Agenda"
        />
        <Button href="/register">Register now</Button>
      </div>
      <Footer
        data={footerData}
        globalData={globalData}
        location={locationData.title}
      />
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

  async function allEventConfigData() {
    try {
      const mainData = await Query("event_config", "blt8e9accc77ae68704");
      const featuresData = await Promise.all(
        mainData.features.features.map(async (ref) => {
          const referenceData = await Query(ref._content_type_uid, ref.uid);
          return referenceData;
        })
      );

      return {
        ...mainData,
        featuresData,
      };
    } catch (error) {
      console.error(error);
    }
  }

  const eventConfigData = await allEventConfigData();

  return {
    props: {
      eventConfigData,
      locationData,
      footerData,
      globalData,
    },
  };
}
