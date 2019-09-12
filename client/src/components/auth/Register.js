import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Register = () => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;

  const { register } = authContext;

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

  return (
    <div className='row'>
      <div className='col-md-6 mx-auto'>
        <h1 className='mt-5 text-center'>
          Account <span className='text-primary'>Register</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              className='form-control'
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
              required
              minLength='6'
            ></input>
          </div>
          <input
            type='submit'
            value='Register'
            className='btn btn-primary btn-block mt-3'
          ></input>
        </form>
      </div>
    </div>
  );
};

export default Register;
