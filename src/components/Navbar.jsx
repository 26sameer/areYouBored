import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <li className="nav-item">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? '#282640' : '#35334ba0',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/saved"
            style={({ isActive }) => ({
              color: isActive ? '#282640' : '#282640c1',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Saved
          </NavLink>
        </li>
      </nav>
    </>
  );
};

export default Navbar;
