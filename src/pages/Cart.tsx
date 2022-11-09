import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../constants/constants';
import CartContent from 'components/cart/CartContent';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import NoneCartContent from 'components/cart/NoneCartContent';
import MinusIcon from '../assets/icon-minus-line.svg';
import PlusIcon from '../assets/icon-plus-line.svg';
import styled from 'styled-components';
interface styledCompo {
    width?: string;
}

const Main = styled.main`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
`;

const TitleLi = styled.li`
    display: flex;
    background: #f2f2f2;
    padding: 19px 0 18px;
    margin-bottom: 35px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;
const Content = styled.span`
    position: relative;
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;

const Container = styled.li`
    display: flex;
    align-items: center;
    height: 200px;
    margin-bottom: 10px;
    border: 2px solid #c4c4c4;
    border-radius: 10px;
`;

const OrderBtn = styled.button`
    background-color: #6997f7;
    width: 130px;
    padding: 10px 0;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const OrderBtnBig = styled(OrderBtn)`
    display: block;
    width: 220px;
    padding: 19px 0;
    margin: 0 auto;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;

const CartResult = styled.ul`
    display: flex;
    background: #f2f2f2;
    align-items: center;
    height: 150px;
    margin: 80px 0 40px;
    border-radius: 10px;
`;

const List = styled.li`
    position: relative;
    width: 320px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
`;

const CartResultTitle = styled.p`
    margin-bottom: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;
const CartResultTitleAmount = styled(CartResultTitle)`
    margin-bottom: 5px;
    font-weight: 700;
`;

const Price = styled.strong`
    margin-right: 2px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;

const Minus = styled.div`
    position: absolute;
    right: -15px;
    top: 15px;
    background-color: #ffffff;
    width: 30px;
    height: 30px;
    background-image: url(${MinusIcon});
    background-repeat: no-repeat;
    background-size: 17px 17px;
    background-position: center;
    border-radius: 50%;
`;
const Plus = styled(Minus)`
    background-image: url(${PlusIcon});
`;

const Result = styled(List)`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;
const ResultPrice = styled.strong`
    color: red;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
`;
const Won = styled.span`
    color: red;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

const Cart = () => {
    const [cartData, setCartData] = useState<ICartData[]>([]);
    const [cartCount, setCartCount] = useState();
    const [changeActive, setChangeActive] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalShipping, setTotalShipping] = useState(0);
    const token = localStorage.getItem('token');
    const [allSwitch, setAllSwitch] = useState(false);
    const [checkedproduct, setCheckedproduct] = useState([]);
    const [putInfo, setPutInfo] = useState(false);

    const handleGetCart = async () => {
        try {
            const url: string = BASE_URL + '/cart/';
            const response = await axios.get(url, {
                headers: {
                    Authorization: `JWT ${token}`,
                },
            });
            setCartData(response.data.results);
            setCartCount(response.data.count);
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        handleGetCart();
    }, []);

    interface ICartData {
        cart_item_id: number;
        product_id: number;
        quantity: number;
    }
    console.log(cartData);

    const [checkItems, setCheckItems] = useState<number[]>([]);
    const handleAllCheck = (checked: boolean) => {
        if (checked) {
            setTotalPrice(0);
            setTotalShipping(0);
            const idArray: number[] = [];
            cartData.forEach((el) => idArray.push(el.cart_item_id));
            setCheckItems(idArray);
            setAllSwitch(!allSwitch);
        } else {
            setCheckItems([]);
            setTotalPrice(0);
            setTotalShipping(0);
            setAllSwitch(!allSwitch);
        }
    };
    console.log(checkItems);

    const navigate = useNavigate();

    const handlePutInfo = () => {
        setPutInfo((bool: boolean) => !bool);
    };

    const handleSubmit = () => {
        if (checkedproduct.length !== 0) {
            navigate('/payment', {
                state: {
                    order_kind: 'cart_order',
                    total: totalPrice + totalShipping,
                    order_product: checkedproduct,
                },
            });
        }
    };

    useEffect(() => {
        handleSubmit();
    }, [handlePutInfo]);

    return (
        <>
            <Header />
            <h2>장바구니</h2>
            <Main>
                <TitleLi>
                    <Content width="90px">
                        <input
                            id="All"
                            type="checkbox"
                            name="All"
                            onChange={(e) => handleAllCheck(e.target.checked)}
                            checked={
                                checkItems.length === cartData.length
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
