import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";
import logo from "../../images/logo.png";

const Home = () => {
  const authContext = useContext(AuthContext);

  //Load user when there is a token
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  //Head line with logo
  const head = (
    <h1 className='mx-5 mt-3 headline'>
      <img className='mb-1' src={logo} alt='Logo' height='50' width='50'></img>
      Contacter
    </h1>
  );

  return (
    <div
      className='row bg-light h-100 w-100 m-0'
      style={{ position: "absolute" }}
    >
      <div className='col-lg-6 p-0 bg-light addContacts'>
        {head}
        <div className='col-md-10 m-auto p-0'>
          <ContactForm />
        </div>
      </div>
      <div className='col-lg-6 bg-light p-0'>
        <ContactFilter />
        <div className='contacts'>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
