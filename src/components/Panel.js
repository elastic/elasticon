import cn from "classnames";

export default function Panel({ children, className }) {
  const panelClassNames = `
    ${className}
    mb-4
    p-10
    sm:p-14
    lg:p-24
    md:p-20
    rounded-sm
    lg:rounded-lg
    md:rounded-md
  `;

  return <div className={panelClassNames}>{children}</div>;
}
