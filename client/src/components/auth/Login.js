import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import { Link } from "react-router-dom";

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
        <h2 className='text-white dislpay'>Hello,Friend!</h2>
        <p className='text-white my-5'>
          Enter your personal details <br /> and start journey with us
        </p>
        <Link to='/register'>
          <button className='btn btn-register'>Register</button>
        </Link>
      </div>
    </div>
  );

  const loginForm = (
    <div className='login-form'>
      <div className='row'>
        <div className='col-md-8 m-auto'>
          <h1 className='text-center'>
            Account <span className='text-primary'>Login</span>
          </h1>
          <form onSubmit={onSubmit} className='m-5'>
            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                name='email'
                value={email}
                onChange={onChange}
                className='form-control'
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
                required
              ></input>
            </div>
            <input
              type='submit'
              value='Login'
              className='btn btn-primary btn-block mt-3'
            ></input>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className='overlay'>
      <div className='row' style={{ height: "100vh" }}>
        <div className='col-md-7 '>{loginForm}</div>
        <div className='col-md-5 bg-primary'>{registerInfo}</div>
      </div>
    </div>
  );
};

export default Login;
