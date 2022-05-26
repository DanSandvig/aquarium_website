import {Link} from 'react-router-dom';
import '../css/Nav.css';

const Nav = () => {
    return ( 
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/fish">Fish</Link>
            </li>
          </ul>
        </nav>
    );
}
 
export default Nav;