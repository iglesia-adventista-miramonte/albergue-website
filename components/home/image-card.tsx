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
      className={`relative col-span-1 h-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md`}
    >
      <Image alt={description} src={src} fill style={{ objectFit: "cover" }} />
    </div>
  );
}
