import {useState} from 'react'; 
import CountContext from './CountContext';
import ChildTwo from './ChildTwo';
import Inbetween from './Inbetween';

const Parent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Parent</h2>

      <CountContext.Provider value={{counter, setCounter}}>
        <Inbetween />
        <ChildTwo />
      </CountContext.Provider>
      
    </div>
  );
};

export default Parent;
