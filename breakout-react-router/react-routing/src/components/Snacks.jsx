import {Link, Route, Switch} from 'react-router-dom';
import Snack from './Snack';

const Snacks = () => {
  return (
    <div>
      <h2>All the snacks!!</h2>

      <nav>
        <Link to="/snacks/1">Snack #1</Link><br/>
        <Link to="/snacks/2">Snack #2</Link><br/>
        <Link to="/snacks/3">Snack #3</Link>
      </nav>

      <Switch>
        <Route path="/snacks/:snackId" component={Snack} />
        <Route path="/snacks">
          <h2>Please choose a snack from the list above</h2>
        </Route>
      </Switch>

    </div>
  );
};

export default Snacks;
