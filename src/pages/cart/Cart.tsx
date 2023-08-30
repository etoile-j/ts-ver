import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { axiosApi } from 'apis/axiosInstance';
import CartContent from 'components/cart/CartContent';
import Footer from 'components/common/Footer';
import Header from 'components/common/header/Header';
import NoneCartContent from 'components/cart/NoneCartContent';
import {
    Main,
    TitleLi,
    Content,
    Container,
    OrderBtnBig,
    CartResult,
    List,
    CartResultTitle,
    CartResultTitleAmount,
    Price,
    Minus,
    Plus,
    Result,
    ResultPrice,
    Won,
} from './style';

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
    interface ICartData {
        cart_item_id: number;
        product_id: number;
        quantity: number;
    }

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
                <TitleLi>
                    <Content width="90px">
                        <input
                            id="All"
                            type="checkbox"
                            name="All"
                            onChange={(e) => handleAllCheck(e.target.checked)}
                            checked={
                                checkItems.length === cartData?.length
                                    ? true
                                    : false
                            }
                        />
                    </Content>
                    <Content width="611px">상품정보</Content>
                    <Content width="248px">수량</Content>
                    <Content width="329px">상품금액</Content>
                </TitleLi>
                {cartCount === 0 ? (
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
                                            setCheckedproduct={
                                                setCheckedproduct
                                            }
                                            putInfo={putInfo}
                                        />
                                    </Container>
                                );
                            })}
                        </>
                        <CartResult>
                            <List>
                                <CartResultTitle>총 상품금액</CartResultTitle>
                                <Price>
                                    {totalPrice.toLocaleString('ko-KR')}
                                </Price>
                                원
                                <Minus />
                            </List>
                            <List>
                                <CartResultTitle>상품 할인</CartResultTitle>
                                <Price>0</Price>원
                                <Plus />
                            </List>
                            <List>
                                <CartResultTitle>배송비</CartResultTitle>
                                <Price>
                                    {totalShipping.toLocaleString('ko-KR')}
                                </Price>
                                원
                            </List>
                            <Result>
                                <CartResultTitleAmount>
                                    결제 예정 금액
                                </CartResultTitleAmount>
                                <ResultPrice>
                                    {(
                                        totalPrice + totalShipping
                                    ).toLocaleString('ko-KR')}
                                </ResultPrice>
                                <Won>원</Won>
                            </Result>
                        </CartResult>
                        <OrderBtnBig
                            onClick={() => {
                                setChangeActive(true);
                                handlePutInfo();
                            }}
                            style={{
                                backgroundColor:
                                    checkItems.length === 0
                                        ? '#c4c4c4'
                                        : '#6997f7',
                                cursor:
                                    checkItems.length === 0
                                        ? 'default'
                                        : 'pointer',
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
