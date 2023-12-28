import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { axiosApi } from 'apis/axiosInstance';
import CartItems from './CartItems';
import CartResult from './result/CartResult';
import { OrderBtnBig } from './style';

const CartContent = () => {
    const [cartCount, setCartCount] = useState();

    const handleGetCart = async () => {
        try {
            const response = await axiosApi.get('/cart/');
            setCartCount(response.data.count);
            return response.data.results;
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        handleGetCart();
    }, []);

    const { data: cartData } = useQuery(['cartData'], handleGetCart);
    console.log('cartData', cartData);
    return (
        <>
            <CartItems cartCount={cartCount} cartData={cartData} />
            <CartResult />
            <OrderBtnBig
            // onClick={() => {
            //     setChangeActive(true);
            //     handlePutInfo();
            // }}
            // style={{
            //     backgroundColor: checkItems.length ? '#c4c4c4' : '#6997f7',
            //     cursor: checkItems.length ? 'default' : 'pointer',
            // }}
            // disabled={checkItems.length === 0 && true}
            >
                주문하기
            </OrderBtnBig>
        </>
    );
};
export default CartContent;
