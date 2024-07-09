import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Head from "next/head";
import Query, { Paths } from "../../lib/contentstack";

import config from "../../next.config";

import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Invited from "@/components/Invited";
import LocationsOverview from "@/components/LocationsOverview";
import Panel from "@/components/Panel";
import Navigation from "@/components/Navigation";

import adviceImage from "@/images/image-advice.png";
import Image from "next/image";

const solutionsAfter = `
  after:absolute
  after:bg-[url('/events/elasticon/images/pattern-gray.png')]
  after:bg-contain
  after:bg-no-repeat
  after:-bottom-32
  after:content-[' ']
  after:h-72
  after:-right-32
  after:w-72
`;

const solutionsBefore = `
  before:absolute
  before:bg-[url('/events/elasticon/images/pattern-gray.png')]
  before:bg-contain
  before:bg-no-repeat
  before:content-[' ']
  before:h-72
  before:-left-28
  before:-top-28
  before:w-72
`;

export default function Home({ data }) {
  const { bannerData, eventsData, footerData, globalData, homepageData } = data;
  const { benefitData, featuresData, invitationData, solutionData } =
    homepageData;

  return (
    <>
      <Head>
        <title>{globalData.seo_metadata.title}</title>
        <meta
          name="description"
          content={globalData.seo_metadata.description}
        />
      </Head>
      {bannerData && bannerData.show && (
        <Banner data={bannerData} />
      )}
      <Hero
        imageAlt={homepageData.hero.image.description}
        imageSrc={homepageData.hero.image.url}
        mainContent={
          <>
            <Heading
              className="font-semibold mb-8 text-teal"
              color="peach"
              size="h4"
            >
              {globalData?.series_name}
            </Heading>
            <Heading className="text-white" size="h1">
              {homepageData?.hero.headline}
            </Heading>
            <p className="text-white my-8">{homepageData?.hero.description}</p>
            <div className="flex items-center">
              <Button href={homepageData?.hero.main_cta.href}>
                {homepageData?.hero.main_cta.title}
              </Button>
            </div>
          </>
        }
      >
        <Navigation />
      </Hero>
      <Invited data={invitationData} />
      <Panel
        className={`bg-gradient-to-b from-white to-zinc-100 overflow-hidden relative ${solutionsAfter} ${solutionsBefore}`}
      >
        <Heading className="mb-10 md:mb-16 text-center text-blue-800" size="h3">
          {homepageData.solution_overviews.headline}
        </Heading>
        <div className="gap-x-24 grid lg:grid-cols-3">
          {solutionData.map((solution, i) => (
            <div className="mb-10 lg:mb-0" key={`solution-${i}`}>
              <Heading className="mb-4 text-black" size="h5">
                {solution.headline}
              </Heading>
              <ReactMarkdown className="markdown markdown-lg text-black">
                {solution.description}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </Panel>
      <Panel
        className={`bg-zinc-900 overflow-hidden relative text-white before:opacity-10 ${solutionsBefore}`}
      >
        <Heading className="mb-10 md:mb-16 text-center text-teal" size="h3">
          {benefitData.headline}
        </Heading>
        <div className="gap-10 grid lg:grid-cols-2 items-center xl:-my-14">
          <div>
            <ReactMarkdown className="markdown">
              {benefitData.description}
            </ReactMarkdown>
          </div>
          <div>
            <Image
              alt={homepageData.event_features.image.description}
              src={adviceImage}
            />
          </div>
        </div>
      </Panel>
      <Panel>
        <Heading className="mb-10 md:mb-16 text-center text-blue-800" size="h3">
          {homepageData.event_features.headline}
        </Heading>
        <div className="gap-12 grid lg:grid-cols-2 items-center">
          {/* eslint-disable-next-line */}
          <img
            alt={homepageData.event_features.image.description}
            src={homepageData.event_features.image.url}
          />
          <div className="gap-12 grid sm:grid-cols-2 grid-rows-2">
            {featuresData.map((feature, i) => (
              <div key={`feature-${i}`}>
                {/* eslint-disable-next-line */}
                <img alt={feature.icon.description} src={feature.icon.url} />
                <Heading className="text-black my-4" size="h5">
                  {feature.headline}
                </Heading>
                <p className="text-zinc-900">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Panel>
      <LocationsOverview data={eventsData} />
      <Panel>
        <div className="text-center mb-10">
          <Heading className="mb-3 text-blue-900" size="h4">
            {homepageData.watch.headline}
          </Heading>
          <p className="mb-5">{homepageData.watch.description}</p>
          <Button href={homepageData.watch.cta.href}>{homepageData.watch.cta.title}</Button>
        </div>
        <div className="gap-10 grid md:grid-cols-2">
          {homepageData.watchData.map((video, i) => (
            <div key={`watch-video-${i}`}>
              <div className="aspect-video overflow-hidden rounded-sm shadow-lg w-full">
                <iframe
                  allowFullScreen
                  allowtransparency="true"
                  height="100%"
                  src={`//play.vidyard.com/${video.vidyard_uuid}.html?`}
                  title={video.title}
                  width="100%"
                ></iframe>
              </div>
              <p className="mt-6 text-black text-center">
                <span className="font-black">{video.title}</span> |{" "}
                {video.length}
              </p>
            </div>
          ))}
        </div>
      </Panel>
      <Footer data={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const [eventsData] = await Paths("event");
  const footerData = await Query("footer", "blt6f73b6b55468ee3a");
  const globalData = await Query("site_config", "blt6e01f6ef8267a554");

  async function AlertBannerData() {
    try {
      return await Query("alert_banner", "blt627d8ffb27ca2405");
    } catch (error) {
      console.log(error);
    }
  }

  async function QueryHomepageData() {
    try {
      const data = await Query("homepage", "blt1a1fa44a34ef336f");
      const benefitData = await Query(
        data.benefit[0]._content_type_uid,
        data.benefit[0].uid
      );
      const featuresData = await Promise.all(
        data.event_features.features.map(async (ref) => {
          const referenceData = await Query(ref._content_type_uid, ref.uid);
          return referenceData;
        })
      );
      const invitationData = await Query(
        data.invitation[0]._content_type_uid,
        data.invitation[0].uid
      );
      const solutionData = await Promise.all(
        data.solution_overviews.reference.map(async (ref) => {
          const referenceData = await Query(ref._content_type_uid, ref.uid);
          return referenceData;
        })
      );
      const watchData = await Promise.all(
        data.watch.video.map(async (ref) => {
          const referenceData = await Query(ref._content_type_uid, ref.uid);
          return referenceData;
        })
      );

      return {
        ...data,
        benefitData,
        featuresData,
        invitationData,
        solutionData,
        watchData,
      };
    } catch (error) {
      console.error(error);
    }
  }

  const bannerData = await AlertBannerData() || null;
  const allHomepageData = await QueryHomepageData();

  return {
    props: {
      data: {
        bannerData,
        eventsData,
        footerData,
        globalData,
        homepageData: allHomepageData,
      },
    },
  };
}
