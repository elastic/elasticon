import Heading from "@/components/Heading";

export default function Footer({ data, globalData, location }) {
  return (
    <>
      <div className="lg:bg-[url('/events/elasticon/images/pattern-footer.svg')] bg-[position:center_50%] bg-[size:90%] bg-no-repeat bg-zinc-900 text-center text-white p-16 md:p-28 rounded-tl-sm md:rounded-tl-md rounded-tr-sm md:rounded-tr-md">
        <Heading className="mb-6" size="h3">
          {data?.headline}
        </Heading>
        <p>{data?.description}</p>
      </div>
      {location && (
        <div className="bg-teal font-bold font-display p-6 text-center text-lg">
          <p>
            Can't make it to {globalData.series_name} {location}?{" "}
            <a className="underline" href="/events/elasticon#locations">
              Find a location
            </a>{" "}
            closer to you.
          </p>
        </div>
      )}
    </>
  );
}
