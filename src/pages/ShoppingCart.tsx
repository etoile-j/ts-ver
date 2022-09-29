import MinusIcon from '../assets/icon-minus-line.svg';
import PlusIcon from '../assets/icon-plus-line.svg';
import styled from 'styled-components';
import NoneCartContent from 'components/shoppingCart/NoneCartContent';
import Header from 'components/Header';
import Footer from 'components/Footer';
import CartContent from 'components/shoppingCart/CartContent';

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

const OrderBtn = styled.button`
    background-color: #6997f7;
    width: 130px;
    padding: 10px 0;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
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

const ShoppingCart = () => {
    return (
        <>
            <Header />
            <h2>장바구니</h2>
            <Main>
                <ul>
                    <TitleLi>
                        <Content width="90px">
                            <input type="radio"></input>
                        </Content>
                        <Content width="611px">상품정보</Content>
                        <Content width="248px">수량</Content>
                        <Content width="329px">상품금액</Content>
                    </TitleLi>
                    <NoneCartContent />
                    <CartContent />
                </ul>
                <CartResult>
                    <List>
                        <CartResultTitle>총 상품금액</CartResultTitle>
                        <Price>34500</Price>원
                        <Minus />
                    </List>
                    <List>
                        <CartResultTitle>상품 할인</CartResultTitle>
                        <Price>500</Price>원
                        <Plus />
                    </List>
                    <List>
                        <CartResultTitle>배송비</CartResultTitle>
                        <Price>0</Price>원
                    </List>
                    <Result>
                        <CartResultTitleAmount>
                            결제 예정 금액
                        </CartResultTitleAmount>
                        <ResultPrice>34000</ResultPrice>
                        <Won>원</Won>
                    </Result>
                </CartResult>
                <OrderBtnBig>주문하기</OrderBtnBig>
            </Main>
            <Footer />
        </>
    );
};
export default ShoppingCart;
