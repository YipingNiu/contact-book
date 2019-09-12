import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;
  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("Login submit");
  };

  return (
    <div className='row'>
      <div className='col-md-6 mx-auto'>
        <h1 className='mt-5 text-center'>
          Account <span className='text-primary'>Login</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={onChange}
              className='form-control'
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
  );
};

export default Login;
