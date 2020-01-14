import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

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
      register({
        name,
        email,
        password
      });
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
