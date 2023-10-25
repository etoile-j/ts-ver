import React from 'react';
import { Navigate } from 'react-router-dom';
import NotFound from 'pages/notification/NotFound';
import { getLocalStorage } from 'utills/storage';

interface Iprops {
    component: React.ReactNode;
    type: string;
}

const TypeRoute = ({ component, type }: Iprops) => {
    const token = getLocalStorage('token');
    const userType = getLocalStorage('login_type');

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
