import { useEffect, useState } from 'react';
import { ICheckedItems } from 'GlobalType';
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
} from './CartResultStyle';

const CartResult = ({ checkedItems }: { checkedItems: ICheckedItems[] }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalShipping, setTotalShipping] = useState(0);

    useEffect(() => {
        setTotalPrice(
            checkedItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
        );
        setTotalShipping(checkedItems.reduce((acc, item) => acc + item.shipping_fee, 0));
    }, [checkedItems]);

    return (
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
    );
};
export default CartResult;
