import {useRef, useState} from 'react';

const References = () => {
  const [counter, setCounter] = useState(0);
  const passwordRef = useRef();

  const counterRef = useRef();
  counterRef.current = counter;

  const clickHandler = () => {
    passwordRef.current.focus();
  };

  const launchAlert = () => {
    setTimeout(() => {
      alert(`the current count is ${counterRef.current}`);
    }, 3000);
  };

  return (
    <div>
      <h2>References</h2>

      <div>
        <label>Password</label>
        <input ref={passwordRef} />

        <button onClick={clickHandler}>Set focus</button>
      </div>

      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <h2>Counter: {counter}</h2>
        <button onClick={launchAlert}>Launch alert</button>
      </div>
    </div>
  );
};

export default References;
