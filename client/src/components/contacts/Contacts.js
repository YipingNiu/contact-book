import React, { Fragment, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  //have access to any state and methods associated with this context
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map(contact => (
        <h3>{contact.name}</h3>
      ))}
    </Fragment>
  );
};

export default Contacts;
