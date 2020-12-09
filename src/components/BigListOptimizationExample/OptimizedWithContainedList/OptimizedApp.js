import { useEffect, useState } from "react";
import List from "./List";

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
      <h1>Optimized With Contained List App</h1>

      <div>Some timer value: {timer}</div>

      <List />
    </>
  );
}
