import { RenderResult, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import queryClient from 'queries/queryClient';
import Payment from 'pages/payment/Payment';

export const paymentRender = () => {
    return render(
        <MemoryRouter>
            <Payment />
        </MemoryRouter>,
    );
};

export const componentRender = (element: ReactElement): RenderResult => {
    return render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>{element}</MemoryRouter>
        </QueryClientProvider>,
    );
};
