import { TypeAnimation } from "react-type-animation";
import { messages, sign } from "@assets/text/text.json";

interface isOpenType {
  isOpen: boolean;
}

export default function InsideSection({ isOpen }: isOpenType) {
  const text = messages.map((message) => [message, 1500]).flat();
  return (
    <div className="cardInside absolute left-0 top-0 flex h-full w-full flex-col bg-white">
      <div className="mt-4 text-center">
        <h1 className="font-mono text-2xl font-bold">HAPPY</h1>
        <h1 className="font-mono text-3xl font-bold leading-3">BIRTHDAY</h1>
        <h1 className="mt-1 text-base font-bold">Fira amimaisyah!</h1>
      </div>
      <div className="wishes">
        {isOpen && (
          <TypeAnimation
            className="mx-4 mt-8"
            sequence={text}
            wrapper="p"
            speed={50}
          />
        )}
        <span className="absolute bottom-6 right-8 font-semibold">{sign}</span>
      </div>
    </div>
  );
}
