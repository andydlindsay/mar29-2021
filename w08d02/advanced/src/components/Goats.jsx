import {Link, Switch, Route} from 'react-router-dom';
import Goat from './Goat';

const Goats = () => {
  return (
    <div>
      <h2>Goats</h2>
  
      <nav>
        <Link to="/goats/1">Goat #1</Link>
        <Link to="/goats/2">Goat #2</Link>
        <Link to="/goats/3">Goat #3</Link>
      </nav>

      <Switch>
        <Route path="/goats/:goatId" component={Goat} />
        <Route path="/goats">
          <h2>Please choose a goat from the list above</h2>
        </Route>
      </Switch>

    </div>
  );
};

export default Goats;
