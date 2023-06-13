import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="px-10 sm:px-14 md:px-20 lg:px-24 py-10 lg:py-12">
      <Link href="/">
        <p className="sr-only">ElasticON</p>
        <Image
          src="/logo.svg"
          alt="the classic elastic cluster logo with the word 'on' added to the right"
          width={200}
          height={40}
        />
      </Link>
    </div>
  );
}
