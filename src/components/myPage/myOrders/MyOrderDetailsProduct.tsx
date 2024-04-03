import { IProduct } from 'GlobalType';
import {
    Container,
    Content,
    Wrap,
    ProductImg,
    StoreName,
    ProductName,
    Price,
    Subtitle,
    SubtitleText,
} from './MyOrderDetailsProductStyle';
import { Link } from 'react-router-dom';

interface MyOrderDetailsProductProps {
    productDetails: IProduct | undefined;
    quantity: number;
}

const MyOrderDetailsProduct = ({ productDetails, quantity }: MyOrderDetailsProductProps) => {
    const { product_id, image, store_name, product_name, price, shipping_fee } =
        productDetails as IProduct;

    return (
        <Container>
            <Content width="370px">
                <Link to={`/detail/${product_id}`}>
                    <Wrap>
                        <ProductImg src={image} />
                        <div>
                            <StoreName>{store_name}</StoreName>
                            <ProductName>{product_name}</ProductName>
                            <Price>{price.toLocaleString('ko-KR')}원</Price>
                        </div>
                    </Wrap>
                </Link>
            </Content>
            <Content>
                <Subtitle>배송비</Subtitle>
                <SubtitleText>
                    {shipping_fee === 0 ? '무료' : `${shipping_fee.toLocaleString('ko-KR')}원`}
                </SubtitleText>
            </Content>
            <Content>
                <Subtitle>수량</Subtitle>
                <SubtitleText>{quantity}개</SubtitleText>
            </Content>
        </Container>
    );
};
export default MyOrderDetailsProduct;
