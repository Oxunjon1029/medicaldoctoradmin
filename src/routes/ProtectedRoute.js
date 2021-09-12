import React from "react";
import { Redirect, Route } from "react-router-dom";
import { TOKEN } from "../constants/constants";
import { getCookie } from "../Cookie/useCookies";
import NotFound from "../pages/NotFound";
const ProtectedRoute = ({ component, path }) => {
    const token = getCookie(TOKEN);
    return token ? (
      <Route exact component={component} path={path} />
    ) : (
      <Redirect component={NotFound} />
    );
  };
  
  export default ProtectedRoute;
  