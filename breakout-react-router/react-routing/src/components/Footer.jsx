import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <Link to="/">Home Page</Link>
      <h2>This is the footer</h2>
      <h2>&copy; 2021</h2>
    </div>
  );
};

export default Footer;
