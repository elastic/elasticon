import cn from "classnames";
import Link from "next/link";

export default function Button({ children, href, outlined = false }) {
  const buttonClassNames = cn(
    "font-semibold",
    "inline-block",
    "px-4",
    "py-3",
    "md:px-5",
    "md:py-3",
    "rounded",
    "text-center",
    "text-sm",
    "md:text-base",
    "text-white",
    "transition"
  );

  const fillClassNames = cn("bg-blue-600", "hover:bg-blue-700");

  const outlinedClassNames = cn(
    "ring-2 ring-white ring-inset",
    "transition hover:bg-zinc-100/10"
  );

  const classNames = cn(
    buttonClassNames,
    outlined ? outlinedClassNames : fillClassNames
  );

  return (
    <Link className={classNames} href={href}>
      {children}
    </Link>
  );
}
