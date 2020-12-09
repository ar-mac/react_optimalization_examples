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

  // List component is extracted and uses react memo, so it does not rerender until its state changes
  // or if in props it gets reference to new data (in this example it does not receive props at all, so the better)
  return (
    <>
      <h1>Optimized With Contained List App</h1>

      <div>Some timer value: {timer}</div>

      <List />
    </>
  );
}
