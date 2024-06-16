import { ComponentProps } from "react";
import useGlobalContext from "@context/globalVariable";
import Cover from "./Cover";

interface boxType extends ComponentProps<"div"> {
  isStop: boolean;
}

export default function Box({ children, isStop }: boxType) {
  const { data, setData } = useGlobalContext();
  const { isBoxOpen } = data;

  function handleClick() {
    setData((prev) => ({ ...prev, isBoxOpen: true }));
  }

  return (
    <div
      onClick={handleClick}
      className={`${isStop && !isBoxOpen && "wiggle"} flex size-40 scale-[0.7] items-center justify-center md:scale-100`}
    >
      <Cover isStop={isStop} />
      {children}
    </div>
  );
}
