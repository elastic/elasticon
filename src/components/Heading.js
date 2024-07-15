export default function Heading({ children, className, color, size }) {
  let Tag = size ? size : "p";

  const fontColor = color || "";

  const fontSizes = {
    h1: "text-4xl sm:text-5xl md:text-7xl",
    h2: "text-3xl sm:text-4xl md:text-6xl",
    h3: "text-2xl sm:text-3xl md:text-5xl",
    h4: "text-xl sm:text-2xl md:text-3xl",
    h5: "text-lg sm:text-xl md:text-2xl",
  };

  const fontSize = fontSizes[size] || "";

  const fontWeights = {
    h4: "font-bold",
    h5: "font-bold",
  };

  const fontWeight = fontWeights[size] || "";

  const tagProps = {
    className: `${className && className
      } ${fontSize} ${fontWeight} ${fontColor} font-display`,
    children,
  };

  return <Tag {...tagProps} />;
}
