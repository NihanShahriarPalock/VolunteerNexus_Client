import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext) || {};
  const location = useLocation();

  if (loading) {
      return <h2>Loading </h2>
    //   <Spinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={`/login`} replace={true} />;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node,
};