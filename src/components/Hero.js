import cn from "classnames";
import Image from "next/image";

import Button from "@/components/Button";
import Navigation from "@/components/Navigation";

export default function Hero({
  footer,
  imageAlt,
  imageHeight,
  imageSrc,
  imageWidth,
  mainContent,
}) {
  return (
    <div className="bg-blue-900 mb-4 rounded-bl-sm md:rounded-bl-md rounded-br-sm md:rounded-br-md">
      <Navigation />
      <div className="gap-24 grid grid-cols-2 items-center pl-10 sm:pl-14 md:pl-20 lg:pl-24 pt-12">
        <div>{mainContent}</div>
        <div className="flex items-center justify-end">
          <Image
            alt={imageAlt}
            height={imageHeight}
            src={imageSrc}
            width={imageWidth}
          />
        </div>
      </div>
      <Image
        alt="backgrond pattern and section divider"
        className="my-2 w-28 md:my-0 md:w-fit"
        height={120}
        src="/images/hero-edge.svg"
        width={144}
      />
      <div className="pb-12 md:pb-20 px-10 sm:px-14 md:px-20 lg:px-24">
        {footer}
      </div>
    </div>
  );
}
