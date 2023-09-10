import "./App.css";
import Card from "./Components/Card";

function App() {
  /* let myObj = {
    name: "Pagol",
    age: 18,
  };
  let myArr = [5, 19, 7]; */

  return (
    <>
      <h1 className="bg-green-400 text-black font-medium p-4 rounded-md mb-4">
        Tailwind test
      </h1>
      <div className="flex gap-4 flex-wrap justify-center">
        {/* <Card channel="supersection" someObj={myArr} /> */}
        <Card username="Acer7" btnText="Click it" />
        <Card username="Macbook" btnText="Visit it" />
      </div>
    </>
  );
}

export default App;
