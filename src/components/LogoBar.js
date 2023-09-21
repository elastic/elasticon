import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";

export default function LogoBar ({ data }) {
  const hasCtaBelowTitle = Boolean(data?.cta && data?.cta?.link && data?.cta?.link?.href && data?.style.cta_group_location === 'below topic heading')
  const hasCtaBelowLogos = Boolean(data?.ctacta_group && data?.cta?.link && data?.cta?.link?.href && data?.style.cta_group_location === 'below logos')

  const tertiaryCta = () => (
    <Link
      className="btn-tertiary flex gap-2 hover:gap-4 items-center text-blue-600 hover:ml-2 font-bold hover:text-blue-950 hover:ease-in hover:duration-100"
      href={data?.cta?.link?.href}
    >
      {data?.cta?.link?.title}
      <svg width="27" height="14" viewBox="0 0 27 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
        <path d="M0 7H25" stroke="#0077CC" strokeWidth="2" />
        <path d="M19 1L25 7L19 13" stroke="#0077CC" strokeWidth="2" />
      </svg>
    </Link>
  )

  return (
    <>
      <Heading className="mb-8" size="h4">{data.topic_heading_l10n}</Heading>

      {hasCtaBelowTitle && (tertiaryCta())}

      <div className='flex flex-row flex-wrap justify-center space-x-8 w-5/6' id="logos">
        {data?.logo_bar?.map((logo, index) => (
          <React.Fragment key={index}>
            <img
              alt={logo.title_l10n}
              className="px-3 py-6 max-md:px-2 max-md:py-2 hover:-translate-y-2 ease-in duration-300"
              src={logo.logo.url}
              height="40"
              width="135"
            />
          </React.Fragment>
        ))}
      </div>

      {hasCtaBelowLogos && (tertiaryCta())}
    </>
  );
}