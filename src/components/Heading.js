export default function Heading({ children, className, color, size }) {
  let Tag = size ? size : "p";

  const fontSizes = {
    h1: "text-5xl sm:text-6xl md:text-7xl",
    h2: "text-4xl sm:text-5xl md:text-6xl",
    h3: "text-3xl sm:text-3xl md:text-4xl",
    h4: "text-2xl sm:text-2xl md:text-3xl",
    h5: "text-2xl sm:text-2xl md:text-2xl",
  };

  const fontSize = fontSizes[size] || "";

  const fontWeights = {
    h4: "font-bold",
    h5: "font-bold",
  };

  const fontWeight = fontWeights[size] || "";

  const tagProps = {
    className: `${
      className && className
    } ${fontSize} ${fontWeight} font-display`,
    children,
  };

  return <Tag {...tagProps} />;
}
