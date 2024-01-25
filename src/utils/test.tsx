import { render } from '@testing-library/react';
import Payment from 'pages/payment/Payment';
import { MemoryRouter } from 'react-router-dom';

export const paymentRender = () => {
    return render(
        <MemoryRouter>
            <Payment />
        </MemoryRouter>,
    );
};
