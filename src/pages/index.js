import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Navigation from "@/components/Navigation";
import Panel from "@/components/Panel";

export default function Home() {
  return (
    <>
      <Panel>
        <Navigation />
        <div className="max-w-xl">
          <Heading color="white" size="h1">
            Find answers—for what’s next
          </Heading>
          <Heading color="white" size="h2">
            Speakers
          </Heading>
          <p className="text-white my-8">
            Get ready to find answers that matter! We’re bringing our biggest
            event of the year to you, so you can get the latest Elastic insights
            and meet with experts and fellow users. You’ll see how Elasticsearch
            powered by AI can help you take advantage of all your data to build,
            secure, and protect — and optimize your infrastructure and talent
            resources more efficiently.
          </p>
          <Button href="/register">View all events</Button>
        </div>
      </Panel>
      <Heading size="h3">Meet the latest Elasticsearch advancements</Heading>
      <Heading size="h4">You’re invited!</Heading>
      <Heading size="h5">Search</Heading>
      <Heading size="h5">Observability</Heading>
      <Heading size="h5">Security</Heading>
    </>
  );
}
