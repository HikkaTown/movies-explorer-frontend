import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...props}) => {
  const auth = localStorage.getItem('user');
  return (
    <Route>
      {
        () => auth ? <Component {...props} /> : <Redirect to="/"/>
      }
    </Route>
  );
};

export default ProtectedRoute;