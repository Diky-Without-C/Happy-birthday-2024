import { ComponentProps } from "react";

interface foldingCardType extends ComponentProps<"div"> {
  time: number;
}

export default function FoldingCard({ time, className }: foldingCardType) {
  return (
    <section
      className={`${className} relative flex flex-col items-center justify-center text-white transition-all duration-1000`}
    >
      <TopSection />
      <span className="absolute z-20 font-mono text-6xl font-bold">
        {Number(time) < 10 ? `0${time}` : time}
      </span>
      <BottomSection />
    </section>
  );
}

function TopSection() {
  return (
    <div className="relative h-full w-full rounded-xl bg-red-600 transition-all duration-1000"></div>
  );
}

function BottomSection() {
  return (
    <div
      className={`relative z-10 h-full w-full rounded-xl bg-red-600 transition-all duration-1000 before:absolute before:-top-2 before:right-3 before:z-10 before:h-4 before:w-2 before:bg-red-800 after:absolute after:-top-2 after:left-3 after:z-10 after:h-4 after:w-2 after:bg-red-800`}
    ></div>
  );
}
