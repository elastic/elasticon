import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Query, { Paths } from "../../../lib/contentstack";
import dateFormat from "../../../lib/dateFormat";

import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Navigation from "@/components/Navigation";
import Panel from "@/components/Panel";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";

import isPastDate from "../../../lib/ifPastDate";

export default function Location({
  bannerData,
  eventConfigDataCurrent,
  eventConfigDataEnded,
  locationData,
  logoBarData,
  footerData,
  globalData,
}) {
  const address = locationData.venue_address.replace(/\n/g, "<br>");
  const date = locationData.date[0]
    ? dateFormat(locationData.date[0], locationData.region, true)
    : "Coming soon";
  const eventEnded = isPastDate(locationData.date[0]);
  const eventConfigData = eventEnded ? eventConfigDataEnded : eventConfigDataCurrent;
  const registration = locationData.registration_url;

  function replacePlaceholder(text) {
    return text.replace(/{LOCATION}/g, locationData.title);
  }

  return (
    <>
      <Head>
        <title>{locationData?.seo?.title_l10n || globalData.seo_metadata.title}</title>
        <meta
          name="description"
          content={locationData?.seo?.description_l10n || globalData.seo_metadata.description}
        />
      </Head>
      {bannerData && bannerData.show && (
        <Banner data={bannerData} />
      )}
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
                {locationData.cost_footnote && <p className="text-sm">{locationData.cost_footnote}</p>}
              </div>
              <div className="mb-4 md:mb-0">
                <Heading className="text-teal mb-4" size="h5">
                  Location
                </Heading>
                <p className="md:text-lg">
                  {locationData.venue_name.title === "TBD" ? (
                    "TBD"
                  ) : (
                    <a
                      className="border-b border-blue-800 hover:border-blue-400 hover:text-blue-400 pb-1"
                      href={locationData.venue_name.href}
                    >
                      {locationData.venue_name.title}
                    </a>
                  )}
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
              {eventConfigData.eyebrow_text}
            </Heading>
            <Heading className="text-white" size="h1">
              {globalData.series_name} {locationData.title}
            </Heading>
            <p className="text-white my-8">
              {replacePlaceholder(eventConfigData.description)}
            </p>
            <div className="flex items-center mb-10">
              {!eventEnded && (
                <Button href={registration}>Register now</Button>
              )}
              {locationData.agenda_cvent_module && (
                <Link
                  className={`flex gap-2 hover:gap-4 items-center text-blue-400 ${!eventEnded && "ml-6"}`}
                  href={eventEnded ? "https://www.elastic.co/enterprise-search/generative-ai" : "#agenda"}
                >
                  {eventEnded ? "Innovate with AI" : "View agenda"}
                  <Image
                    alt="arrow icon"
                    height={12}
                    src="/events/elasticon/images/icon-right.svg"
                    width={25}
                  />
                </Link>
              )}
            </div>
          </>
        }
      >
        <Navigation location={locationData.title} registration={registration} eventEnded={eventEnded} />
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
            <ReactMarkdown className="markdown mb-4">
              {replacePlaceholder(eventConfigData.right_content.content)}
            </ReactMarkdown>
            {!eventEnded && <Wave />}
          </div>
        </div>
      </Panel>
      <Panel className="bg-zinc-100 mb-20">
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
      {locationData.agenda_cvent_module && !eventEnded && (
        <div className="flex flex-col items-center my-10 md:my-20" id="agenda">
          <iframe
            className="border-2 border-zinc-200 h-[85vh] mb-10 rounded-sm md:rounded-md lg:rounded-lg w-full"
            src={locationData.agenda_cvent_module}
            title="Agenda"
          />
        </div>
      )}
      {logoBarData && (
        <div className="flex flex-col items-center my-10 md:my-20" id="sponsors">
          <LogoBar
            data={logoBarData}
            eventEnded={eventEnded}
            location={locationData.title}
            seriesName={globalData.series_name}
          />
        </div>
      )}
      {locationData.registration_url && !eventEnded && (
        <div className="flex flex-col items-center my-10 md:my-20" id="register-now">
          <Button href={registration}>Register now</Button>
        </div>
      )}
      <Footer
        data={footerData}
        eventEnded={eventEnded}
        globalData={globalData}
        locationData={locationData}
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
  let logoBarData
  if (locationData.logo_bar_reference[0]) {
    logoBarData = await Query(locationData.logo_bar_reference[0]._content_type_uid, locationData.logo_bar_reference[0].uid);
  } else {
    logoBarData = '';
  }

  async function AlertBannerData() {
    try {
      return await Query("alert_banner", "blt627d8ffb27ca2405");
    } catch (error) {
      console.log(error);
    }
  }

  async function eventConfigData(id) {
    try {
      const currentData = await Query("event_config", id);
      const featuresData = await Promise.all(
        currentData.features.features.map(async (ref) => {
          const referenceData = await Query(ref._content_type_uid, ref.uid);
          return referenceData;
        })
      );

      return {
        ...currentData,
        featuresData,
      };
    } catch (error) {
      console.error(error);
    }
  }

  const bannerData = await AlertBannerData() || null;
  const eventConfigDataCurrent = await eventConfigData("blt8e9accc77ae68704") || null;
  const eventConfigDataEnded = await eventConfigData("blt3a278874b9efb3f1") || null;

  return {
    props: {
      bannerData,
      eventConfigDataCurrent,
      eventConfigDataEnded,
      locationData,
      logoBarData,
      footerData,
      globalData,
    },
  };
}
