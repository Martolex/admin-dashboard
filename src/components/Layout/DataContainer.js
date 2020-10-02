import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Router } from "react-router";
import { withRouter } from "react-router";
import PrivateRoute from "../../utils/PrivateRoute";
import BookDetails from "../content/Books/BookDetails";
const DataContainer = ({ items }) => {
  const genPaths = (item) => {
    const Component = withRouter(item.component);
    const routes = [];

    routes.push(
      <PrivateRoute exact={item.exact} path={item.path}>
        <Component />
      </PrivateRoute>
    );

    if (item.subRoutes) {
      for (const route of item.subRoutes) {
        routes.push(
          <PrivateRoute path={item.path + route.path}>
            <route.component />
          </PrivateRoute>
        );
      }
    }

    return routes;
  };

  const routes = items.reduce(
    (routes, currRoutes) => [...routes, ...genPaths(currRoutes)],
    []
  );

  return (
    <Switch>
      {routes}
      <PrivateRoute path="/book/:id">
        <BookDetails />
      </PrivateRoute>
    </Switch>
  );
};

export default DataContainer;
