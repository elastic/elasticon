import Image from "next/image";

export default function Navigation() {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="the classic elastic cluster logo with the word 'on' added to the right"
        width={200}
        height={40}
      />
    </div>
  );
}
