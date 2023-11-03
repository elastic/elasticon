import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = ({ data }) => {
  const [hide, setHide] = useState(false);
  
  useEffect(() => {
    let hideTimestamp;
    if (typeof window !== "undefined") {
      const hideElasticonBanner = JSON.parse(localStorage.getItem("hideElasticonBanner"));
      if (hideElasticonBanner) {
        hideTimestamp = hideElasticonBanner.timestamp;
        const notExpired = Date.now() - hideTimestamp < 3600000;
        if (notExpired) setHide(true);
      }
    }
  }, []);

  const handleClick = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("hideElasticonBanner", JSON.stringify({ timestamp: Date.now() }));
    }
    setHide(true);
  };

  if (hide) return null;

  return (
    <div className="bg-gradient-to-r from-pink to-yellow flex flex-col md:flex-row items-center justify-center md:gap-4 p-3 relative text-sm">
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
      <button
        className="absolute right-3 top-2"
        onClick={handleClick}
      >
        <span className="sr-only">Close banner</span>
        <Image
          alt="close icon"
          height={28}
          src="/events/elasticon/images/icon-close.svg"
          width={28}
        />
      </button>
    </div>
  );
};

export default Banner;