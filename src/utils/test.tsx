import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import queryClient from 'queries/queryClient';
import Payment from 'pages/payment/Payment';
import DashBoard from 'pages/seller/DashBoard';

export const paymentRender = () => {
    return render(
        <MemoryRouter>
            <Payment />
        </MemoryRouter>,
    );
};

export const dashBoardRender = () => {
    render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <DashBoard />
            </MemoryRouter>
        </QueryClientProvider>,
    );
};
