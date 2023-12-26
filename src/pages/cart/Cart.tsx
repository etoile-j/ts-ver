import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { axiosApi } from 'apis/axiosInstance';
import { ICartData } from 'GlobalType';
import CartContent from 'components/cart/CartContent';
import CartTitle from 'components/cart/CartTitle/CartTitle';
import CartResult from 'components/cart/CartResult/CartResult';
import Footer from 'components/common/Footer';
import Header from 'components/common/header/Header';
import NoneCartContent from 'components/cart/NoneCartContent';
import { Main, Container, OrderBtnBig } from './style';

const Cart = () => {
    const [cartCount, setCartCount] = useState();
    const [changeActive, setChangeActive] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalShipping, setTotalShipping] = useState(0);
    const [allSwitch, setAllSwitch] = useState(false);
    const [checkedproduct, setCheckedproduct] = useState([]);
    const [putInfo, setPutInfo] = useState(false);

    const handleGetCart = async () => {
        try {
            const response = await axiosApi.get('/cart/');
            console.log('여기서 뭐가 나오지', response);
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

    const [checkItems, setCheckItems] = useState<number[]>([]);
    const handleAllCheck = (checked: boolean) => {
        if (checked) {
            setTotalPrice(0);
            setTotalShipping(0);
            const idArray: number[] = [];
            cartData.forEach((el: ICartData) => idArray.push(el.cart_item_id));
            setCheckItems(idArray);
            setAllSwitch(!allSwitch);
        } else {
            setCheckItems([]);
            setTotalPrice(0);
            setTotalShipping(0);
            setAllSwitch(!allSwitch);
        }
    };

    const navigate = useNavigate();

    const handlePutInfo = () => {
        setPutInfo((bool: boolean) => !bool);
    };

    const handleSubmit = () => {
        if (checkedproduct.length !== 0) {
            navigate('/payment', {
                state: {
                    order_kind: 'cart_order',
                    total_price: totalPrice,
                    total_shipping: totalShipping,
                    order_product: checkedproduct,
                },
            });
        }
    };

    useEffect(handleSubmit, [handlePutInfo]);

    return (
        <>
            <Header />
            <Main>
                <h2>장바구니</h2>
                <CartTitle />
                {!cartCount ? (
                    <NoneCartContent />
                ) : (
                    <>
                        <>
                            {cartData?.map((cartData: ICartData) => {
                                return (
                                    <Container key={cartData.cart_item_id}>
                                        <CartContent
                                            product_id={cartData.product_id}
                                            quantity={cartData.quantity}
                                            cart_item_id={cartData.cart_item_id}
                                            checkItems={checkItems}
                                            setCheckItems={setCheckItems}
                                            changeActive={changeActive}
                                            setTotalPrice={setTotalPrice}
                                            setTotalShipping={setTotalShipping}
                                            handleAllCheck={handleAllCheck}
                                            allSwitch={allSwitch}
                                            setCheckedproduct={setCheckedproduct}
                                            putInfo={putInfo}
                                        />
                                    </Container>
                                );
                            })}
                        </>
                        <CartResult />
                        <OrderBtnBig
                            onClick={() => {
                                setChangeActive(true);
                                handlePutInfo();
                            }}
                            style={{
                                backgroundColor: checkItems.length
                                    ? '#c4c4c4'
                                    : '#6997f7',
                                cursor: checkItems.length ? 'default' : 'pointer',
                            }}
                            disabled={checkItems.length === 0 && true}
                        >
                            주문하기
                        </OrderBtnBig>
                    </>
                )}
            </Main>
            <Footer />
        </>
    );
};
export default Cart;
