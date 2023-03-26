export default function StatNumber({ number }: { number: string }) {
  return (
    <div>
      <p className=" text-5xl font-bold text-gray-800 transition-all hover:text-emerald-900">
        {number}
      </p>
    </div>
  );
}
