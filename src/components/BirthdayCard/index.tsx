import { useState } from "react";
import useGlobalContext from "@/context/globalVariable";
import FrontSection from "./Front";
import InsideSection from "./Inside";
import "@assets/style/birthdayCard.css";

export default function BirthdayCard() {
  const [isClick, setIsClick] = useState(false);
  const { data } = useGlobalContext();
  const { isBoxOpen } = data;

  function handleClick() {
    setIsClick((prev) => !prev);
  }

  return (
    <section
      onClick={handleClick}
      className={`${isBoxOpen ? "popUp block" : "hidden"} absolute z-50 origin-center`}
    >
      <section className="birthdayCard">
        <FrontSection isOpen={isClick} />
        <InsideSection />
      </section>
    </section>
  );
}
