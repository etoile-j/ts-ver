import CartProduct from 'components/CartProduct';
import styled from 'styled-components';

interface styledCompo {
    width: string;
}

const TitleLi = styled.li`
    display: flex;
    background: #f2f2f2;
    padding: 19px 0 18px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;
const Title = styled.span`
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;

const OrderLi = styled.li`
    display: flex;
    align-items: center;
    height: 138px;
    margin-top: 7px;
    border-bottom: 1px solid #c4c4c4;
`;

const Total = styled.div`
    text-align: right;
    margin-top: 30px;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    & > strong {
        margin-left: 10px;
        color: red;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
    }
`;

const OrderTable = () => {
    return (
        <>
            <ul>
                <TitleLi>
                    <Title width="589px">상품정보</Title>
                    <Title width="232px">할인</Title>
                    <Title width="228px">배송비</Title>
                    <Title width="231px">주문금액</Title>
                </TitleLi>
                <OrderLi>
                    <Title width="589px">
                        <CartProduct />
                    </Title>
                    <Title width="232px">-</Title>
                    <Title width="228px">무료배송</Title>
                    <Title width="231px">17500</Title>
                </OrderLi>
                <OrderLi>
                    <Title width="589px">
                        <CartProduct />
                    </Title>
                    <Title width="232px">-</Title>
                    <Title width="228px">무료배송</Title>
                    <Title width="231px">17500</Title>
                </OrderLi>
            </ul>
            <Total>
                총 주문금액
                <strong>
                    32400<span>원</span>
                </strong>
            </Total>
        </>
    );
};
export default OrderTable;
