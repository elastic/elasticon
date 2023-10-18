import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoBar ({ data }) {
  const TertiaryCta = () => (
    <Link
      className="flex gap-2 hover:gap-4 items-center text-blue-600 hover:ml-2 font-bold"
      href={data.cta.link.href}
    >
      {data.cta.link.title}
      <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
        <path d="M0 7H25" stroke="#0077CC" strokeWidth="2" />
        <path d="M19 1L25 7L19 13" stroke="#0077CC" strokeWidth="2" />
      </svg>
    </Link>
  )

  return (
    <>
      <Heading className="mb-8" size="h4">{data.topic_heading_l10n}</Heading>

      {data.cta.link.href && (
        <TertiaryCta />
      )}

      <div className='flex flex-row flex-wrap items-center justify-center space-x-8 w-5/6' id="logos">
        {data.logo_bar.map((logo, index) => {
          if (logo?.logo?.url) {
            return (
              <React.Fragment key={index}>
                <Image
                  alt={logo.title_l10n}
                  className="px-3 py-6 max-md:px-2 max-md:py-2"
                  src={logo.logo.url}
                  height={40}
                  width={135}
                />
              </React.Fragment>
            )
          } else {
            return false
          }
        })}
      </div>
    </>
  );
}