import { useCallback, useEffect, useState, useRef, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // set the length of password
  const [length, setLength] = useState(8);
  //set the number length in password
  const [numAllowed, setNumAllowed] = useState(false);
  //set characters
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //use useRef hook
  const passwordRef = useRef(null);
  const copyPassword = useCallback(() => {
    //to select after copy
    passwordRef.current.select();
    //to select range of characters
    passwordRef.current.setSelectionRange(0, 8);

    
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let passw = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      // +1 to avoid 0 and to get the str index
      const currentIndex = Math.floor(Math.random() * str.length + 1);
      passw += str.charAt(currentIndex);
    }

    setPassword(passw);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md text-orange-500 py-8  px-5 my-8 mx-auto shadow-md-rounded-lg bg-gray-700 ">
        <h1 className="text-white text-center">Random Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none px-3 w-full py-1"
            placeholder="password"
            ref={passwordRef}
            readOnly
          />

          <button
            onClick={copyPassword}
            className="outline-none bg-blue-600 text-white px-3 py-1 shrink-0"
          >
            copy password
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length} </label>
          </div>

          <div className="flex items-center gap-x-1">
            <label htmlFor="numberInput">Numbers</label>
            <input
              className="cursor-pointer"
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={function () {
                setNumAllowed((prev) => !prev);
              }}
            ></input>
          </div>

          <div className="flex items-center gap-x-1">
            <label htmlFor="charInput">Characters</label>
            <input
              className="cursor-pointer"
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={function () {
                setCharAllowed((prev) => !prev);
              }}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
