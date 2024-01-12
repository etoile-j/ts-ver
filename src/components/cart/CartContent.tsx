import { useState } from 'react';
import { useQuery } from 'react-query';
import { axiosApi } from 'apis/axiosInstance';
import { IProduct, ICheckedItems } from 'GlobalType';
import CartTitle from './title/CartTitle';
import CartItems from './CartItems';
import CartResult from './result/CartResult';

const CartContent = () => {
    const [cartCount, setCartCount] = useState(null);
    const [cartProductDetails, setCartProductDetails] = useState<IProduct[]>([]);
    const [checkedItems, setCheckedItems] = useState<ICheckedItems[]>([]);

    const handleGetCart = async () => {
        try {
            const response = await axiosApi.get('/cart/');
            setCartCount(response.data.count);
            return response.data.results;
        } catch (err) {
            console.error(err);
        }
    };

    const { data: cartData } = useQuery(['cartData'], handleGetCart);

    return (
        <>
            <CartTitle
                cartCount={cartCount}
                cartProductDetails={cartProductDetails}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
            />
            <CartItems
                cartCount={cartCount}
                cartData={cartData}
                cartProductDetails={cartProductDetails}
                setCartProductDetails={setCartProductDetails}
                checkedItems={checkedItems}
                setCheckedItems={setCheckedItems}
            />
            {!!cartCount && (
                <CartResult
                    checkedItems={checkedItems}
                    cartProductDetails={cartProductDetails}
                />
            )}
        </>
    );
};
export default CartContent;
