import Box from "@components/Box";
import CountDownTimer from "@components/CountdownTimer";
import useGlobalContext from "@context/globalVariable";
import useCountdown from "@hooks/useCountdown";
import useResizeWindow from "@hooks/useResizeWindow";
import Confetti from "react-confetti";

export default function App() {
  const { width, height } = useResizeWindow();
  const { isCountdownEnd } = useCountdown();
  const { data } = useGlobalContext();
  const { isBoxOpen } = data;

  return (
    <main
      className={`flex h-screen w-full items-center justify-center bg-slate-200`}
    >
      {isBoxOpen && <Confetti width={width} height={height} />}
      <Box isStop={isCountdownEnd}>
        <CountDownTimer isStop={isCountdownEnd} />
      </Box>
    </main>
  );
}
