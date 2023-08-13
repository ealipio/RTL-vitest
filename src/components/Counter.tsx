import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h3>counter: {counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
    </>
  );
}
