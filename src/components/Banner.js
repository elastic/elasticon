import Image from "next/image";
import Link from "next/link";

const Banner = ({ data }) => {
  return (
    <div className="bg-gradient-to-r from-pink to-yellow flex flex-col md:flex-row items-center justify-center md:gap-4 p-3 text-sm">
      <strong>{data.heading}</strong>
      <span>{data.subheading}</span>
      <Link
        className="flex gap-2 hover:gap-4 items-center transition-all underline"
        href={data.cta.href}
      >
        {data.cta.title}
        <Image
          alt="arrow icon"
          height={12}
          src="/events/elasticon/images/icon-right-black.svg"
          width={25}
        />
      </Link>
    </div>
  );
};

export default Banner;