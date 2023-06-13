import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import cn from "classnames";

import Heading from "./Heading";

const continents = [
  "North & South America",
  "Europe",
  "Africa & Middle East",
  "Asia Pacific",
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
      className={`bg-blue-900 rounded-tl-lg rounded-tr-lg text-white ${containerClasses}`}
    >
      <Heading className="mb-10 text-center" size="h3">
        Find an event near you
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
        <Tab.Panels className="mt-10">
          <Tab.Panel>
            <div className="gap-10 grid lg:grid-cols-2">
              {NorthSouthAmerica.map((data, index) => (
                <Link
                  className={`block border-2 border-blue-800 px-10 py-6 rounded-sm text-white hover:border-white ${
                    !data.tier1 &&
                    "flex md:flex-row md:items-center md:justify-between"
                  }`}
                  href="#"
                  key={`tab-panel-${index}`}
                >
                  <Heading
                    className="font-normal text-peach"
                    size={data.tier1 ? "h3" : "h4"}
                  >
                    {data.name}
                  </Heading>
                  <p
                    className={`font-normal ${data.tier1 && "text-2xl mt-4"}`}
                    size="h5"
                  >
                    {data.date}
                  </p>
                  {data.tier1 && <p className="mt-2">{data.location}</p>}
                </Link>
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
