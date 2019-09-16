import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className='mx-5 mt-5 mb-3'>
      <div className='form-group'>
        <input
          ref={text}
          type='text'
          placeholder='Filter Contacts...'
          onChange={onChange}
          className='form-control filter'
        ></input>
      </div>
    </form>
  );
};

export default ContactFilter;
