import cn from "classnames";

import Image from "next/image";

export default function Wave({ direction }) {
  const emojiClasses = cn(
    "absolute",
    "animate-wiggle",
    "left-9",
    "origin-bottom-right",
    "text-5xl",
    "top-9"
  );

  return (
    <div
      className={`flex-shrink-0 mb-8 md:mb-0 relative ${
        direction === "right" && "hidden md:block"
      }`}
    >
      <Image
        alt="circular text that says you're invited"
        className="animate-spin-slow"
        height={125}
        src="/images/text-youre-invited.svg"
        width={125}
      />
      <span className={emojiClasses}>&#x1F44B;</span>
    </div>
  );
}
