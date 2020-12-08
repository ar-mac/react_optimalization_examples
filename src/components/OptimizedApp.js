import { useEffect, useState } from "react";
import OptimizedList from "./OptimizedList";

export default function OptimizedApp() {
  const [timer, setTimer] = useState(0);

  useEffect(function timerSetup() {
    const timerId = setInterval(() => {
      setTimer((currentTimer) => currentTimer + 1)
    }, 10)

    return () => clearInterval(timerId)
  }, [])

  return (
    <>
      <div>Some timer value: {timer}</div>

      <OptimizedList />
    </>
  );
}
