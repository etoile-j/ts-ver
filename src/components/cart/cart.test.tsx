import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartItems from './CartItems';
import CartTitle from './title/CartTitle';
import CartContent from './CartContent';
import { QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import queryClient from 'queries/queryClient';

describe('처음 장바구니 진입 시, 장바구니에 담긴 상품이 없는 경우', () => {
    test('NoneCartItem 컴포넌트가 렌더링된다.', () => {
        render(<CartItems cartCount={0} />);
        const textEl = screen.getByText('장바구니에 담긴 상품이 없습니다.');
        expect(textEl).toBeInTheDocument();
    });

    test('최상단 체크박스가 체크 해제되어 있다.', () => {
        render(<CartTitle cartCount={0} />);
        const toggleAll = screen.getByRole('checkbox', { checked: false });
        expect(toggleAll).toBeInTheDocument();
    });
});

describe('처음 장바구니 진입 시, 장바구니에 담긴 상품이 있는 경우', () => {
    const checkedItems = [
        { product_id: 1, quantity: 3, price: 3000, shipping_fee: 3000 },
        { product_id: 2, quantity: 1, price: 55000, shipping_fee: 0 },
        { product_id: 3, quantity: 2, price: 10000, shipping_fee: 5000 },
    ];

    test('NoneCartItem 컴포넌트가 렌더링되지 않는다.', () => {
        render(<CartItems cartCount={3} />);
        const textEl = screen.queryByText('장바구니에 담긴 상품이 없습니다.');
        expect(textEl).toBeNull();
    });

    test('최상단 체크박스가 체크되어 있다.', () => {
        render(<CartTitle cartCount={3} checkedItems={checkedItems} />);
        const toggleAllCheckbox = screen.getByRole('checkbox', { checked: true });
        expect(toggleAllCheckbox).toBeInTheDocument();
    });
});
