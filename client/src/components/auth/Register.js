import React, { useState } from "react";

const Register = () => {
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
    console.log("Register submit");
  };

  return (
    <div className='row'>
      <div className='col-md-6 mx-auto'>
        <h1 className='mt-3'>
          Account <span className='text-primary'>Register</span>
        </h1>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={onChange}
              className='form-control'
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
          <div className='from-group'>
            <label htmlFor='password2'>Confirm Password</label>
            <input
              type='password'
              name='password2'
              value={password2}
              onChange={onChange}
              className='form-control'
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
