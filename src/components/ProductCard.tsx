import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';
import CountButton from './CountButton';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    height: 600px;
`;

const ProductImg = styled.img`
    float: left;
    width: 600px;
    height: 600px;
    object-fit: cover;
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 50px;
`;

const ProductName = styled.p`
    margin: 16px 0 20px;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
`;

const SellerName = styled.p`
    color: #767676;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

const Price = styled.p`
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
`;
const Won = styled.span`
    margin-left: 2px;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

const DeliveryText = styled.p`
    margin-bottom: 20px;
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const CountContainer = styled.div`
    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;
`;

const TotalWrap = styled.div`
    margin: 32px 0 22px;
    text-align: right;
`;

const TotalTitle = styled.span`
    float: left;
    font-weight: 500;
    font-size: 18px;
    line-height: 60px;
`;

const TotalAmount = styled.span`
    color: #767676;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;
const Number = styled.strong`
    color: #6997f7;
    font-weight: 700;
`;

const TotalPrice = styled.strong`
    margin-left: 28px;
    color: #6997f7;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
`;
const TotalWon = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

const ColorBtn = styled.button`
    background-color: #6997f7;
    width: 416px;
    padding: 19px 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    border-radius: 5px;
    cursor: pointer;
`;

const GrayBtn = styled(ColorBtn)`
    background-color: #767676;
    width: 200px;
    margin-left: 14px;
    cursor: pointer;
`;

interface IProductDetail {
    product_id?: string;
    image?: string;
    store_name?: string;
    product_name?: string;
    price?: number;
    shipping_fee: number;
    stock: number;
}

const ProductCard = () => {
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState<IProductDetail>();
    const { product_id } = useParams();

    const getProductDetail = async () => {
        try {
            const response = await axios.get(
                BASE_URL + `/products/${product_id}/`,
            );
            console.log(response);
            setProduct(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        getProductDetail();
    }, []);

    return (
        <Wrap>
            <ProductImg src={product?.image}></ProductImg>
            <Div>
                <div>
                    <SellerName>{product?.store_name}</SellerName>
                    <ProductName>{product?.product_name}</ProductName>
                    <Price>
                        {product?.price?.toLocaleString('ko-KR')}
                        <Won>원</Won>
                    </Price>
                </div>
                <div>
                    <DeliveryText>
                        택배배송 /{' '}
                        {product?.shipping_fee === 0
                            ? '무료배송'
                            : `${product?.shipping_fee.toLocaleString(
                                  'ko-KR',
                              )}원`}
                    </DeliveryText>
                    <CountContainer>
                        <CountButton
                            stocks={product?.stock}
                            count={count}
                            setCount={setCount}
                        />
                    </CountContainer>
                    <TotalWrap>
                        <TotalTitle>총 상품 금액</TotalTitle>
                        <TotalAmount>
                            총 수량 <Number>{count}</Number>개
                        </TotalAmount>
                        <TotalPrice>
                            {(product?.price! * count).toLocaleString('ko-KR')}
                            <TotalWon>원</TotalWon>
                        </TotalPrice>
                    </TotalWrap>
                    <div>
                        <ColorBtn
                            type="button"
                            onClick={() => (window.location.href = '/payment')}
                        >
                            바로 구매
                        </ColorBtn>
                        <GrayBtn>장바구니</GrayBtn>
                    </div>
                </div>
            </Div>
        </Wrap>
    );
};
export default ProductCard;
