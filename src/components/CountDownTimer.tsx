import FoldingCard from "@components/FoldingCard";
import useCountdown from "@hooks/useCountdown";

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
  const [timeLeft] = useCountdown(initialvalue);
  const timeLeftKeys = Object.keys(timeLeft);

  return (
    <section
      className={`${isStop && "translate-y-1/3 transition-all duration-1000"} pointer-events-none absolute flex scale-90 justify-center transition-all duration-1000`}
    >
      {timeLeftKeys.map((time, i) => {
        const key = time as keyof countdownType;

        return (
          <section key={key}>
            <div className={`flex flex-col items-center`}>
              <FoldingCard
                className={`${isStop ? `side side-${i} h-28 w-32` : "mx-1 h-32 w-28"} `}
                time={timeLeft[key]}
              />
            </div>
            <h1
              className={`${isStop && "opacity-0 transition-all duration-100"} w-full text-center text-xl font-bold capitalize`}
            >
              {key}
            </h1>
          </section>
        );
      })}
    </section>
  );
}
