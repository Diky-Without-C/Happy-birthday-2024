import { ComponentProps } from "react";

interface textType extends ComponentProps<"div"> {}

export default function Text({ className, children }: textType) {
  return (
    <h1
      className={`${className} w-full text-center text-xl font-bold capitalize`}
    >
      {children}
    </h1>
  );
}
