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

interface IDirectOrder {
    quantity: number;
    image: string;
    store_name: string;
    product_name: string;
    shipping_fee: number;
    price: number;
}

const OrderTable = ({ info }: { info: [] }) => {
    console.log(info);

    return (
        <>
            <ul>
                <TitleLi>
                    <Title width="589px">상품정보</Title>
                    <Title width="232px">할인</Title>
                    <Title width="228px">배송비</Title>
                    <Title width="231px">주문금액</Title>
                </TitleLi>
                {info.map((info: IDirectOrder) => {
                    return (
                        <OrderLi>
                            <Title width="589px">
                                <Wrap>
                                    <ProductImg src={info.image}></ProductImg>
                                    <div>
                                        <GrayFont>{info.store_name}</GrayFont>
                                        <ProductName>
                                            {info.product_name}{' '}
                                        </ProductName>
                                        <GrayFont>
                                            수량: {info.quantity}개
                                        </GrayFont>
                                    </div>
                                </Wrap>
                            </Title>
                            <Title width="232px">-</Title>
                            <Title width="228px">
                                {info.shipping_fee === 0
                                    ? '무료배송'
                                    : `${info.shipping_fee.toLocaleString(
                                          'ko-KR',
                                      )}원`}
                            </Title>
                            <Title width="231px">
                                <Price>
                                    {(
                                        info.price * info.quantity
                                    ).toLocaleString('ko-KR')}
                                    원
                                </Price>
                            </Title>
                        </OrderLi>
                    );
                })}
            </ul>
        </>
    );
};
export default OrderTable;
