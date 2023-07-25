import Image from "next/image";

// import Button from "@/components/Button";
// import Navigation from "@/components/Navigation";

export default function Hero({
  children,
  footer,
  imageAlt,
  imageSrc,
  mainContent,
}) {
  return (
    <div
      className={`bg-blue-900 mb-4 overflow-hidden relative rounded-bl-sm md:rounded-bl-md lg:rounded-bl-lg rounded-br-sm md:rounded-br-md lg:rounded-br-lg`}
    >
      {children}
      <div className="gap-24 grid md:grid-cols-2 items-center md:pl-20 lg:pl-24 pt-4 pb-16">
        <div className="pl-10 sm:pl-14 md:pl-0 pr-10 sm:pr-14 md:pr-0">
          {mainContent}
        </div>
        <div className="flex items-center justify-end">
          {/* eslint-disable-next-line */}
          <img alt={imageAlt} src={imageSrc} />
        </div>
      </div>
      {footer && (
        <>
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
        </>
      )}
    </div>
  );
}
