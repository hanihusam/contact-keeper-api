import React, { useState } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
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
