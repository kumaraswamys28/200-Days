import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  let [Password, setpassword] = useState("");
  let [num, setnum] = useState(false);
  let [char, setchar] = useState(false);
  let [length, setlength] = useState(8);

  let reff = useRef(null);
  const process = useCallback(() => {
    let pass = "";
    let text = "ABCDEFGHIKJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numn = "1234567890";
    let chara = ";'.,/?><:{}[]|+_)(&*^%$#@!";
    if (num) text += numn;
    if (char) text += chara;
    for (let i = 0; i < length; i++) {
      let ran = Math.floor(Math.random() * text.length) + 1;
      pass += text.charAt(ran);
    }
    setpassword(pass);
  }, [num, char, setpassword, length]);

  useEffect(() => {
    process();
  }, [length, num, char, process]);

  const copyclip = useCallback(() => {
    reff.current?.select()
    navigator.clipboard.writeText(Password);
  }, [Password]);

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex justify-center items-center">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Password Generator
        </h1>

        <div className="flex items-center space-x-3 mb-4">
          <input
            type="text"
            placeholder="Generated Password"
            value={Password}
            readOnly
            ref={reff}
            className="flex-grow px-3 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none"
          />
          <button
            onClick={copyclip}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1">
            pass length: {length}
          </label>
          <input
            type="range"
            min={4}
            max={25}
            value={length}
            onChange={(e) => setlength(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={num}
            onChange={() => setnum((prev) => !prev)}
            className="mr-2"
          />
          <label className="text-gray-700">numbers</label>
        </div>

        <div className="flex items-center mb-3">
          <input
            type="checkbox"
            checked={char}
            onChange={() => setchar((prev) => !prev)}
            className="mr-2"
          />
          <label className="text-gray-700">chars</label>
        </div>
      </div>
    </div>
  );
}

export default App;
