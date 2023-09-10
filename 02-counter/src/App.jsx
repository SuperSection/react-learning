import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5); // naming convension only

  // let counter = 5;

  const addValue = () => {
    if (counter >= 20) {
      return;
    }
    /* counter += 1;
    console.log("added", counter); */

    // Interview Ques: What will be the result of doing this?
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    // Fibre makes a batch where same work is repeating so, 'counter' will only get increased by 1 for one time only (as total result: counter+1)

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    // here, specifically 'previous value of counter' gets increased by 1 in each step of doing this (as total result: counter+4)
  };

  const removeValue = () => {
    if (counter <= 0) {
      return;
    }
    /* counter--;
    console.log("removed", counter); */
    setCounter(counter - 1);
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
