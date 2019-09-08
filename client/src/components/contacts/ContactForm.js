import React, { useState, useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
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
    contactContext.addContact(contact);
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };

  return (
    <form className='py-2' onSubmit={onSubmit}>
      <h2 className='text-primary text-center'>Add Contact</h2>
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
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
