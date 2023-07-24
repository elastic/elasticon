import Heading from "@/components/Heading";
import Wave from "@/components/Wave";

export default function Invited({ data }) {
  return (
    <div className="border-2 border-dashed border-zinc-400 flex flex-col md:flex-row items-center mb-4 p-9 rounded-md md:rounded-full">
      <Wave />
      <div className="max-w-4xl mx-auto md:px-8 text-zinc-900 text-center">
        <Heading
          className={`inline-block relative text-black`}
          size="h4"
        >
          {data.headline}
        </Heading>
        <p className="mt-3 text-black text-lg">{data.description}</p>
      </div>
      <Wave direction="right" />
    </div>
  );
}
