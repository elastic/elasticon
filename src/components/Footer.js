import Button from "@/components/Button";
import Heading from "@/components/Heading";

import footerBg from "@/images/pattern-footer.png";
import Image from "next/image";

export default function Footer({ data, eventEnded, globalData, locationData }) {
  return (
    <>
      <div className="relative bg-zinc-900 text-center text-white p-16 md:p-28 rounded-tl-sm md:rounded-tl-md lg:rounded-tl-lg rounded-tr-sm md:rounded-tr-md lg:rounded-tr-lg">
        <Image src={footerBg} alt="" className="hidden lg:block absolute top-1/2 left-1/2 w-[90%] h-auto transform -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10">
          {locationData ? (
            <>
              <Heading className="mb-6" size="h3">
                {eventEnded ? `Didn't make it to ${locationData.title}?` : `Can't make it to ${locationData.title}?`}
              </Heading>
              <p className={locationData.title && "mb-10"}>
                {locationData.title
                  ? `Find an ${globalData.series_name} near you.`
                  : data?.description}
              </p>
            </>
          ) : (
            <Heading className="mb-10" size="h3">
              We&apos;re looking forward to seeing you!
            </Heading>
          )}

          <Button outlined href={locationData ? `/?region=${locationData.region}#locations` : "/#locations"}>
            View all events
          </Button>
        </div>
      </div >
    </>
  );
}
