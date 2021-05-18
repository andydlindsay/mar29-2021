import CountContext from './CountContext';
import {useContext} from 'react';

const ChildOne = () => {
  const context = useContext(CountContext);

  return (
    <div>
      <h2>ChildOne</h2>
      <button onClick={() => context.setCounter(prev => prev + 1)}>Increment</button>
    </div>
  );
};

export default ChildOne;
