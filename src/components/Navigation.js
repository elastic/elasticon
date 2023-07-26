import { Disclosure } from "@headlessui/react";

import config from "../../next.config";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const navData = [
  {
    name: "Speakers",
    href: "/location/speakers",
  },
  {
    name: "Agenda",
    href: "/location/agenda",
  },
  {
    name: "Travel",
    href: "/location/travel-info",
  },
  {
    name: "Sponsors",
    href: "#",
  },
  {
    name: "Register",
    href: "/location/registration",
  },
];

export default function Navigation({ location }) {
  const paddingX = "px-10 sm:px-14 md:px-20 lg:px-24";
  const paddingY = "py-4 md:py-6";

  const NavElements = () => (
    <>
      {navData.map((element, index) => (
        <Link
          className="py-2 mr-6"
          href={element.href}
          key={`nav-link-${index}`}
        >
          {element.name}
        </Link>
      ))}
    </>
  );

  return (
    <Disclosure>
      <nav
        className={`flex flex-row items-center justify-between text-white ${paddingX} ${paddingY}`}
      >
        <Link href="/events/elasticon">
          <p className="sr-only">ElasticON</p>
          <Image
            alt="the classic elastic cluster logo with the word 'on' added to the right"
            className="h-auto w-48"
            height={40}
            src={config.basePath + "/images/logo.svg"}
            width={200}
          />
        </Link>

        {location && (
          <div className="flex items-center">
            <Disclosure.Button className="flex items-center justify-center lg:hidden mr-6">
              Menu
            </Disclosure.Button>

            <div className="hidden items-center justify-end lg:flex">
              <NavElements />
            </div>

            <Button href="/location/registration">Register now</Button>
          </div>
        )}
      </nav>

      <Disclosure.Panel
        className={`bg-zinc-950 flex flex-col rounded-br-md text-white lg:hidden ${paddingX} ${paddingY}`}
      >
        <NavElements />
      </Disclosure.Panel>
    </Disclosure>
  );
}
