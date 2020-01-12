import React, { Fragment, useContext } from "react";
import ContactItem from "./ContactItem";
import FadeIn from "react-fade-in";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactContext from "../../context/contacts/contactContext";

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please, add a contact</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {/* <FadeIn transitionDuration={700}> */}
        {filtered !== null
          ? filtered.map(contact => (
              <CSSTransition key={contact.id} classNames="item" timeout={500}>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))
          : contacts.map(contact => (
              <CSSTransition key={contact.id} classNames="item" timeout={500}>
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
        {/* </FadeIn> */}
      </TransitionGroup>
    </Fragment>
  );
};

export default Contact;
