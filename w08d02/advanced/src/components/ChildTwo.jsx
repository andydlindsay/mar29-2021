import CountContext from './CountContext';
import {useContext} from 'react';

const ChildTwo = () => {
  const context = useContext(CountContext);

  return (
    <div>
      <h2>ChildTwo</h2>
      <h2>Counter: {context.counter}</h2>
    </div>
  );
};

export default ChildTwo;
