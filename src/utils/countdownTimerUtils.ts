interface countdownType {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function countdownTimerUtils(
  target_date: string,
): countdownType {
  const now = new Date();
  const target = new Date(target_date);
  const diff = target.getTime() - now.getTime();

  const MS_PER_SECOND = 1000;
  const MS_PER_MINUTE = MS_PER_SECOND * 60;
  const MS_PER_HOUR = MS_PER_MINUTE * 60;
  const MS_PER_DAY = MS_PER_HOUR * 24;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / MS_PER_DAY);
  const hours = Math.floor((diff % MS_PER_DAY) / MS_PER_HOUR);
  const minutes = Math.floor((diff % MS_PER_HOUR) / MS_PER_MINUTE);
  const seconds = Math.floor((diff % MS_PER_MINUTE) / MS_PER_SECOND);

  return { days, hours, minutes, seconds };
}
