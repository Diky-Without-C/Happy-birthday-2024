import { useState } from "react";
import useGlobalContext from "@/context/globalVariable";
import FrontSection from "./Front";
import InsideSection from "./Inside";
import "@assets/style/birthdayCard.css";

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, setData } = useGlobalContext();
  const { isBoxOpen, isCardOpen } = data;

  function handleOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleClick() {
    setData((prev) => ({ ...prev, isCardOpen: true }));
  }

  return (
    <section
      className={`${isCardOpen ? "opacity-0" : "opacity-100"} absolute flex flex-col items-center transition-all duration-500`}
    >
      <section
        onClick={handleOpen}
        className={`${isBoxOpen ? "popUp block" : "hidden"} z-50 origin-center`}
      >
        <section className="birthdayCard">
          <FrontSection isOpen={isOpen} />
          <InsideSection isOpen={isOpen} />
        </section>
      </section>
      <button
        onClick={handleClick}
        className="fadeIn mt-2 rounded-xl bg-blue-600 px-4 py-2 text-base font-bold text-white"
      >
        Next
      </button>
    </section>
  );
}
