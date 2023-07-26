import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Listbox, Tab } from "@headlessui/react";
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
  const [selectedLocation, setSelectedLocation] = useState(continents[0]);
  const selectedIndex = continents.indexOf(selectedLocation);

  return (
    <div
      className={`bg-[url('/images/pattern-planet.png')] bg-[8%_35px] md:bg-[15%_65px] md:bg-[length:96px_96px] bg-[length:74px_74px] bg-blue-900 bg-no-repeat mb-4 pb-5 md:pb-8 px-10 md:px-14 rounded-sm md:rounded-md lg:rounded-lg text-white`}
      id="locations"
    >
      <Heading className="mb-10 pt-12 md:pt-20 text-center" size="h3">
        Coming soon to you
      </Heading>
      <Tab.Group selectedIndex={selectedIndex}>
        <Tab.List className="md:block border-b-2 border-blue-800 hidden text-center">
          {continents.map((continent, index) => (
            <Tab as={Fragment} key={`tab-${index}`}>
              {({ selected }) => (
                <button
                  className={`inline-block -mb-0.5 mx-4 py-2 ${
                    selected ? "border-b-2 border-teal" : ""
                  }`}
                  onClick={() => setSelectedLocation(continent)}
                  onKeyUp={() => setSelectedLocation(continent)}
                >
                  {continent}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <div className="md:hidden relative">
          <Listbox value={selectedLocation} onChange={setSelectedLocation}>
            <Listbox.Button className="bg-white flex rounded-[4px] px-4 py-3 text-black text-left w-full">
              <span className="block w-11/12 truncate">{selectedLocation}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute bg-white rounded-[4px] p-2 shadow text-black top-14 w-full z-10">
              {continents.map((c, i) => (
                <Listbox.Option key={`conteinent-${i}`} value={c}>
                  {({ active, selected }) => (
                    <div
                      className={`cursor-pointer flex items-center p-2 hover:bg-blue-200 rounded-[2px] ${
                        active && "bg-blue-200"
                      }`}
                    >
                      <span className="flex-1">{c}</span>
                      {selected && (
                        <span className="flex-shrink-0">
                          <CheckIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </span>
                      )}
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <Tab.Panels className="my-12">
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
      <div className="border-blue-800 border-y-2 relative">
        <Marquee className="h-16 md:h-24">
          <div className="flex flex-nowrap gap-10">
            <p className="text-xl md:text-2xl text-teal">
              Dates and event details coming soon!
            </p>
            <p className="text-xl md:text-2xl">Stay tuned for more details.</p>
            <p className="text-xl md:text-2xl text-teal">
              Dates and event details coming soon!
            </p>
            <p className="mr-10 text-xl md:text-2xl">
              Stay tuned for more details.
            </p>
          </div>
        </Marquee>
        <div className="absolute bg-gradient-to-l from-blue-900 inset-y-0 right-0 w-1/4 z-10" />
        <div className="absolute bg-gradient-to-r from-blue-900 inset-y-0 left-0 w-1/4 z-10" />
      </div>
      <Image
        alt="illustrative star"
        className="mx-auto my-10"
        height={136}
        src="/images/locations-accent.svg"
        width={600}
      />
    </div>
  );
}
