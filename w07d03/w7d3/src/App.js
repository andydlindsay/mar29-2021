import './App.css';
import Title from './components/Title';

const App = () => {
  const obj = {
    name: 'Alice',
    age: 40,
    likes: ['pizza']
  };

  const inputObj = {
    value: '',
    onChange: (event) => console.log(event.target.value)
  };

  return (
    <div className="App">
      <h2>useEffect Hook</h2>
      {/* <Title name={obj.name} age={obj.age} likes={obj.likes}/> */}
      <Title {...obj} />
      <input {...inputObj} />

      {/* <ChildComponent {...props} /> */}
    </div>
  );
};

export default App;
