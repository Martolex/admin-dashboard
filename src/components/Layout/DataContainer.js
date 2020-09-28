import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Router } from "react-router";
import PrivateRoute from "../../utils/PrivateRoute";
const DataContainer = ({ items }) => {
  return (
    <Switch>
      {items.map((item) => (
        <PrivateRoute path={item.path}>
          <item.component />
        </PrivateRoute>
      ))}
    </Switch>
  );
};

export default DataContainer;
