// @vite-ignore
import { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => {
        setCounter((prev) => prev + 1);
      }}>increment</button>
    </>
  )
};

export default Counter;