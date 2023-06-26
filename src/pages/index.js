import Link from "next/link";
import Image from "next/image";
import Query from "../../lib/contentstack";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Invited from "@/components/Invited";
import Locations from "@/components/Locations";
import Panel from "@/components/Panel";
import Navigation from "@/components/Navigation";

export default function Home({ data }) {
  const { footerData, globalData, homepageData } = data;
  const { invitationData } = homepageData;

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
              <Link
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
              </Link>
            </div>
          </>
        }
      >
        <Navigation />
      </Hero>
      <Invited data={invitationData} />
      <Panel className="bg-gradient-to-b from-white to-zinc-100">
        <Heading className="mb-10 md:mb-16 text-center text-blue-800" size="h3">
          Meet the latest Elasticsearch advancements
        </Heading>
        <div className="gap-x-16 grid grid-cols-3">
          <div>
            <Heading className="mb-4" size="h5">
              Search
            </Heading>
            <p>
              The Elasticsearch Relevance Engine™ (ESRE) is designed to power
              AI-based search applications. With its flexible toolkit, you can
              build fast, scalable search for your apps, websites, knowledge
              base, or ecommerce store.
            </p>
          </div>
          <div>
            <Heading className="mb-4" size="h5">
              Observability
            </Heading>
            <p>
              Solve problems faster with open, flexible and unified
              observability powered by machine learning and analytics. Unite
              logging, metrics, APM, synthetic monitoring, and universal
              profiling to break down silos to find answers fast.
            </p>
          </div>
          <div>
            <Heading className="mb-4" size="h5">
              Security
            </Heading>
            <p>
              Secure the data already in your clusters with Elastic Security.
              Advanced security analytics performed across all your data
              eliminates data silos, automates prevention and detection, and
              streamlines investigation and response.
            </p>
          </div>
        </div>
      </Panel>
      <Panel className="bg-zinc-900 text-white">
        <Heading className="mb-10 md:mb-16 text-center text-teal" size="h3">
          Expert advice. Community connections.
        </Heading>
        <Heading className="mb-4" size="h5">
          What to expect
        </Heading>
        <p>
          Designed for you, ElasticON [Location] will show you how to get the
          most relevant search, observability, and security results at
          unprecedented speed with open and flexible enterprise solutions —
          powered by the Elasticsearch Platform and AI.
        </p>
        <ul>
          <li>See how your peers are using Elastic to lead their industries</li>
          <li>Get the latest solutions, news, and updates</li>
          <li>Connect with our experts to get an inside track on how</li>
          <li>Elastic can help you be even more efficient every day</li>
        </ul>
      </Panel>
      <Locations />
      <Footer data={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const footerData = await Query("footer", "blt6f73b6b55468ee3a");
  const globalData = await Query("site_config", "blt6e01f6ef8267a554");
  // const homepageData = await Query("homepage", "blt1a1fa44a34ef336f");

  async function QueryHomepageData() {
    try {
      const data = await Query("homepage", "blt1a1fa44a34ef336f");
      const inviteData = await Query(
        data.invitation[0]._content_type_uid,
        data.invitation[0].uid
      );
      return {
        ...data,
        invitationData: inviteData,
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
