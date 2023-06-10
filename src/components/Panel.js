export default function Panel({ children, className }) {
  return (
    <div className={`bg-blue-900 p-4 sm:p-10 md:p-18 lg:p-24 ${className}`}>
      {children}
    </div>
  );
}
