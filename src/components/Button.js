import cn from "classnames";
import Link from "next/link";

export default function Button({ children, href }) {
  const buttonClassNames = cn(
    "bg-blue-600",
    "font-semibold",
    "hover:bg-blue-700",
    "inline-block",
    "px-6",
    "py-4",
    "rounded",
    "text-white",
    "transition"
  );

  return (
    <Link className={buttonClassNames} href={href}>
      {children}
    </Link>
  );
}
