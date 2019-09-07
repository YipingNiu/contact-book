import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRNET,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Ryan",
        email: "ryan@ryan.com",
        phone: "887200000",
        type: "professional"
      },
      {
        id: 2,
        name: "Ryan2",
        email: "ryan2@ryan.com",
        phone: "8872022222",
        type: "personal"
      },
      {
        id: 3,
        name: "Ryan3",
        email: "ryan3@ryan.com",
        phone: "8872333333",
        type: "professional"
      },
      {
        id: 3,
        name: "Arissa",
        email: "Arissa@arissa.com",
        phone: "8872444444",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
  // const addContact = contact => {
  //   contact.id = uuid.v4();
  //   dispatch({ type: ADD_CONTACT, payload: contact });
  // };

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
