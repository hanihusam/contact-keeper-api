import React from "react";
import Contact from "../contact/Contact";
import ContactForm from "../contact/ContactForm";
import { MDBRow, MDBCol } from "mdbreact";
import ContactFilter from "../contact/ContactFilter";

const Home = () => {
  return (
    <MDBRow>
      <MDBCol md="6" className="my-4">
        <ContactForm />
      </MDBCol>
      <MDBCol md="6" className="my-4">
        <h2 className="text-center mx-4">Contact List</h2>
        <ContactFilter />
        <Contact />
      </MDBCol>
    </MDBRow>
  );
};

export default Home;
