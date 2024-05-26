import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { useSelector, useDispatch } from 'react-redux';
import {increment , decrement} from './store/counterSlice'
import './App.css'



function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </header>
    </div>
  );

}

export default App
