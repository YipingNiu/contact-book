import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  return (
    <div className='card bg-light my-2 \'>
      <div className='card-body'>
        <h3 className='text-primary text-left'>
          {name}{" "}
          <span
            className={
              "badge " +
              (type === "professional" ? "badge-success" : "badge-warning")
            }
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </h3>
        <ul className='list-group'>
          {email && (
            <li>
              <i className='fas fa-envelope-open' />
              {email}
            </li>
          )}
          {phone && (
            <li>
              <i className='fas fa-phone' />
              {phone}
            </li>
          )}
        </ul>
        <p>
          <button className='btn btn-dark btn-sm'>Edit</button>
          <button className='btn btn-danger btn-sm ml-1'>Delete</button>
        </p>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};
export default ContactItem;
