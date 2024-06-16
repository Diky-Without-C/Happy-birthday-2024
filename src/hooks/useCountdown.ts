import { useEffect, useState } from "react";
import countdownTimerUtils from "@utils/countdownTimerUtils";

const TARGET_DATE = import.meta.env.VITE_TARGET_DATE;

interface initialValueType {
  [key: string]: any;
}

export default function useCountdown(initial_value: initialValueType = {}) {
  const [timeLeft, setTimeLeft] = useState(initial_value);

  const checkIsCountdownEnd = () => {
    const timeValues = Object.values(timeLeft);
    return timeValues.length ? timeValues.every((value) => value === 0) : false;
  };

  const isCountdownEnd = checkIsCountdownEnd();

  useEffect(() => {
    const interval = setInterval(() => {
      const { timeLeft, isEnd } = countdownTimerUtils(TARGET_DATE);
      setTimeLeft(timeLeft);

      if (isEnd) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { timeLeft, isCountdownEnd };
}
