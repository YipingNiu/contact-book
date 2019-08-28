import React from "react";
import Contacts from "../contacts/Contacts";

const Home = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <h1>Form</h1>
        </div>
        <div className='col-md-6'>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
