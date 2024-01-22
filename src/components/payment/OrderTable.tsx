import { Link } from 'react-router-dom';
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

const OrderTable = ({ orderProductsDetail }: { orderProductsDetail: IProduct[] }) => {
    return (
        <ul>
            <TitleLi>
                <Title width="589px">상품정보</Title>
                <Title width="232px">할인</Title>
                <Title width="228px">배송비</Title>
                <Title width="231px">주문금액</Title>
            </TitleLi>
            {orderProductsDetail.map((product: IProduct) => {
                const { product_id, image, product_name, quantity, price, shipping_fee } =
                    product;
                return (
                    <OrderLi key={product_id}>
                        <Title width="589px">
                            <Wrap>
                                <Link to={`/detail/${product_id}`}>
                                    <ProductImg src={image}></ProductImg>
                                </Link>
                                <div>
                                    <GrayFont>{product.store_name}</GrayFont>
                                    <Link to={`/detail/${product_id}`}>
                                        <ProductName>{product_name}</ProductName>
                                    </Link>
                                    <GrayFont>수량: {quantity}개</GrayFont>
                                </div>
                            </Wrap>
                        </Title>
                        <Title width="232px">-</Title>
                        <Title width="228px">
                            {shipping_fee
                                ? `${shipping_fee.toLocaleString('ko-KR')}원`
                                : '무료배송'}
                        </Title>
                        <Title width="231px">
                            <Price>{(price * quantity).toLocaleString('ko-KR')}원</Price>
                        </Title>
                    </OrderLi>
                );
            })}
        </ul>
    );
};
export default OrderTable;
