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

const locationsLists = [
  [
    "Atlanta, GA",
    "Chicago, IL",
    "Dallas, TX",
    "New York City, NY",
    "Sao Paulo, Brazil",
    "Toronto, Canada",
  ],
  ["Barcelona, Spain", "Frankfurt, Germany", "London, UK", "Tel Aviv, Israel"],
  [],
  [],
];

export default function Locations() {
  const containerClasses = cn("px-10", "sm:px-14");

  return (
    <div
      className={`md:bg-[url('/images/pattern-planet.png')] bg-[15%_65px] bg-[length:96px_96px] bg-blue-900 bg-no-repeat mb-4 rounded-sm md:rounded-md lg:rounded-lg text-white ${containerClasses}`}
      id="locations"
    >
      <Heading className="mb-10 pt-12 md:pt-20 text-center" size="h3">
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
          {locationsLists.map((area, index) => (
            <Tab.Panel key={`area-${index}`}>
              <div className="gap-10 grid md:grid-cols-2 max-w-2xl mx-auto">
                {area.map((location, index) => (
                  <Heading
                    className={`font-normal text-peach`}
                    key={`location-${index}`}
                    size="h5"
                  >
                    {location}
                  </Heading>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <Marquee
        className="border-blue-800 border-y-2 h-24"
        gradient
        gradientColor={[16, 28, 63]}
      >
        <div className="flex flex-nowrap gap-10">
          <p className="text-2xl text-teal">
            Dates and event details coming soon!
          </p>
          <p className="text-2xl">Stay tuned for more details.</p>
          <p className="text-2xl text-teal">
            Dates and event details coming soon!
          </p>
          <p className="mr-10 text-2xl">Stay tuned for more details.</p>
        </div>
      </Marquee>
      <Image
        alt="illustrative star"
        className="mx-auto"
        height={192}
        src="/images/locations-star.svg"
        width={192}
      />
    </div>
  );
}
