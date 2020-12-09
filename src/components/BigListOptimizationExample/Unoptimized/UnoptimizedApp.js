import { useEffect, useState } from "react";
import MOCK_DATA from "../../../MOCK_DATA";

export default function UnoptimizedApp() {
  const [list, setList] = useState(MOCK_DATA);
  const [timer, setTimer] = useState(0);

  useEffect(function timerSetup() {
    const timerId = setInterval(() => {
      setTimer((currentTimer) => currentTimer + 1)
    }, 10)

    return () => clearInterval(timerId)
  }, [])

  // each update of timer cause recalculation of filteredListElements
  // this takes time on itself
  // on top of that, in JSX react needs to map over them to check if virtual DOM matches the HTML
  // having key={id} prevents recreating HTML nodes which would kill performance even more, but creating virtual DOM takes time
  const filteredListElements = list.filter((_, index) => index % 24)

  // each update of timer cause causes addElementToList to be new function instance
  const addElementToList = () => setList((currentList) => {
    currentList.unshift({id: Date.now()});
    return currentList
  })

  return (
    <>
      <h1>Unoptimized App</h1>

      <div>Some timer value: {timer}</div>

      <div>
        <h3>Some big list</h3>
        <button onClick={addElementToList}>Add element to list</button>
        <ol style={{width: "40%", margin: '0 auto'}}>
          {/*on every rerender we need to map over filteredListElements and generate virtual dom out of it*/}
          {filteredListElements.map((element) => {
            return (
              <li key={element.id} style={{border: '1px solid black', marginBottom: '1rem'}}>
                <b>{element.first_name} {element.last_name}</b>
                <span> - {element.email} - {element.gender}</span>
                <pre>{element.ip_address}</pre>
              </li>
            )
          })}
        </ol>
      </div>
    </>
  );
}
