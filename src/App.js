import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0); // Functions to handle increment,  decrement, and reset
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const incrementButtonStyle = {
    backgroundColor: count % 2 === 0 ? "#4caf50" : "#f44336", // Green for even, red for odd
    border: "none",
    borderRadius: "5px",
    color: "white",
    padding: "10px 20px",
    margin: "0 10px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const decrementButtonStyle = {
    backgroundColor: count % 2 != 0 ? "#4caf50" : "#f44336", // Green for even, red for odd
    border: "none",
    borderRadius: "5px",
    color: "white",
    padding: "10px 20px",
    margin: "0 10px",
    fontSize: "16px",
    cursor: "pointer",
  };

  const Reset = {
    border: "none",
    borderRadius: "5px",
    color: "Black",
    padding: "10px 20px",
    margin: "0 10px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks Counter</h1>
        <p>Count: {count}</p>
        <div className="button-group">
          <button style={incrementButtonStyle} onClick={increment}>
            Increment
          </button>
          <button style={decrementButtonStyle} onClick={decrement}>
            Decrement
          </button>
          <button style={Reset} onClick={reset}>
            Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
