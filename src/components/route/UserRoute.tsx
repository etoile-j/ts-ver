import React from 'react';
import NotFound from 'pages/notification/NotFound';
import { getLocalStorage } from 'utils/storage';

interface Iprops {
    component: React.ReactNode;
}

const UserRoute = ({ component }: Iprops) => {
    const token = getLocalStorage('token');

    return <>{token ? <NotFound /> : component}</>;
};
export default UserRoute;
