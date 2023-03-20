import { ReactNode } from "react";
import Balancer from "react-wrap-balancer";

export default function ShortCard({
  title,
  description,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div
      className={`relative col-span-1 h-auto overflow-hidden rounded-xl border border-gray-200 bg-white py-8 shadow-md`}
    >
      <div className="mx-auto max-w-md text-center">
        <h2 className=" bg-clip-text font-display text-xl font-bold text-gray-700 text-transparent md:text-3xl md:font-normal">
          <Balancer>{title}</Balancer>
        </h2>
        <div className="leading-normal text-gray-600">
          <Balancer>
            <p>{description}</p>
          </Balancer>
        </div>
      </div>
    </div>
  );
}
