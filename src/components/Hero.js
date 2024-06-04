const heroPaddingBottom = `pb-10 sm:pb-14 md:pb-20 lg:pb-24`;
const heroPaddingTop = `pt-10`;
const heroPaddingLeft = `pl-10 sm:pl-14 md:pl-20 lg:pl-24`;
const heroPaddingRight = `pr-10 sm:pr-14 md:pr-20`;

import cutLeft from "@/images/cut-left.svg";
import cutRight from "@/images/cut-right.svg";
import Image from "next/image";

export default function Hero({
  children,
  footer,
  imageAlt,
  imageSrc,
  mainContent,
  videoSrc
}) {
  const getVideo = (
    <div className="aspect-video overflow-hidden rounded-[12px] shadow-lg w-full">
      <iframe
        allowFullScreen
        allowtransparency="true"
        height="100%"
        src={`//play.vidyard.com/${videoSrc?.player_uuid}.html?`}
        title={videoSrc?.title}
        width="100%"
      ></iframe>
    </div>
  )

  return (
    <div
      className={`bg-blue-900 mb-4 overflow-hidden relative rounded-bl-sm md:rounded-bl-md lg:rounded-bl-lg rounded-br-sm md:rounded-br-md lg:rounded-br-lg`}
    >
      {children}
      <div
        className={`gap-10 md:gap-20 grid lg:grid-cols-2 items-center ${!footer && heroPaddingBottom
          } ${heroPaddingLeft} ${heroPaddingRight} ${heroPaddingTop}`}
      >
        <div>{mainContent}</div>
        <div className="flex items-center justify-end">
          {/* eslint-disable-next-line */}
          {imageSrc && <img alt={imageAlt} src={imageSrc} />}
          {videoSrc?.player_uuid !== undefined && getVideo}
        </div>
      </div>
      {footer && (
        <>
          <Image src={cutLeft} alt="" className="float-left h-12 w-6 md:h-24 md:w-12 lg:h-48 lg:w-24 -translate-x-[0.5px]" />
          <Image src={cutRight} alt="" className="float-right h-12 w-6 md:h-24 md:w-12 lg:h-48 lg:w-24 translate-x-[0.5px]" />
          <div
            className={`clear-both pb-12 md:pb-20 px-10 sm:px-14 md:px-20 lg:px-24`}
          >
            {footer}
          </div>
        </>
      )}
    </div>
  );
}
