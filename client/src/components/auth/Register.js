import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

const Register = () => {
  const alertContext = useContext(AlertContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = user;
  const { setAlert } = alertContext;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      console.log("Register success");
    }
  };

  return (
    <MDBRow center>
      <MDBCol md="6">
        <MDBCard>
          <MDBCardBody>
            <form onSubmit={onSubmit}>
              <p className="h4 text-center py-4">Register</p>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="name"
                  onChange={onChange}
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  name="email"
                  onChange={onChange}
                />
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  name="password"
                  validate
                  onChange={onChange}
                />
                <MDBInput
                  label="Confirm your password"
                  icon="exclamation-triangle"
                  group
                  type="password"
                  name="password2"
                  validate
                  error="wrong"
                  success="right"
                  onChange={onChange}
                />
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn color="cyan" type="submit">
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default Register;
