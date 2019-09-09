import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title, icon }) => {
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
