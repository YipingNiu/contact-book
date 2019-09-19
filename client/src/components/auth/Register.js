import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  //Send error msg if User already exists
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  const registerInfo = (
    <div className='register-info'>
      <div className='text-center'>
        <h2 className='text-white my-4'>Welcome Back!</h2>
        <p className='text-white my-5'>
          To keep connected with us Please
          <br /> login with your personal details
        </p>
        <Link to='/login'>
          <button className='btn btn-register my-4'>SIGN IN</button>
        </Link>
      </div>
    </div>
  );

  const head = (
    <h1 className='m-3 headline'>
      <img className='mb-1' src={logo} alt='Logo' height='50' width='50'></img>
      Contacter
    </h1>
  );

  const registerForm = (
    <div className='register-form text-center'>
      <div className='row m-0'>
        <div className='col-md-8 m-auto p-0'>
          <h1 className='text-center text-primary'>
            Create Account
            {/* Account <span className='text-primary'>Login</span> */}
          </h1>
          <form onSubmit={onSubmit} className='m-4'>
            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
                type='text'
                name='name'
                value={name}
                onChange={onChange}
                className='form-control'
                placeholder='Enter your name'
                aria-label='Enter your name'
                required
              ></input>
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={onChange}
                className='form-control'
                placeholder='Enter your email '
                aria-label='Enter your email'
                required
              ></input>
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                value={password}
                onChange={onChange}
                className='form-control'
                placeholder='Enter your password '
                aria-label='Enter your password'
                required
                minLength='6'
              ></input>
            </div>
            <div className='from-group'>
              <label htmlFor='password2'>Confirm Password</label>
              <input
                type='password'
                name='password2'
                value={password2}
                onChange={onChange}
                className='form-control'
                placeholder='Confirm your email '
                aria-label='Confirm your email'
                required
                minLength='6'
              ></input>
            </div>
            <input
              type='submit'
              value='Register'
              className='btn btn-register mt-3'
            ></input>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className='row m-0 h-100 w-100' style={{ position: "absolute" }}>
      <div className='col-md-7 order-md-1 p-0 bg-light my-auto h-100'>
        {head}
        {registerForm}
      </div>
      <div className='col-md-5 order-md-2 p-0 bg-primary my-auto h-100'>
        <div className='my-auto h-100'>
          <div
            className='overlay-register-info h-100'
            style={{ height: "85vh" }}
          >
            {registerInfo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
