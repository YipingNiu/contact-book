import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  return (
    <div className='card mx-5 my-2 '>
      <div className='card-overlay'>
        <div className='card-body'>
          <h3 className='text-left'>
            {name}
            <span
              style={{ float: "right", fontSize: "15px" }}
              className={
                "badge " +
                (type === "professional" ? "badge-primary" : "badge-info")
              }
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </h3>
          <ul className='list-group'>
            {email && (
              <li className='mb-1'>
                <i className='fas fa-envelope-open' />
                &nbsp;&nbsp;{email}
              </li>
            )}
            {phone && (
              <li className=''>
                <i className='fas fa-phone' />
                &nbsp;&nbsp;{phone}
              </li>
            )}
          </ul>
          <p className='pt-2'>
            <button
              className='btn btn-edit btn-sm'
              //Set current contact when click Edit btn
              onClick={() => setCurrent(contact)}
            >
              Edit
            </button>
            <button className='btn btn-delete btn-sm ml-1' onClick={onDelete}>
              Delete
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};
export default ContactItem;
