import Image from "next/image";
import Link from "next/link";
import Query from "../../lib/contentstack";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Invited from "@/components/Invited";
import LocationsOverview from "@/components/LocationsOverview";
import Panel from "@/components/Panel";
import Navigation from "@/components/Navigation";

export default function Home({ data }) {
  const { footerData, globalData, homepageData } = data;
  const { benefitData, featuresData, invitationData, solutionData } =
    homepageData;

  console.log(homepageData);

  return (
    <>
      <Hero
        imageAlt="collage of stars, shapes and lines with a grungy texture and a picture of a crowd looking at a stage"
        imageHeight={600}
        imageSrc="/images/hero-home.png"
        imageWidth={576}
        mainContent={
          <>
            <Heading
              className="font-semibold mb-8 text-peach tracking-widest uppercase"
              color="peach"
              size="h5"
            >
              {globalData?.series_name} {globalData?.series_year}
            </Heading>
            <Heading className="text-white" size="h1">
              {homepageData?.hero.headline}
            </Heading>
            <p className="text-white my-8">{homepageData?.hero.description}</p>
            <div className="flex items-center">
              <Button href={homepageData?.hero.main_cta.href}>
                {homepageData?.hero.main_cta.title}
              </Button>
              {/* <Link
                className="flex gap-2 hover:gap-4 items-center text-blue-400 ml-6"
                href={homepageData?.hero.supporting_cta.href}
              >
                {homepageData?.hero.supporting_cta.title}
                <Image
                  alt="arrow icon"
                  height={12}
                  src="/images/icon-right.svg"
                  width={25}
                />
              </Link> */}
            </div>
          </>
        }
      >
        <Navigation />
      </Hero>
      <Invited data={invitationData} />
      <Panel className="bg-gradient-to-b from-white to-zinc-100">
        <Heading className="mb-10 md:mb-16 text-center text-blue-800" size="h3">
          {homepageData.solution_overviews.headline}
        </Heading>
        <div className="gap-x-24 grid grid-cols-3">
          {solutionData.map((solution, i) => (
            <div key={`solution-${i}`}>
              <Heading className="mb-4" size="h5">
                {solution.headline}
              </Heading>
              <ReactMarkdown className="markdown">
                {solution.description}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </Panel>
      <Panel className="bg-zinc-900 text-white">
        <Heading className="mb-10 md:mb-16 text-center text-teal" size="h3">
          {benefitData.headline}
        </Heading>
        <div className="gap-10 grid grid-cols-2">
          <div>
            <ReactMarkdown className="markdown">
              {benefitData.description}
            </ReactMarkdown>
          </div>
          <div>
            <p>Video</p>
          </div>
        </div>
      </Panel>
      <Panel>
        <Heading className="mb-10 md:mb-16 text-center text-blue-800" size="h3">
          {homepageData.event_features.headline}
        </Heading>
        <div className="gap-8 grid grid-cols-2 items-center">
          <img
            alt={homepageData.event_features.image.description}
            src={homepageData.event_features.image.url}
          />
          <div className="gap-8 grid grid-cols-2 grid-rows-2">
            {featuresData.map((feature, i) => (
              <div key={`feature-${i}`}>
                <Heading className="mb-4" size="h5">
                  {feature.headline}
                </Heading>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Panel>
      {/* <Locations /> */}
      <LocationsOverview />
      <Footer data={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const footerData = await Query("footer", "blt6f73b6b55468ee3a");
  const globalData = await Query("site_config", "blt6e01f6ef8267a554");

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

      return {
        ...data,
        benefitData,
        featuresData,
        invitationData,
        solutionData,
      };
    } catch (error) {
      console.error(error);
    }
  }

  const allHomepageData = await QueryHomepageData();

  return {
    props: {
      data: {
        footerData,
        globalData,
        homepageData: allHomepageData,
      },
    },
  };
}
