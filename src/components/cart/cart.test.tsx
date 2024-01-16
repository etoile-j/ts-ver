import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IProduct } from 'GlobalType';
import CartItems from './CartItems';
import CartTitle from './title/CartTitle';

describe('처음 장바구니 진입 시, 장바구니에 담긴 상품이 없는 경우', () => {
    test('NoneCartItem 컴포넌트가 렌더링된다.', () => {
        render(
            <CartItems
                isLoading={false}
                cartData={[]}
                cartProductDetails={[]}
                setCartProductDetails={() => {}}
                checkedItems={[]}
                setCheckedItems={() => {}}
            />,
        );
        const textEl = screen.getByText('장바구니에 담긴 상품이 없습니다.');
        expect(textEl).toBeInTheDocument();
    });

    test('최상단 체크박스가 체크 해제되어 있다.', () => {
        render(
            <CartTitle cartProductDetails={[]} checkedItems={[]} setCheckedItems={() => {}} />,
        );
        const toggleAll = screen.getByRole('checkbox', { checked: false });
        expect(toggleAll).toBeInTheDocument();
    });
});

describe('처음 장바구니 진입 시, 장바구니에 담긴 상품이 있는 경우', () => {
    const cartProductDetails: IProduct[] = [
        {
            cart_item_id: 10,
            image: 'https://openmarket.weniv.co.kr/media/products/2023/12/22/IMG_0356.jpeg',
            price: 30000,
            product_id: 1,
            product_name: '원두',
            quantity: 1,
            shipping_fee: 0,
            shipping_method: 'PARCEL',
            stock: 2,
            store_name: 'OURSHOP',
        },
        {
            cart_item_id: 10,
            image: 'https://openmarket.weniv.co.kr/media/products/2023/12/22/IMG_0356.jpeg',
            price: 10000,
            product_id: 2,
            product_name: '드립백',
            quantity: 1,
            shipping_fee: 3000,
            shipping_method: 'DELIVERY',
            stock: 5,
            store_name: 'OURSHOP',
        },
        {
            cart_item_id: 10,
            image: 'https://openmarket.weniv.co.kr/media/products/2023/12/22/IMG_0356.jpeg',
            price: 22000,
            product_id: 3,
            product_name: '샐러드',
            quantity: 1,
            shipping_fee: 0,
            shipping_method: 'DELIVERY',
            stock: 3,
            store_name: 'OURSHOP',
        },
    ];

    const checkedItems = [
        { product_id: 1, quantity: 3, price: 3000, shipping_fee: 3000 },
        { product_id: 2, quantity: 1, price: 55000, shipping_fee: 0 },
        { product_id: 3, quantity: 2, price: 10000, shipping_fee: 5000 },
    ];

    test('NoneCartItem 컴포넌트가 렌더링되지 않는다.', () => {
        render(
            <CartItems
                isLoading={true}
                cartData={[]}
                cartProductDetails={[]}
                setCartProductDetails={() => {}}
                checkedItems={checkedItems}
                setCheckedItems={() => {}}
            />,
        );
        const textEl = screen.queryByText('장바구니에 담긴 상품이 없습니다.');
        expect(textEl).toBeNull();
    });

    test('최상단 체크박스가 체크되어 있다.', () => {
        render(
            <CartTitle
                cartProductDetails={cartProductDetails}
                checkedItems={checkedItems}
                setCheckedItems={() => {}}
            />,
        );
        const toggleAllCheckbox = screen.getByRole('checkbox', { checked: true });
        expect(toggleAllCheckbox).toBeInTheDocument();
    });
});
