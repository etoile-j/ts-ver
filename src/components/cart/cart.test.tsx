import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartItems from './CartItems';

describe('처음 장바구니 진입 시, 장바구니에 담긴 상품이 없는 경우', () => {
    test('NoneCartItem 컴포넌트가 렌더링된다.', () => {
        render(<CartItems cartCount={0} cartData={[]} />);
        const textEl = screen.getByText('장바구니에 담긴 상품이 없습니다.');
        expect(textEl).toBeInTheDocument();
    });
});
