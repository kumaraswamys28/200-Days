import { useState } from "react";

function App() {
  let [color, setcolor] = useState("gray");
  return (
    <>
      <div
        className="flex justify-center align-bottom w-[100vw] h-[100vh] "
        style={{ backgroundColor: color }}
      >
        <div className="align-bottom flex gap-3 w-auto rounded-xl h-[70px] p-[10px] ml-auto mr-auto mt-auto mb-auto bg-indigo-700">
          <button
            onClick={() => {
              setcolor("red");
            }}
            className="w-auto text-white p-[15px] h-[50px] rounded-xl"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => {
              setcolor("green");
            }}
            className="w-auto text-white p-[15px] h-[50px] rounded-xl"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => {
              setcolor("blue");
            }}
            className="w-auto text-white  p-[15px] h-[50px] rounded-xl"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => {
              setcolor("yellow");
            }}
            className="w-auto text-black  p-[15px] h-[50px] rounded-xl"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => {
              setcolor("orange");
            }}
            className="w-auto text-white  p-[15px] h-[50px] rounded-xl"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
