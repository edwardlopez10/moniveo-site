import Image from "next/image";

export default function Logo({
  className = "h-5 w-auto",
  priority = false
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.svg"
      alt="Moniveo"
      width={109}
      height={17}
      className={className}
      priority={priority}
    />
  );
}
