import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";

export default function Speakers() {
  return (
    <>
      <Hero
        mainContent={
          <div className="text-white pb-10 sm:pb-14 md:pb-20 lg:pb-24">
            <Heading className="text-peach" size="h5">
              ElasticON Global London
            </Heading>
            <Heading className="my-4" size="h2">
              Agenda
            </Heading>
            <p>May 2–3, 2024</p>
          </div>
        }
      >
        <Navigation location="Sydney" />
      </Hero>
      <div className="border-2 border-dashed border-[#ff0000] flex items-center h-screen justify-center mb-4">
        <span className="inline-block font-bold text-[#ff0000]">
          CVENT MODULE
        </span>
      </div>
      <Footer location="Sydney" />
    </>
  );
}
