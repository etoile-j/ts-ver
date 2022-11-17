import InfiniteScroll from 'react-infinite-scroller';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Products = styled(InfiniteScroll)`
    display: grid;
    grid-template: auto / repeat(3, 1fr);
    gap: 58px;
    @media screen and (max-width: 1100px) {
        gap: 28px;
    }
    @media screen and (max-width: 770px) {
        grid-template: auto / repeat(2, 1fr);
        gap: 20px;
    }
`;

const Li = styled.li`
    animation: ${fadeIn} 1.1s ease-in-out;
`;

const ImgContainer = styled.div`
    overflow: hidden;
    position: relative;
    padding-top: 102%;
`;

const ProductImg = styled.img`
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

export {
    Products,
    Li,
    ImgContainer,
    ProductImg,
    ProductName,
    SellerName,
    Price,
    Won,
};
