import useGlobalContext from "@/context/globalVariable";
import FrontSection from "./Front";
import InsideSection from "./Inside";
import "@assets/style/birthdayCard.css";

export default function BirthdayCard() {
  const { data } = useGlobalContext();
  const { isBoxOpen } = data;

  return (
    <section
      className={`${isBoxOpen ? "popUp block" : "hidden"} absolute z-50 origin-center`}
    >
      <section className="birthdayCard">
        <FrontSection />
        <InsideSection />
      </section>
    </section>
  );
}
