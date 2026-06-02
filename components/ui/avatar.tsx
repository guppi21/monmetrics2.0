import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative h-12 w-12">
      <Image
        src="/guppi.png"
        alt="guppi"
        fill
        className="rounded-full object-cover border border-white/20"
        priority
      />
    </div>
  );
}