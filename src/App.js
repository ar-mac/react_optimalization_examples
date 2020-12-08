import { useCallback, useState } from "react";
import './App.css';
import UnoptimizedApp from "./components/UnoptimizedApp";
import OptimizedApp from "./components/OptimizedApp";

function App() {
  const [displayOptimized, setDisplay] = useState(false);

  const toggleDisplay = useCallback(() => {
    setDisplay((currentDisplay) => !currentDisplay)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Example {displayOptimized ? 'Optimized' : 'Unoptimized'} component below</p>
        <button onClick={toggleDisplay}>Display {displayOptimized ? 'Unoptimized' : 'Optimized'} example</button>
      </header>

      {
        displayOptimized ? <OptimizedApp /> : <UnoptimizedApp />
      }
    </div>
  );
}

export default App;
