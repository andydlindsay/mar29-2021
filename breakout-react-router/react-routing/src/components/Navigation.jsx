import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <h2>Navbar</h2>

      <Link to="/">Home</Link><br/>
      <Link to="/about">About</Link><br/>
      <Link to="/snacks">Snacks</Link>
    </nav>
  );
};

export default Navigation;
