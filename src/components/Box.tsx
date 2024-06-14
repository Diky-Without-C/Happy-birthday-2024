import { ComponentProps } from "react";
import { useGlobalContext } from "@context/globalVariable";

interface boxType extends ComponentProps<"div"> {
  isStop: boolean;
}

interface boxCoverType {
  isStop: boolean;
}

export default function Box({ children, isStop }: boxType) {
  const { setData } = useGlobalContext();

  function handleClick() {
    setData((prev) => ({ ...prev, isBoxOpen: true }));
  }

  return (
    <div
      onClick={handleClick}
      className="flex size-40 scale-[0.7] items-center justify-center md:scale-100"
    >
      <BoxCover isStop={isStop} />
      {children}
    </div>
  );
}

function BoxCover({ isStop }: boxCoverType) {
  return (
    <section className={`${isStop ? "popUp" : "opacity-0"} absolute z-50`}>
      <div className={`box-cover`}>
        <div
          className={`tape relative flex size-32 rotate-45 items-center justify-center bg-red-700 before:absolute before:h-full before:w-4 before:bg-yellow-500 after:absolute after:h-4 after:w-full after:bg-yellow-500`}
        >
          <SideCoverLeft />
          <SideCoverRight />
        </div>
      </div>
    </section>
  );
}

function SideCoverLeft() {
  return (
    <div className="absolute bottom-0 flex h-12 w-full translate-x-6 translate-y-full skew-x-[45deg] justify-center bg-red-500 before:absolute before:h-full before:w-4 before:bg-yellow-500"></div>
  );
}

function SideCoverRight() {
  return (
    <div className="absolute right-0 flex h-full w-12 translate-x-full translate-y-6 skew-y-[45deg] items-center bg-red-600 before:absolute before:h-4 before:w-full before:bg-yellow-500"></div>
  );
}
