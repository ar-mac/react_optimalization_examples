import { useCallback, useEffect, useState } from "react";
import List from "./List";
import MOCK_DATA from "../../../MOCK_DATA";

export default function UnoptimizedWithPassingListApp() {
  const [timer, setTimer] = useState(0);
  const [list, setList] = useState(MOCK_DATA);

  const filteredListElements = list.filter((_, index) => index % 24)

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

  return (
    <>
      <h1>Unoptimized With Passing List App</h1>

      <div>Some timer value: {timer}</div>

      <List filteredListElements={filteredListElements} addElementToList={addElementToList}/>
    </>
  );
}
