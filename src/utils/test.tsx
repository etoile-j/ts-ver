import { RenderResult, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Payment from 'pages/payment/Payment';

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
});

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
