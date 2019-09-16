import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  //Send error msg if User Invalid
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password
      });
    }
  };

  const registerInfo = (
    <div className='register-info'>
      <div className='text-center'>
        <h2 className='text-white my-4'>Hello, Friend!</h2>
        <p className='text-white my-5'>
          Enter your personal details <br /> and start journey with us
        </p>
        <Link to='/register'>
          <button className='btn btn-register my-4'>SIGN UP</button>
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

  const loginForm = (
    <div className='login-form text-center'>
      <div className='row m-0'>
        <div className='col-md-8 m-auto p-0'>
          <h1 className='text-center text-primary'>
            Sign in to Contacter
            {/* Account <span className='text-primary'>Login</span> */}
          </h1>
          <form onSubmit={onSubmit} className='m-4'>
            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={onChange}
                className='form-control input-box'
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
                placeholder='Enter your password'
                aria-label='Password'
                required
              ></input>
            </div>
            <input
              type='submit'
              value='SIGN IN'
              className='btn btn-login mt-3'
            ></input>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className='row m-0 h-100'>
      <div className='col-md-7 p-0 bg-light h-100'>
        {head}
        {loginForm}
      </div>
      <div className='col-md-5 p-0 bg-primary h-100'>
        <div className='my-auto'>
          <div className='overlay-register-info'>{registerInfo}</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
