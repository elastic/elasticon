import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-2 border-dashed border-gray flex flex-col md:flex-row items-center p-9 rounded-md md:rounded-full">
        <Wave />
        <div className="max-w-4xl mx-auto md:px-8 text-black text-center">
          <Heading size="h4">You&apos;re invited!</Heading>
          <p className="mt-3 text-lg">
            The entire Elastic community is welcome: Developers, Architects, IT
            professionals, DevOps Engineers, and anyone working with or
            interested in the Elasticsearch Platform.
          </p>
        </div>
        <Wave direction="right" />
      </div>
      <Heading size="h3">Meet the latest Elasticsearch advancements</Heading>
      <Heading size="h5">Search</Heading>
      <Heading size="h5">Observability</Heading>
      <Heading size="h5">Security</Heading>
    </>
  );
}
