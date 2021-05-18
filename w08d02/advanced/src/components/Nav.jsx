import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <h2>Inside the nav component</h2>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/goats">Goats </Link>
      <Link to="/styled">Styled </Link>
      <Link to="/parent">Parent </Link>
      <Link to="/references">References</Link>
    </nav>
  );
};

export default Nav;
