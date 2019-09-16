import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";
const Home = () => {
  const authContext = useContext(AuthContext);

  //Load user when there is a token
  useEffect(() => {
    authContext.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className='row bg-light h-100'>
      <div className='col-md-6 p-0 bg-light addContacts my-auto'>
        <ContactForm />
      </div>
      <div className='col-md-6 bg-light p-0'>
        <ContactFilter />
        <div className='contacts'>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
