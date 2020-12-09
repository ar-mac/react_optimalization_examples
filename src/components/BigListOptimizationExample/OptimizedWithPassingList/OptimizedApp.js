import { useCallback, useEffect, useMemo, useState } from "react";
import List from "./List";
import MOCK_DATA from "../../../MOCK_DATA";

export default function OptimizedWithPassingListApp() {
  const [timer, setTimer] = useState(0);
  const [list, setList] = useState(MOCK_DATA);

  const filteredListElements = useMemo(() => list.filter((_, index) => index % 24), [list])

  const addElementToList = useCallback(() => setList((currentList) => {
    currentList.unshift({id: Date.now()});
    return currentList
  }), [])


  useEffect(function timerSetup() {
    const timerId = setInterval(() => {
      setTimer((currentTimer) => currentTimer + 1)
    }, 10)

    return () => clearInterval(timerId)
  }, [])

  // List component is extracted and uses react memo, so it does not rerender until its state changes
  // or if in props it gets reference to new data
  // in this case both function and data are memoized so they do not cause unnecessary rerenders
  return (
    <>
      <h1>Optimized With Passing List App</h1>

      <div>Some timer value: {timer}</div>

      <List filteredListElements={filteredListElements} addElementToList={addElementToList}/>
    </>
  );
}
