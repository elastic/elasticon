import Heading from "@/components/Heading";
import Wave from "@/components/Wave";

const SVG = () => {
  const attributes = {
    clipPath: "url(#clip-path)",
    fill: "none",
    height: "100%",
    width: "100%",
    x: "0",
    y: "0",
  };

  const attrLG = {
    className: "hidden md:block",
    rx: "100",
  };

  const attrSM = {
    className: "md:hidden",
    rx: "24",
  };

  const styles = {
    stroke: "#98A2B3",
    strokeDasharray: "6",
    strokeWidth: "4px",
  };

  return (
    <svg className="absolute inset-0 h-full w-full">
      <defs>
        <clipPath id="clip-path">
          <rect {...attributes} {...attrLG} />
          <rect {...attributes} {...attrSM} />
        </clipPath>
      </defs>

      <rect style={styles} {...attributes} {...attrLG} />
      <rect style={styles} {...attributes} {...attrSM} />
    </svg>
  );
};

export default function Invited({ data }) {
  return (
    <div className="flex flex-col md:flex-row h-full items-center mb-4 p-9 relative w-full">
      <SVG />
      <Wave />
      <div className="max-w-4xl mx-auto md:px-8 text-zinc-900 text-center">
        <Heading className={`inline-block relative text-black`} size="h4">
          {data.headline}
        </Heading>
        <p className="mt-3 text-black text-lg">{data.description}</p>
      </div>
      <Wave direction="right" />
    </div>
  );
}
