const afterClasses = `
  after:-right-px
  after:absolute
  after:bg-[url('/events/elasticon/images/cut-right.svg')]
  after:bg-contain
  after:bg-no-repeat
  after:bottom-96
  after:content-[' ']
  after:h-12
  after:w-6
  lg:after:bottom-44
  lg:after:h-48
  lg:after:w-24
  md:after:bottom-44
  md:after:h-36
  md:after:w-16
`;

const beforeClasses = `
  before:-left-px
  before:absolute
  before:bg-[url('/events/elasticon/images/cut-left.svg')]
  before:bg-contain
  before:bg-no-repeat
  before:bottom-96
  before:content-[' ']
  before:h-12
  before:w-6
  lg:before:bottom-44
  lg:before:h-48
  lg:before:w-24
  md:before:bottom-44
  md:before:h-36
  md:before:w-16
`;

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
      <div className="lg:gap-24 grid lg:grid-cols-2 items-center md:pl-20 lg:pl-24 pt-8 pb-24 lg:pb-36">
        <div className="pl-10 sm:pl-14 md:pl-0 pr-10 sm:pr-14 lg:pr-0">
          {mainContent}
        </div>
        <div className="flex items-center justify-end pl-10 md:pl-0">
          {/* eslint-disable-next-line */}
          <img alt={imageAlt} src={imageSrc} />
        </div>
      </div>
      {footer && (
        <div
          className={`pb-12 md:pb-20 px-10 sm:px-14 md:px-20 lg:px-24 ${afterClasses} ${beforeClasses}`}
        >
          {footer}
        </div>
      )}
    </div>
  );
}
