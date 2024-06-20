import useGlobalContext from "@context/globalVariable";
import CurveTape from "./CurveTape";

interface coverType {
  isStop: boolean;
}

export default function Cover({ isStop }: coverType) {
  const { data } = useGlobalContext();
  const { isBoxOpen } = data;

  return (
    <section
      className={` ${isStop ? "popUp" : "opacity-0"} ${isBoxOpen && "-translate-x-1/2 -translate-y-full -rotate-45 opacity-0 transition-all duration-500"} absolute z-50`}
    >
      <CurveTape />
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
