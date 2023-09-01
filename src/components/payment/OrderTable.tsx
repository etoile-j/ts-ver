import { IProduct } from 'GlobalType';
import {
    TitleLi,
    Title,
    OrderLi,
    Wrap,
    ProductImg,
    GrayFont,
    ProductName,
    Price,
} from './OrderTableStyle';

const OrderTable = ({ info }: { info: [] }) => {
    return (
        <>
            <ul>
                <TitleLi>
                    <Title width="589px">상품정보</Title>
                    <Title width="232px">할인</Title>
                    <Title width="228px">배송비</Title>
                    <Title width="231px">주문금액</Title>
                </TitleLi>
                {info.map((info: IProduct) => {
                    return (
                        <OrderLi key={info.product_id}>
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
