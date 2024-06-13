import { ComponentProps } from "react";
import Body from "./Body";
import Text from "./Text";

interface cardType extends ComponentProps<"div"> {
  isStop: boolean;
  heading: string;
  paragraph: string;
}

export default function Card({
  heading,
  isStop,
  paragraph,
  ...props
}: cardType) {
  return (
    <section {...props} className="flex flex-col items-center">
      <Body
        className={`${isStop ? `side side-${props.key} h-28 w-32` : "mx-1 h-32 w-28"} `}
      >
        {heading}
      </Body>
      <Text className={`${isStop && "opacity-0 transition-all duration-100"}`}>
        {paragraph}
      </Text>
    </section>
  );
}
