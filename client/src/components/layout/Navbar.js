import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    //When logout clear all contacts
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li className='nav-item nav-link'>Hello {user && user.name}</li>
      <li className='nav-item'>
        <a onClick={onLogout} href='#!' className='nav-link'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  // const guestLinks = (
  //   <Fragment>
  //     <li className='nav-item'>
  //       <Link className='nav-link text-light' to='/register'>
  //         Register
  //       </Link>
  //     </li>
  //     <li className='nav-item'>
  //       <Link className='nav-link text-light' to='/login'>
  //         Login
  //       </Link>
  //     </li>
  //   </Fragment>
  // );

  return (
    <div className='navbar text-primary navbar-expand fixed-top'>
      <div className='container-fluid '>
        <ul className='navbar-nav ml-auto'>{isAuthenticated && authLinks}</ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Contacter",
  icon: "fas fa-id-card-alt"
};

export default Navbar;
