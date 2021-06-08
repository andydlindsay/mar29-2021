import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import Snacks from './components/Snacks';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h1>React Router Demo</h1>

      <Router>
        <Navigation />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/snacks" component={Snacks} />
          <Route path="/" component={Home} />
        </Switch>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
