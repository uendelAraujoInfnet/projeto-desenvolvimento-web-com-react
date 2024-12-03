import React from 'react';
import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from '../../interfaces/interface';



const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
