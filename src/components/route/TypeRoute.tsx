import React from 'react';
import { Navigate } from 'react-router-dom';
import NotFound from 'pages/notification/NotFound';

interface Iprops {
    component: React.ReactNode;
    type: string;
}

const TypeRoute = ({ component, type }: Iprops) => {
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('login_type');

    return (
        <>
            {token === null ? (
                <Navigate to="/login" />
            ) : userType === type ? (
                component
            ) : (
                <NotFound />
            )}
        </>
    );
};
export default TypeRoute;
