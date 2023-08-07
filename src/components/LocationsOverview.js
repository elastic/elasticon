import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Listbox, Tab } from "@headlessui/react";
import Image from "next/image";
import Heading from "./Heading";

const continents = [
  "Americas",
  "Europe, the Middle East, and Africa",
  "Asia-Pacific",
  "Public Sector",
];

export default function Locations({ data }) {
  const [selectedLocation, setSelectedLocation] = useState(continents[0]);
  const selectedIndex = continents.indexOf(selectedLocation);

  const eventsAMER = data.filter((event) => event.region === "AMER");
  const eventsAPAC = data.filter((event) => event.region === "APAC");
  const eventsEMEA = data.filter((event) => event.region === "EMEA");
  const eventsPUB = data.filter((event) => event.region === "Public Sector");

  const events = [eventsAMER, eventsEMEA, eventsAPAC, eventsPUB];

  console.log(events);

  return (
    <div
      className={`bg-[url('/events/elasticon/images/pattern-planet.png')] bg-[8%_35px] md:bg-[15%_65px] md:bg-[length:96px_96px] bg-[length:74px_74px] bg-blue-900 bg-no-repeat mb-4 pb-5 md:pb-8 px-10 md:px-14 rounded-sm md:rounded-md lg:rounded-lg text-white`}
      id="locations"
    >
      <Heading className="mb-10 pt-12 md:pt-20 text-center" size="h3">
        Find an event near you
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
          {events.map((event, index) => (
            <Tab.Panel key={`event=${index}`}>
              <div className="gap-10 grid lg:grid-cols-2 max-w-6xl mx-auto">
                {event.map((e, i) => (
                  <a
                    href={`/events/elasticon/${e.url}`}
                    className="border-2 border-blue-800 hover:border-white flex flex-col sm:flex-row sm:items-center p-6 rounded-sm hover:shadow-[0_0_30px_0_rgba(255,255,255,0.2)]"
                  >
                    <div className="flex-1 mb-8 sm:mb-0">
                      <Heading
                        className="font-normal mb-4 text-peach"
                        size="h4"
                      >
                        {e.title}
                      </Heading>
                      <p className="font-bold text-lg">{e.date}</p>
                      <p>{e.venue_name.title}</p>
                    </div>
                    <img
                      alt={e.small_image.description}
                      className="flex-shrink-0 w-48"
                      src={e.small_image.url}
                    />
                  </a>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
      <Image
        alt="illustrative star"
        className="mx-auto my-10"
        height={136}
        src="/events/elasticon/images/locations-accent.svg"
        width={600}
      />
    </div>
  );
}
