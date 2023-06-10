import Link from "next/link";

export default function Button({ children, href }) {
  return (
    <Link
      className="bg-blue-600 hover:bg-blue-700 font-semibold inline-block px-6 py-4 rounded text-white transition"
      href={href}
    >
      {children}
    </Link>
  );
}
