import { useEffect, useState } from "react";
import countdownTimerUtils from "@utils/countdownTimerUtils";

const TARGET_DATE = import.meta.env.VITE_TARGET_DATE;

export default function useCountdown(initial_value: any) {
  const [currentTime, setCurrentTime] = useState(initial_value);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(countdownTimerUtils(TARGET_DATE));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return [currentTime];
}
