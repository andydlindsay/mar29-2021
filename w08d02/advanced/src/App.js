import './App.css';
import Home from './components/Home';
import About from './components/About';
import Goats from './components/Goats';
import Nav from './components/Nav';
import Styled from './components/Styled';
import Parent from './components/Parent';
import References from './components/References';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h2>Advanced React</h2>

      <Router>
        <Nav />

        <Switch>
          <Route path="/about" component={About} />
          <Route path="/goats" component={Goats} />
          <Route path="/styled" component={Styled} />
          <Route path="/parent" component={Parent} />
          <Route path="/references" component={References} />

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
      </Router>

    </div>
  );
};

export default App;
