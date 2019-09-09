import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, updateContact, clearCurrent } = contactContext;

  //Update form with the current value when click Edit btn
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current == null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }

    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form className='py-2' onSubmit={onSubmit}>
      <h2 className='text-primary text-center'>
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <div className='form-group'>
        <input
          className='form-control'
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={onChange}
        ></input>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          type='email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={onChange}
        ></input>
      </div>
      <div className='form-group'>
        <input
          className='form-control'
          type='text'
          placeholder='Phone'
          name='phone'
          value={phone}
          onChange={onChange}
        ></input>
      </div>
      <h6>Contact Type</h6>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name='type'
          value='personal'
          onChange={onChange}
          checked={type === "personal"}
        />
        <label class='form-check-label' for='inlineRadio1'>
          Personal{" "}
        </label>
      </div>
      <div className='form-check form-check-inline'>
        <input
          className='form-check-input'
          type='radio'
          name='type'
          value='professional'
          onChange={onChange}
          checked={type === "professional"}
        />
        <label class='form-check-label' for='inlineRadio2'>
          Professional
        </label>
      </div>
      <button type='submit' className='btn btn-primary btn-block mt-2'>
        {current ? "Update Contact" : "Add Contact"}
      </button>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
