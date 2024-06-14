import { ComponentProps } from "react";
import useGlobalContext from "@context/globalVariable";
import Cover from "./Cover";

interface boxType extends ComponentProps<"div"> {
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
      <Cover isStop={isStop} />
      {children}
    </div>
  );
}
