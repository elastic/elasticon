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
      <div className="gap-24 grid lg:grid-cols-2 items-center md:pl-20 lg:pl-24 pt-8 pb-24">
        <div className="pl-10 sm:pl-14 md:pl-0 pr-10 sm:pr-14 lg:pr-0">
          {mainContent}
        </div>
        <div className="flex items-center justify-end pl-10 md:pl-0">
          {/* eslint-disable-next-line */}
          <img alt={imageAlt} src={imageSrc} />
        </div>
      </div>
      {footer && (
        <div className="pb-12 md:pb-20 px-10 sm:px-14 md:px-20 lg:px-24">
          {footer}
        </div>
      )}
    </div>
  );
}
