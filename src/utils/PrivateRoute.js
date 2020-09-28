import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";

const PrivateRoute = ({ isLoggedIn = true, children, ...rest }) => {
  return (
    <Route
      {...rest}
      component={({ location, match, history }) => {
        return isLoggedIn ? (
          React.cloneElement(children, {
            match,
            location,
            history,
          })
        ) : (
          <Redirect
            to={{
              pathname: "",
              state: { loginError: true },
            }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: true,
});

export default PrivateRoute;
