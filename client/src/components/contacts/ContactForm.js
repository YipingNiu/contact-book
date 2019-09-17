import React, { useState, useContext, useEffect, Fragment } from "react";
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
    <Fragment>
      <form
        className='contact-form text-center mx-5 mt-5 pt-5'
        onSubmit={onSubmit}
      >
        <h2 className='text-primary text-center pb-5'>
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
          <label className='form-check-label' htmlFor='inlineRadio1'>
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
          <label className='form-check-label' htmlFor='inlineRadio2'>
            Professional
          </label>
        </div>
        <button type='submit' className='btn btn-contacts btn-block mt-4'>
          {current ? "Update Contact" : "Add Contact"}
        </button>
        {current && (
          <div>
            <button className='btn btn-clear btn-block mt-1' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </form>
    </Fragment>
  );
};

export default ContactForm;
