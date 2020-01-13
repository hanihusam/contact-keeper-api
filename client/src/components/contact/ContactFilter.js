import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import { MDBFormInline, MDBIcon } from "mdbreact";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContact, clearFilter, filtered } = contactContext;
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <MDBFormInline className="md-form">
      <MDBIcon icon="search" />
      <input
        ref={text}
        className="form-control ml-3 w-75"
        type="text"
        placeholder="Filter Contacts..."
        aria-label="Search"
        onChange={onChange}
      />
    </MDBFormInline>
  );
};

export default ContactFilter;
