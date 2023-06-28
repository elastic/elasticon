import Link from "next/link";
import Heading from "@/components/Heading";

export default function Footer({ data, location = false }) {
  const { main_cta } = data;
  return (
    <>
      <div className="lg:bg-[url('/images/pattern-footer.png')] bg-[position:center_75%] bg-[size:90%] bg-no-repeat bg-zinc-900 text-center text-white p-16 md:p-28 rounded-tl-sm md:rounded-tl-md rounded-tr-sm md:rounded-tr-md">
        <Heading className="mb-6" size="h3">
          {data?.headline}
        </Heading>
        <p>{data?.description}</p>
        {/* <Button href={main_cta?.href} className="mt-6">
          {main_cta?.title}
        </Button> */}
      </div>
      {location && (
        <div className="bg-teal text-center p-4 md:p-6">
          <p>
            Can&apos;t make it to this ElasticON location?{" "}
            <Link className="underline" href="/">
              Find a location
            </Link>{" "}
            closer to you.
          </p>
        </div>
      )}
    </>
  );
}
