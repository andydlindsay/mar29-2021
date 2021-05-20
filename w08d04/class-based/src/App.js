import './App.css';
import ClassBased from './components/ClassBased';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h2>Class-based Components</h2>

      <Router>
        <Link to="/">Home </Link>
        <Link to="/classes">Class-Based Component</Link>

        <Switch>
          <Route path="/classes">
            <ClassBased message="hello world" value={5} />
          </Route>
          <Route path="/" component={Home} />
        </Switch>
      </Router>      
    </div>
  );
};

export default App;
