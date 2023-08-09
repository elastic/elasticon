const heroPaddingBottom = `pb-10 sm:pb-14 md:pb-20 lg:pb-24`;
const heroPaddingTop = `pt-10`;
const heroPaddingLeft = `pl-10 sm:pl-14 md:pl-20 lg:pl-24`;
const heroPaddingRight = `pr-10 sm:pr-14 md:pr-20`;

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
      <div
        className={`gap-10 md:gap-20 grid lg:grid-cols-2 items-center ${
          !footer && heroPaddingBottom
        } ${heroPaddingLeft} ${heroPaddingRight} ${heroPaddingTop}`}
      >
        <div>{mainContent}</div>
        <div className="flex items-center justify-end">
          {/* eslint-disable-next-line */}
          <img alt={imageAlt} src={imageSrc} />
        </div>
      </div>
      {footer && (
        <>
          <img
            src="/events/elasticon/images/cut-left.svg"
            className="float-left h-12 w-6 md:h-24 md:w-12 lg:h-48 lg:w-24 -translate-x-[0.5px]"
          />
          <img
            src="/events/elasticon/images/cut-right.svg"
            className="float-right h-12 w-6 md:h-24 md:w-12 lg:h-48 lg:w-24 translate-x-[0.5px]"
          />
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
