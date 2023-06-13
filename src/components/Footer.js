import Button from "@/components/Button";
import Heading from "@/components/Heading";

export default function Footer() {
  return (
    <div className="bg-zinc-900 text-center text-white py-16 md:py-28 rounded-tl-sm md:rounded-tl-md rounded-tr-sm md:rounded-tr-md">
      <Heading className="mb-6 text-peach" size="h3">
        We&apos;re looking forward to seeing you!
      </Heading>
      <p className="mb-10">
        Register now to take advantage of our early bird pricing!
      </p>
      <Button href="#" className="mt-6">
        Register now
      </Button>
    </div>
  );
}
