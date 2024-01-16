import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0.3;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Li = styled.li`
    animation: ${fadeIn} 1s ease;
`;

const ImgContainer = styled.div`
    overflow: hidden;
    position: relative;
    padding-top: 102%;
`;

const ProductImg = styled.img.attrs({ alt: '상품 이미지' })`
    background-color: #f1f3f4;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin-bottom: 16px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    object-fit: cover;
`;

const ProductName = styled.p`
    padding: 10px 0;
    font-family: 'SpoqaHanSansNeo-Regular';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    @media screen and (max-width: 1100px) {
        font-size: 17px;
        line-height: 20px;
    }
`;

const SellerName = styled.p`
    margin-top: 7px;
    color: #767676;
    font-family: 'SpoqaHanSansNeo-Regular';
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

export { Li, ImgContainer, ProductImg, ProductName, SellerName, Price, Won };
