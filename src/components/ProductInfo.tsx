import styled from 'styled-components';
import TestImg from '../assets/ProductTestImg.jpg';

const ProductImg = styled.img`
    width: 380px;
    height: 380px;
    margin-bottom: 16px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
`;

const ProductName = styled.p`
    padding: 10px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

const SellerName = styled.p`
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`;

const Price = styled.p`
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;
const Won = styled.span`
    margin-left: 2px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const ProductInfo = () => {
    return (
        <>
            <li>
                <ProductImg src={TestImg}></ProductImg>
                <SellerName>우당탕탕 라이캣의 실험실</SellerName>
                <ProductName>Hack Your Life 개발자 노트북 파우치</ProductName>
                <Price>
                    29000<Won>원</Won>
                </Price>
            </li>
        </>
    );
};
export default ProductInfo;
