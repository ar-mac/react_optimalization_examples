import { useCallback, useState } from "react";
import './App.css';
import UnoptimizedApp from "./components/BigListOptimizationExample/Unoptimized/UnoptimizedApp";
import OptimizedWithPassingListApp from "./components/BigListOptimizationExample/OptimizedWithPassingList/OptimizedApp";
import UnoptimizedWithPassingListApp from "./components/BigListOptimizationExample/UnoptimizedWithPassingList/UnoptimizedApp";
import OptimizedWithContainedListApp from "./components/BigListOptimizationExample/OptimizedWithContainedList/OptimizedApp";

const apps = [
  UnoptimizedApp,
  OptimizedWithPassingListApp,
  UnoptimizedWithPassingListApp,
  OptimizedWithContainedListApp,
]

function App() {
  const [displayIndex, setIndex] = useState(0);

  const toggleDisplay = useCallback(() => {
    setIndex((currentIndex) => (currentIndex + 1) % 4)
  }, [])

  const Component = apps[displayIndex]

  return (
    <div className="App">
      <header className="App-header">
        <p>Example component below</p>
        <button onClick={toggleDisplay}>Display next example</button>
      </header>

      <Component />
    </div>
  );
}

export default App;
