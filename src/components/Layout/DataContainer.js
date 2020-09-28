import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Router } from "react-router";
import { withRouter } from "react-router";
import PrivateRoute from "../../utils/PrivateRoute";
const DataContainer = ({ items }) => {
  return (
    <Switch>
      {items.map((item) => {
        const Component = withRouter(item.component);
        return (
          <PrivateRoute path={item.path}>
            <Component />
          </PrivateRoute>
        );
      })}
    </Switch>
  );
};

export default DataContainer;
