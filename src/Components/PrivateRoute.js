import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
          {...rest}
          // exact path=""
          render={(props) => {
            if (localStorage.getItem("token")) {
              // if token is in localstorage, render the given component
              return <Component {...props} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
      );
}

export default PrivateRoute;