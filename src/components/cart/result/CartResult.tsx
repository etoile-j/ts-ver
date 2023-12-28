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

const CartResult = () => {
    return (
        <Container>
            <List>
                <CartResultTitle>총 상품금액</CartResultTitle>
                {/* <Price>{totalPrice.toLocaleString('ko-KR')}</Price> */}
                <Price>5000</Price>
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
                {/* <Price>{totalShipping.toLocaleString('ko-KR')}</Price>원 */}
                <Price>5000</Price>원
            </List>
            <Result>
                <CartResultTitleAmount>결제 예정 금액</CartResultTitleAmount>
                <ResultPrice>
                    {/* {(totalPrice + totalShipping).toLocaleString('ko-KR')} */}
                    5000
                </ResultPrice>
                <Won>원</Won>
            </Result>
        </Container>
    );
};
export default CartResult;
