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

const Wrap = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
`;

const ProductImg = styled.img`
    width: 104px;
    height: 104px;
    margin-right: 36px;
    border-radius: 10px;
    object-fit: cover;
`;

const GrayFont = styled.p`
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const ProductName = styled.p`
    margin: 5px 0 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

const Price = styled.strong`
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`;

const Total = styled.div`
    text-align: right;
    margin: 30px 0 90px;
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

interface IDirectOrder {
    info: {
        product_id: number;
        totalCount: number;
        order_kind: string;
        image: string;
        SellerName: string;
        productName: string;
        shippingFee: number;
        price: number;
    };
}

const OrderTable = ({ info }: IDirectOrder) => {
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
                        <Wrap>
                            <ProductImg src={info.image}></ProductImg>
                            <div>
                                <GrayFont>{info.SellerName}</GrayFont>
                                <ProductName>{info.productName} </ProductName>
                                <GrayFont>수량: {info.totalCount}개</GrayFont>
                            </div>
                        </Wrap>
                    </Title>
                    <Title width="232px">-</Title>
                    <Title width="228px">
                        {info.shippingFee === 0
                            ? '무료배송'
                            : `${info.shippingFee.toLocaleString('ko-KR')}원`}
                    </Title>
                    <Title width="231px">
                        <Price>
                            {(info.price * info.totalCount).toLocaleString(
                                'ko-KR',
                            )}
                            원
                        </Price>
                    </Title>
                </OrderLi>
            </ul>
            <Total>
                총 주문금액
                <strong>
                    {(
                        info.price * info.totalCount +
                        info.shippingFee
                    ).toLocaleString('ko-KR')}
                    <span>원</span>
                </strong>
            </Total>
        </>
    );
};
export default OrderTable;
