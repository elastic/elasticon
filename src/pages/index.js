import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Invited from "@/components/Invited";
import Locations from "@/components/Locations";
import Panel from "@/components/Panel";

export default function Home() {
  return (
    <>
      <Hero />
      <Invited />
      <Panel className="bg-zinc-100">
        <Heading className="mb-10 md:mb-16 text-center" size="h3">
          Meet the latest Elasticsearch advancements
        </Heading>
        <div className="gap-x-16 grid grid-cols-3">
          <div>
            <Heading className="mb-4" size="h5">
              Search
            </Heading>
            <p>
              The Elasticsearch Relevance Engine™ (ESRE) is designed to power
              AI-based search applications. With its flexible toolkit, you can
              build fast, scalable search for your apps, websites, knowledge
              base, or ecommerce store.
            </p>
          </div>
          <div>
            <Heading className="mb-4" size="h5">
              Observability
            </Heading>
            <p>
              Accelerate problem resolution with open, flexible and unified
              observability powered by machine learning and analytics. From
              logging, metrics, APM, synthetic monitoring, and universal
              profiling, Elastic Observability ingests all of your telemetry
              data at scale and breaks down silos to help you find answers more
              quickly.
            </p>
          </div>
          <div>
            <Heading className="mb-4" size="h5">
              Security
            </Heading>
            <p>
              Secure the data already in your Elasticsearch clusters with
              Elastic Security. Advanced security analytics performed across all
              your data eliminates data silos, automates prevention and
              detection, and streamlines investigation and response.
            </p>
          </div>
        </div>
      </Panel>
      <Panel className="bg-zinc-900 text-white">
        <Heading className="mb-10 md:mb-16 text-center text-teal" size="h3">
          Expert advice. Community connections.
        </Heading>
        <Heading className="mb-4" size="h5">
          What to expect
        </Heading>
        <p>
          Designed for you, ElasticON [Location] will show you how to get the
          most relevant search, observability, and security results at
          unprecedented speed with open and flexible enterprise solutions —
          powered by the Elasticsearch Platform and AI.
        </p>
        <ul>
          <li>See how your peers are using Elastic to lead their industries</li>
          <li>Get the latest solutions, news, and updates</li>
          <li>Connect with our experts to get an inside track on how</li>
          <li>Elastic can help you be even more efficient every day</li>
        </ul>
      </Panel>
      <Locations />
      <Footer />
    </>
  );
}
