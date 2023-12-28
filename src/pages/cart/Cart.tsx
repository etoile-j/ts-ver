import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICartData } from 'GlobalType';
import CartTitle from 'components/cart/title/CartTitle';
import CartContent from 'components/cart/CartContent';
import Footer from 'components/common/Footer';
import Header from 'components/common/header/Header';
import { Main } from './style';

const Cart = () => {
    const [changeActive, setChangeActive] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalShipping, setTotalShipping] = useState(0);
    const [allSwitch, setAllSwitch] = useState(false);
    const [checkedproduct, setCheckedproduct] = useState([]);
    const [putInfo, setPutInfo] = useState(false);

    // const [checkItems, setCheckItems] = useState<number[]>([]);
    // const handleAllCheck = (checked: boolean) => {
    //     if (checked) {
    //         setTotalPrice(0);
    //         setTotalShipping(0);
    //         const idArray: number[] = [];
    //         cartData.forEach((el: ICartData) => idArray.push(el.cart_item_id));
    //         setCheckItems(idArray);
    //         setAllSwitch(!allSwitch);
    //     } else {
    //         setCheckItems([]);
    //         setTotalPrice(0);
    //         setTotalShipping(0);
    //         setAllSwitch(!allSwitch);
    //     }
    // };

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
                <CartTitle />
                <CartContent />
            </Main>
            <Footer />
        </>
    );
};
export default Cart;
