import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import cn from "classnames";

import Heading from "./Heading";

const continents = [
  "Americas",
  "Europe, the Middle East, and Africa",
  "Asia-Pacific",
  "Public Sector",
];

const NorthSouthAmerica = [
  {
    name: "Miami",
    date: "June 13-14, 2024",
    location: "South Beach Conference Center",
    tier1: true,
  },
  {
    name: "Seattle",
    date: "July 18-19, 2024",
    location: "Center for The Performing Arts",
    tier1: true,
  },
  {
    name: "Toronto",
    date: "August 2-3, 2024",
    location: "The Distillery District",
    tier1: true,
  },
  {
    name: "Boston",
    date: "June 12, 2024",
  },
  {
    name: "Denver",
    date: "June 29, 2024",
  },
  {
    name: "Houston",
    date: "July 8, 2024",
  },
  {
    name: "Mexico City",
    date: "July 20, 2024",
  },
  {
    name: "San Francisco",
    date: "August 2, 2024",
  },
  {
    name: "Sao Palo",
    date: "August 21, 2024",
  },
  {
    name: "Washington DC",
    date: "September 10, 2024",
  },
];

export default function Locations() {
  const containerClasses = cn("p-10", "sm:p-14", "md:p-20", "lg:p-24");

  return (
    <div
      className={`bg-blue-900 mb-4 rounded-tl-sm rounded-tr-sm md:rounded-tl-md md:rounded-tr-md lg:rounded-tl-lg lg:rounded-tr-lg text-white ${containerClasses}`}
    >
      <Heading className="mb-10 text-center" size="h3">
        Coming soon to you
      </Heading>
      <Tab.Group>
        <Tab.List className="border-b-2 border-blue-800 text-center">
          {continents.map((continent, index) => (
            <Tab as={Fragment} key={`tab-${index}`}>
              {({ selected }) => (
                <button
                  className={`inline-block -mb-0.5 mx-4 py-2 ${
                    selected ? "border-b-2 border-teal" : ""
                  }`}
                >
                  {continent}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="my-16">
          <Tab.Panel>
            <div className="gap-10 grid lg:grid-cols-2 max-w-xl mx-auto">
              <Heading className="font-normal text-peach" size="h5">
                Atlanta, USA
              </Heading>
              <Heading className="font-normal text-peach" size="h5">
                Dallas, USA
              </Heading>
              <Heading className="font-normal text-peach" size="h5">
                Sao Palo, Brazil
              </Heading>
              <Heading className="font-normal text-peach" size="h5">
                Chicago, USA
              </Heading>
              <Heading className="font-normal text-peach" size="h5">
                Portland, USA
              </Heading>
              <Heading className="font-normal text-peach" size="h5">
                Toronto, Canada
              </Heading>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <Marquee
        className="border-blue-800 border-y-2 py-8"
        gradient
        gradientColor={[16, 28, 63]}
      >
        <p className="text-2xl text-teal mr-6">
          Dates and event details coming soon!
        </p>
        <p className="text-2xl">Check back soon!</p>
      </Marquee>
      <Image
        alt="illustrative star"
        className="mx-auto translate-y-2 md:translate-y-6 lg:translate-y-10"
        height={192}
        src="/images/locations-star.svg"
        width={192}
      />
    </div>
  );
}
