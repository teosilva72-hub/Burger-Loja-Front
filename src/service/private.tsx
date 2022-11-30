import { Navigate } from "react-router";

const ProtectedRoute = ({ user, children }:any) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
};

export default ProtectedRoute