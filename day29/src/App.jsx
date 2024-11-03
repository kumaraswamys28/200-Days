import { useState } from "react";
import Card from "./component/card";

function App() {
  let [count, setCount] = useState(0);

  const addVal = () => {
    setCount(count + 1);
  };

  const subVal = () => {
    count != 0 ? setCount(count - 1) : alert("No god, no!");
  };

  

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-slate-800">
        <div className="w-[300px] text-center h-[300px] m-auto bg-white rounded-xl shadow-lg flex flex-col justify-around p-5">
          <h1 className="text-2xl font-bold text-gray-800">Counter</h1>
          <p className="text-xl text-gray-600">Value: {count}</p>
          <div className="flex justify-around">
            <button
              onClick={addVal}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Increment
            </button>
            <button
              onClick={subVal}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Decrement
            </button>
          </div>
        </div>
        
      </div>
 
    </>
  );
}

export default App;
