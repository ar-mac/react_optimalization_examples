import { useCallback, useEffect, useMemo, useState } from "react";
import List from "./List";
import MOCK_DATA from "../../../MOCK_DATA";

export default function UnoptimizedWithPassingListApp() {
  const [timer, setTimer] = useState(0);
  const [list, setList] = useState(MOCK_DATA);

  // filteredListElements are recalculated on every rerender and is reference to new array every time
  // because of that extracting List component with React.memo does not provide optimization benefit
  // it should be wrapped in useMemo
  const filteredListElements = list.filter((_, index) => index % 24)

  // addElementToList is a reference to new function on every rerender
  // because of that extracting List component with React.memo does not provide optimization benefit
  // it should be wrapped in useCallback
  const addElementToList = () => setList((currentList) => {
    currentList.unshift({id: Date.now()});
    return currentList
  })


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
