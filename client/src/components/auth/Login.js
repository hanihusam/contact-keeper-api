import React, { useState, useEffect, useContext } from "react";
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

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else {
      login({
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
              <p className="h4 text-center py-4">Login</p>
              <div className="grey-text">
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
                  onChange={onChange}
                />
              </div>
              <div className="text-center py-4 mt-3">
                <MDBBtn color="cyan" type="submit">
                  Login
                </MDBBtn>
              </div>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default Login;
