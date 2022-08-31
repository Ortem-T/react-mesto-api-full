import React from 'react';
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ loggedIn, children }) => {
    const location = useLocation();
    console.log(location.pathname)
    if (!loggedIn) {
        return <Navigate to="/sign-in" replace />;
    }
    return children
}

export default ProtectedRoute;