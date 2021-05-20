import './App.css';
import ClassBased from './components/ClassBased';

const App = () => {
  return (
    <div className="App">
      <h2>Class-based Components</h2>
      <ClassBased message="hello world" value={5} />
    </div>
  );
};

export default App;
