export default function Heading({ children, className, color, size }) {
  let Tag = size ? size : "p";

  const fontSizes = {
    h1: "text-7xl",
    h2: "text-6xl",
    h3: "text-4xl",
    h4: "text-3xl",
    h5: "text-2xl",
  };

  const fontSize = fontSizes[size] || "";

  const fontWeights = {
    h4: "font-bold",
    h5: "font-bold",
  };

  const fontWeight = fontWeights[size] || "";

  const textColor = color ? `text-${color}` : "";

  const tagProps = {
    className: `${className} ${fontSize} ${fontWeight} ${textColor}`,
    children,
  };

  return <Tag {...tagProps} />;
}
