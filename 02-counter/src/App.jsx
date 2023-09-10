import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5); // naming convension only

  // let counter = 5;

  const addValue = () => {
    if (counter >= 20) {
      return;
    }
    counter += 1;
    console.log("added", counter);
    setCounter(counter);
  };

  const removeValue = () => {
    if (counter <= 0) {
      return;
    }
    counter--;
    console.log("removed", counter);
    setCounter(counter);
  };

  return (
    <>
      <h1>Super Section | Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
