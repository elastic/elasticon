import cn from "classnames";
import Image from "next/image";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Navigation from "@/components/Navigation";

export default function Hero() {
  const heroContentClasses = cn(
    "flex",
    "flex-col",
    "lg:flex-row",
    "pl-10",
    "sm:pl-14",
    "md:pl-20",
    "lg:pl-24",
    "pt-16",
    "md:pt-24"
  );

  return (
    <>
      <div className="bg-blue-900">
        <Navigation />
        <div className={heroContentClasses}>
          <div className="max-w-xl">
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
              Get ready to find answers that matter! We’re bringing our biggest
              event of the year to you, so you can get the latest Elastic
              insights and meet with experts and fellow users. You’ll see how
              Elasticsearch powered by AI can help you take advantage of all
              your data to build, secure, and protect — and optimize your
              infrastructure and talent resources more efficiently.
            </p>
            <p className="font-bold text-white">
              It all stars at an ElasticON Global event near you!
            </p>
          </div>
          <div className="flex items-center justify-end w-full">
            <Image
              alt="collage of stars, shapes and lines with a grungy texture and a picture of a crowd looking at a stage"
              src="/images/hero-home.png"
              width={576}
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="bg-blue-900">
        <Button href="/register">View all events</Button>
      </div>
    </>
  );
}
