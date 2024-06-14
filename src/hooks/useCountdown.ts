import { useEffect, useState } from "react";
import countdownTimerUtils from "@utils/countdownTimerUtils";

const TARGET_DATE = import.meta.env.VITE_TARGET_DATE;

interface initialValueType {
  [key: string]: any;
}

export default function useCountdown(initial_value: initialValueType) {
  const [timeLeft, setTimeLeft] = useState(initial_value);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(countdownTimerUtils(TARGET_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { timeLeft };
}
