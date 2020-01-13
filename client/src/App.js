import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import Navbar from "./components/layouts/Navbar";
import "./App.css";
import { MDBContainer } from "mdbreact";
import setAuthToken from "./components/utils/setAuthToken";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AlertState from "./context/alert/AlertState";
import Alerts from "./components/layouts/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Navbar />
            <MDBContainer>
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </MDBContainer>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
