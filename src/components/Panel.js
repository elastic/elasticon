import cn from "classnames";

export default function Panel({ children, className }) {
  const panelClassNames = `
    ${className}
    lg:p-24
    lg:rounded-lg
    md:p-20
    md:rounded-md
    p-10
    rounded-sm
    sm:p-14
  `;

  return <div className={panelClassNames}>{children}</div>;
}
