import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Circles } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
  const { user, loading } = useContext(AuthContext) || {};
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <Circles
          height='80'
          width='80'
          color='#4fa94d'
          ariaLabel='circles-loading'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
        
      </div>
    );
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