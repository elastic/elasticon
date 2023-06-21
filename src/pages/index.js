import Link from "next/link";
import Image from "next/image";
import Stack from "../../lib/contentstack";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Invited from "@/components/Invited";
import Locations from "@/components/Locations";
import Panel from "@/components/Panel";
import Navigation from "@/components/Navigation";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Hero
        footer={
          <div className="flex items-center">
            <Button href="/register">View all events</Button>
            <Link
              className="flex gap-2 hover:gap-4 items-center text-blue-400 ml-6"
              href="/sponsor"
            >
              Sponsor and event
              <Image
                alt="arrow icon"
                height={12}
                src="/images/icon-right.svg"
                width={25}
              />
            </Link>
          </div>
        }
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
              ElasticON 23/24 Global Series
            </Heading>
            <Heading className="text-white" size="h1">
              Find answers—for what’s next
            </Heading>
            <p className="text-white my-8">
              Get ready to find answers that matter! We&apos;re bringing our
              biggest event of the year to you, so you can get the latest
              Elastic insights and meet with experts and fellow users.
              You&apos;ll see how Elasticsearch powered by AI can help you take
              advantage of all your data to build, secure, and protect — and
              optimize your infrastructure and talent resources more
              efficiently.
            </p>
            <p className="font-bold text-white">
              It all stars at an ElasticON Global event near you!
            </p>
          </>
        }
      >
        <Navigation />
      </Hero>
      <Invited />
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
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const query = Stack.ContentType("event");
  const result = await query.fetch();

  console.log(result);

  return {
    props: {
      data: "test",
    },
  };
}
