import { useEffect, useState } from "react";
import MOCK_DATA from "../MOCK_DATA";

export default function App() {
  const [list, setList] = useState(MOCK_DATA);
  const [timer, setTimer] = useState(0);

  useEffect(function timerSetup() {
    const timerId = setInterval(() => {
      setTimer((currentTimer) => currentTimer + 1)
    }, 10)

    return () => clearInterval(timerId)
  }, [])

  const filteredListElements = list.filter((_, index) => index % 24)

  const addElementToList = () => setList((currentList) => {
    currentList.unshift({id: Date.now()});
    return currentList
  })

  return (
    <>
      <div>Some timer value: {timer}</div>

      <div>
        <h3>Some big list</h3>
        <button onClick={addElementToList}>Add element to list</button>
        <ol style={{width: "40%", margin: '0 auto'}}>
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
