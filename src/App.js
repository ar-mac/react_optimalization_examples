import { useEffect, useState } from "react";
import './App.css';
import MOCK_DATA from "./MOCK_DATA";

function App() {
  const [list, setList] = useState(MOCK_DATA);
  const [timer, setTimer] = useState(0);

  useEffect(function timerSetup() {
    const timerId = setInterval(() => {
      setTimer((currentTimer) => currentTimer + 1)
    }, 10)

    return () => clearInterval(timerId)
  }, [])

  const filteredListElements = list.filter((_, index) => index % 24)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Example big component
        </p>
      </header>

      <div>Some timer value: {timer}</div>

      <div>
        <h3>Some big list</h3>
        <ol style={{width: "40%", margin: '0 auto'}}>
          {filteredListElements.map((element) => {
            console.log("mapping")
            return (
              <li key={element.id} style={{border: '1px solid black', marginBottom: '1rem'}}>
                <b>{element.first_name}</b>
                <b>{element.last_name}</b>
                {' - '}
                <span>{element.email}</span>
                {' - '}
                <span>{element.gender}</span>
                <pre>{element.ip_address}</pre>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
