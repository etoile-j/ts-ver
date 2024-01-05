import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICheckedItems, IProduct } from 'GlobalType';
import {
    Container,
    List,
    CartResultTitle,
    CartResultTitleAmount,
    Price,
    Minus,
    Plus,
    Result,
    ResultPrice,
    Won,
    OrderBtnBig,
} from './CartResultStyle';

const CartResult = ({
    checkedItems,
    cartProductDetails,
}: {
    checkedItems: ICheckedItems[];
    cartProductDetails: IProduct[];
}) => {
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalShipping, setTotalShipping] = useState(0);

    useEffect(() => {
        setTotalPrice(
            checkedItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
        );
        setTotalShipping(checkedItems.reduce((acc, item) => acc + item.shipping_fee, 0));
    }, [checkedItems]);

    const handleSubmit = () => {
        if (checkedItems) {
            navigate('/payment', {
                state: {
                    order_kind: 'cart_order',
                    total_price: totalPrice,
                    total_shipping: totalShipping,
                    order_product: cartProductDetails.map(
                        ({
                            quantity,
                            image,
                            store_name,
                            product_name,
                            shipping_fee,
                            price,
                        }: IProduct) => {
                            return {
                                quantity,
                                image,
                                store_name,
                                product_name,
                                shipping_fee,
                                price,
                            };
                        },
                    ),
                },
            });
        }
    };

    return (
        <>
            <Container>
                <List>
                    <CartResultTitle>총 상품금액</CartResultTitle>
                    <Price>{totalPrice.toLocaleString('ko-KR')}</Price>원
                    <Minus />
                </List>
                <List>
                    <CartResultTitle>상품 할인</CartResultTitle>
                    <Price>0</Price>원
                    <Plus />
                </List>
                <List>
                    <CartResultTitle>배송비</CartResultTitle>
                    <Price>{totalShipping.toLocaleString('ko-KR')}</Price>원
                </List>
                <Result>
                    <CartResultTitleAmount>결제 예정 금액</CartResultTitleAmount>
                    <ResultPrice>
                        {(totalPrice + totalShipping).toLocaleString('ko-KR')}
                    </ResultPrice>
                    <Won>원</Won>
                </Result>
            </Container>
            {checkedItems && (
                <OrderBtnBig
                    onClick={handleSubmit}
                    style={{
                        backgroundColor: checkedItems.length ? '#6997f7' : '#c4c4c4',
                        cursor: checkedItems.length ? 'pointer' : 'default',
                    }}
                    disabled={!checkedItems.length}
                >
                    주문하기
                </OrderBtnBig>
            )}
        </>
    );
};
export default CartResult;
