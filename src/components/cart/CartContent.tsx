import { useState } from 'react';
import { useQuery } from 'react-query';
import { getCartItem } from 'apis/cart';
import { IProduct, ICheckedItems } from 'GlobalType';
import CartTitle from './title/CartTitle';
import CartItems from './CartItems';
import CartResult from './result/CartResult';

const CartContent = () => {
    const [cartProductDetails, setCartProductDetails] = useState<IProduct[]>([]);
    const [checkedItems, setCheckedItems] = useState<ICheckedItems[]>([]);

    const { data: cartData } = useQuery(['cartData'], getCartItem);
    const { count, results } = cartData || {};

    return (
        <>
            <CartTitle
                cartProductDetails={cartProductDetails}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
            />
            <CartItems
                cartCount={count}
                cartData={results}
                cartProductDetails={cartProductDetails}
                setCartProductDetails={setCartProductDetails}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
            />
            {!!count && (
                <CartResult
                    checkedItems={checkedItems}
                    cartProductDetails={cartProductDetails}
                />
            )}
        </>
    );
};
export default CartContent;
