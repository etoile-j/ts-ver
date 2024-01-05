import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICartData } from 'GlobalType';
import CartContent from 'components/cart/CartContent';
import Footer from 'components/common/Footer';
import Header from 'components/common/header/Header';
import { Main } from './style';

const Cart = () => {
    const [changeActive, setChangeActive] = useState(false);
    const [putInfo, setPutInfo] = useState(false);

    // const navigate = useNavigate();

    // const handlePutInfo = () => {
    //     setPutInfo((bool: boolean) => !bool);
    // };

    // const handleSubmit = () => {
    //     if (checkedproduct.length !== 0) {
    //         navigate('/payment', {
    //             state: {
    //                 order_kind: 'cart_order',
    //                 total_price: totalPrice,
    //                 total_shipping: totalShipping,
    //                 order_product: checkedproduct,
    //             },
    //         });
    //     }
    // };

    // useEffect(handleSubmit, [handlePutInfo]);

    return (
        <>
            <Header />
            <Main>
                <h2>장바구니</h2>
                <CartContent />
            </Main>
            <Footer />
        </>
    );
};
export default Cart;
