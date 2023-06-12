import cn from "classnames";

export default function Panel({ children, className, padding = true }) {
  const paddingClassNames =
    padding && cn("p-10", "sm:p-14", "md:p-20", "lg:p-24");

  const panelClassNames = cn("bg-blue-900", paddingClassNames, className);

  return <div className={panelClassNames}>{children}</div>;
}
