import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Panel from "@/components/Panel";
import Footer from "@/components/Footer";

export default function Location({ location }) {
  const logos = ["adobe", "microsoft", "slack", "twilio", "uber"];
  return (
    <>
      <Hero
        footer={
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="gap-4 grid md:grid-cols-3 grow text-white">
              <div>
                <Heading className="text-peach" size="h5">
                  Cost
                </Heading>
                <p>Early bird registration: $299</p>
                <p>Regular registration: $399</p>
              </div>
              <div>
                <Heading className="text-peach" size="h5">
                  Location
                </Heading>
                <p>May 2&mdash;3, 2024</p>
                <p>
                  25 Red Lion Square
                  <br />
                  London, WC1R 4RL
                </p>
              </div>
              <div>
                <Heading className="text-peach" size="h5">
                  Date
                </Heading>
                <p>May 2&mdash;3, 2024</p>
              </div>
            </div>
            <Image
              alt="image of Conway Hall East"
              className="flex-shrink-0"
              height={190}
              src="/images/location.png"
              width={392}
            />
          </div>
        }
        imageAlt="collage of stars, shapes and lines with a grungy texture and a picture of Big Ben in London"
        imageHeight={552}
        imageSrc="/images/location-london.png"
        imageWidth={744}
        mainContent={
          <>
            <Heading
              className="font-semibold mb-8 text-peach"
              color="peach"
              size="h5"
            >
              Find answers for what&apos;s next
            </Heading>
            <Heading className="text-white" size="h1">
              ElasticON Global London
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
              <Link
                className="flex gap-2 hover:gap-4 items-center text-blue-400 ml-6"
                href="/sponsor"
              >
                View agenda
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
      />
      <Panel>
        <div className="flex flex-col lg:flex-row gap-10">
          <div>
            <Heading className="mb-6 text-blue-800" size="h3">
              What to expect
            </Heading>
            <p className="mb-4">
              Designed for you, ElasticON London will show you how to get the
              most relevant search, observability, and security results at
              unprecedented speed with open and flexible enterprise solutions —
              powered by Elasticsearch Platform and AI.
            </p>
            <p>
              You&apos;ll see how other customers are using Elastic to lead
              their industries, get the latest solutions, news and updates, and
              connect with our experts to get an inside track on how Elastic can
              help you be even more efficient every day.
            </p>
          </div>
          <div>
            <Heading className="mb-6 text-blue-800" size="h3">
              Who should attend
            </Heading>
            <p>
              The entire Elastic community is welcome: Developers, architects,
              IT professionals, DevOps engineers, and anyone working with or
              interested in the Elasticsearch platform.
            </p>
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
          ElasticON sponsors
        </Heading>
        <div className="flex flex-col lg:flex-row justify-center">
          {logos.map((name, index) => (
            <Image
              alt="placeholder sponsor logo"
              height={36}
              key={index}
              src={`/images/logo-${name}.png`}
              width={189}
            />
          ))}
        </div>
      </Panel>
      <Footer location="London" />
    </>
  );
}
