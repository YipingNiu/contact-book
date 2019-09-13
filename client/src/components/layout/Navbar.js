import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li className='nav-item nav-link'>Hello {user && user.name}</li>
      <li className='nav-item'>
        <a onClick={onLogout} herf='#!' className='nav-link'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li className='nav-item'>
        <Link className='nav-link text-light' to='/register'>
          Register
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link text-light' to='/login'>
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary text-light navbar-expand'>
      <div className='container-fluid'>
        <h1 className='mb-0'>
          <i className={icon} />
          {title}
        </h1>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link text-light' to=''>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-light' to='/about'>
              About
            </Link>
          </li>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Contact Book",
  icon: "fas fa-id-card-alt"
};

export default Navbar;
