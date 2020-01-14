import React, { useState, useContext, Fragment } from "react";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = () => (
    <Fragment>
      <MDBNavItem className="text-right">
        <MDBNavbarBrand>Hello {user && user.name}</MDBNavbarBrand>
      </MDBNavItem>
      <MDBNavItem className="text-right">
        <MDBNavLink to="#" onClick={onLogout}>
          <i className="fas fa-sign-out-alt" /> Logout
        </MDBNavLink>
      </MDBNavItem>
    </Fragment>
  );

  const guestLinks = () => (
    <Fragment>
      <MDBNavItem className="text-right">
        <MDBNavLink to="/register">Register</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem className="text-right">
        <MDBNavLink to="/login">Login</MDBNavLink>
      </MDBNavItem>
    </Fragment>
  );

  // Toggler button
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <i className={icon} /> {title}
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          {isAuthenticated ? authLinks() : guestLinks()}
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt"
};

export default Navbar;
