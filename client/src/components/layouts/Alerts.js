import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { MDBAlert } from "mdbreact";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <MDBAlert color={alert.type} key={alert.id}>
        <i className="fas fa-info-circle" />
        {alert.msg}
      </MDBAlert>
    ))
  );
};

export default Alerts;
