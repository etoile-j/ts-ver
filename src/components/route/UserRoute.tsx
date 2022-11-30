import React from 'react';
import NotFound from 'pages/notification/NotFound';

interface Iprops {
    component: React.ReactNode;
}

const UserRoute = ({ component }: Iprops) => {
    const token = localStorage.getItem('token');

    return <>{token ? <NotFound /> : component}</>;
};
export default UserRoute;
