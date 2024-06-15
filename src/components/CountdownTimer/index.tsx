import useCountdown from "@hooks/useCountdown";
import Card from "@components/Card";

interface countDownTimerType {
  isStop: boolean;
}

interface countdownType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const initialvalue: countdownType = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export default function CountDownTimer({ isStop }: countDownTimerType) {
  const { timeLeft } = useCountdown(initialvalue);
  const timeLeftKeys = Object.keys(timeLeft);
  const timeLeftValues = Object.values(timeLeft);

  return (
    <section
      className={`${isStop && "translate-y-1/3 transition-all duration-1000"} pointer-events-none absolute flex scale-90 justify-center transition-all duration-1000`}
    >
      {timeLeftValues.map((time, index) => {
        return (
          <Card
            heading={Number(time) < 10 ? `0${time}` : `${time}`}
            paragraph={timeLeftKeys[index]}
            index={index}
            isStop={isStop}
            key={index}
          />
        );
      })}
    </section>
  );
}
