import TestImg from '../assets/ProductTestImg.jpg';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    text-align: left;
`;

const ProductImg = styled.img`
    width: 104px;
    height: 104px;
    margin-right: 36px;
    border-radius: 10px;
`;

const SellerName = styled.p`
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const ProductName = styled.p`
    margin: 10px 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

const Price = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const Count = styled.p`
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const DeliveryText = styled.p`
    margin-top: 40px;
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const CartProduct = () => {
    return (
        <>
            <Wrap>
                <ProductImg src={TestImg}></ProductImg>
                <div>
                    <SellerName>우당탕탕 라이캣의 실험실</SellerName>
                    <ProductName>
                        Hack Your Life 개발자 노트북 파우치
                    </ProductName>
                    <Price>
                        29000<span>원</span>
                    </Price>
                    <Count>수량: 1개</Count>
                    {/* <DeliveryText>택배배송 / 무료배송</DeliveryText> */}
                </div>
            </Wrap>
        </>
    );
};
export default CartProduct;
