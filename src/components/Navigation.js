import { Disclosure } from "@headlessui/react";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const navData = [
  {
    name: "Speakers",
    href: "#",
  },
  {
    name: "Agenda",
    href: "#",
  },
  {
    name: "Travel",
    href: "#",
  },
  {
    name: "Event details",
    href: "#",
  },
  {
    name: "Sponsors",
    href: "#",
  },
];

export default function Navigation() {
  const NavElements = () => (
    <>
      {navData.map((element, index) => (
        <Link className="mr-6" href={element.href} key={`nav-link-${index}`}>
          {element.name}
        </Link>
      ))}
    </>
  );

  return (
    <Disclosure as="Fragment">
      <nav className="flex flex-row items-center justify-between text-white">
        <Link href="/">
          <p className="sr-only">ElasticON</p>
          <Image
            src="/logo.svg"
            alt="the classic elastic cluster logo with the word 'on' added to the right"
            width={200}
            height={40}
          />
        </Link>

        <div className="flex items-center">
          <Disclosure.Button className="flex items-center justify-center lg:hidden mr-6">
            Menu
          </Disclosure.Button>

          <div className="hidden items-center justify-end lg:flex">
            <NavElements />
          </div>

          <Button href="/register">Register now</Button>
        </div>
      </nav>

      <Disclosure.Panel className="bg-zinc-950 flex flex-col text-white lg:hidden">
        <NavElements />
      </Disclosure.Panel>
    </Disclosure>
  );
}
