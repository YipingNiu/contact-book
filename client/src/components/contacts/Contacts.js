import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  //have access to any state and methods associated with this context
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h5 className='text-secondary'>Please add a contact</h5>;
  }

  return (
    <Fragment>
      <TransitionGroup>
        {/* show filtered or all contacts */}
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact._id} timeout={500} classNames='item'>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contacts;
