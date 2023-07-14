import Heading from "@/components/Heading";

export default function Footer({ data, location = false }) {
  return (
    <>
      <div className="lg:bg-[url('/events/elasticon/images/pattern-footer.png')] bg-[position:center_75%] bg-[size:90%] bg-no-repeat bg-zinc-900 text-center text-white p-16 md:p-28 rounded-tl-sm md:rounded-tl-md rounded-tr-sm md:rounded-tr-md">
        <Heading className="mb-6" size="h3">
          {data?.headline}
        </Heading>
        <p>{data?.description}</p>
      </div>
    </>
  );
}
