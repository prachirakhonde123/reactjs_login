import React from 'react';
// import { Navigate } from 'react-router-dom';
import {Navigate} from 'react-router-dom'
import { getToken } from './Session'; // Utility to get token

const PrivateRoute = ({ children }) => {
  const token = getToken();
  console.log('token in private route is...',token)
  return token ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
