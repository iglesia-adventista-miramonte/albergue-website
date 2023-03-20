import Image from "next/image";

export default function ImageCard({
  src,
  description,
}: {
  src: string;
  description: string;
}) {
  return (
    <div
      className={`relative col-span-1 h-64 overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl`}
    >
      <Image alt={description} src={src} fill style={{ objectFit: "cover" }} />
    </div>
  );
}
