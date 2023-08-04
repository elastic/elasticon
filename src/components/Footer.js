import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function Footer({ data, globalData, location }) {
  return (
    <>
      <div className="lg:bg-[url('/events/elasticon/images/pattern-footer.svg')] bg-[position:center_50%] bg-[size:90%] bg-no-repeat bg-zinc-900 text-center text-white p-16 md:p-28 rounded-tl-sm md:rounded-tl-md rounded-tr-sm md:rounded-tr-md">
        <Heading className="mb-6" size="h3">
          {location ? `Can't make it to ${location}?` : data?.headline}
        </Heading>
        <p className={location && "mb-10"}>
          {location
            ? `Find an ${globalData.series_name} near you.`
            : data?.description}
        </p>
        {location && (
          <Button outlined href="/#locations">
            View all events
          </Button>
        )}
      </div>
    </>
  );
}
