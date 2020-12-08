import { memo, useCallback, useState } from "react";
import MOCK_DATA from "../MOCK_DATA";

function OptimizedList() {
  const [list, setList] = useState(MOCK_DATA);

  const filteredListElements = list.filter((_, index) => index % 24)

  const addElementToList = useCallback(() => setList((currentList) => {
    currentList.unshift({id: Date.now()});
    return currentList
  }), [])

  return (
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
  );
}

export default memo(OptimizedList)
