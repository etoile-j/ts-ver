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

    const { data: cartData, isLoading } = useQuery(['cartData'], getCartItem);

    return (
        <>
            <CartTitle
                cartProductDetails={cartProductDetails}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
            />
            <CartItems
                isLoading={isLoading}
                cartData={cartData}
                cartProductDetails={cartProductDetails}
                setCartProductDetails={setCartProductDetails}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
            />
            {cartData && cartData.length > 0 && (
                <CartResult
                    checkedItems={checkedItems}
                    cartProductDetails={cartProductDetails}
                />
            )}
        </>
    );
};
export default CartContent;
