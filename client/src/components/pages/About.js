import React from "react";
//This page is not going show up
const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className='my-1'>
        This is a full stack React app for keeping contacts
      </p>
      <p className='bg-dark text-light py-1 my-3'>
        <strong className='ml-2'>Version:</strong>1.0.0
      </p>
    </div>
  );
};

export default About;
