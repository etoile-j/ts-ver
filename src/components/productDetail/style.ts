import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Wrap = styled.div`
    display: flex;
    height: 600px;
    animation: ${fadeIn} 0.6s ease-in-out;
    @media screen and (max-width: 1000px) {
        height: 480px;
    }
    @media screen and (max-width: 620px) {
        flex-wrap: wrap;
        width: 100%;
        height: 600px;
        margin: 0 auto;
    }
`;

const ProductImg = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
    @media screen and (max-width: 620px) {
        width: 100%;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    margin-left: 50px;
    @media screen and (max-width: 1000px) {
        margin-left: 25px;
    }
    @media screen and (max-width: 620px) {
        width: 100%;
        margin: 20px 4px 30px;
    }
`;

const ProductName = styled.p`
    margin: 16px 0 20px;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    @media screen and (max-width: 1000px) {
        font-size: 28px;
        line-height: 36px;
    }
    @media screen and (min-width: 620px) and (max-width: 840px) {
        font-size: 25px;
        line-height: 30px;
    }
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
    @media screen and (min-width: 620px) and (max-width: 1000px) {
        font-size: 28px;
        line-height: 33px;
    }
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
    @media screen and (max-width: 620px) {
        margin-top: 70px;
    }
`;

const CountContainer = styled.div`
    height: 110px;
    padding-top: 27px;
    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;
`;

const TotalWrap = styled.div`
    margin: 32px 0 22px;
    text-align: right;
    @media screen and (min-width: 620px) and (max-width: 1000px) {
        margin: 22px 0 22px;
    }
`;

const TotalTitle = styled.span`
    float: left;
    font-weight: 500;
    font-size: 18px;
    line-height: 60px;
    @media screen and (min-width: 620px) and (max-width: 1000px) {
        line-height: 45px;
    }
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
    @media screen and (min-width: 620px) and (max-width: 1000px) {
        font-size: 28px;
        line-height: 36px;
        margin-left: 18px;
    }
`;
const TotalWon = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;

const BtnContainer = styled.div`
    display: flex;
    width: 100%;
`;

const ColorBtn = styled.button.attrs({
    type: 'button',
})`
    background-color: #6997f7;
    width: 100%;
    padding: 19px 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    border-radius: 5px;
`;

const GrayBtn = styled(ColorBtn)`
    background-color: #767676;
    margin-left: 14px;
`;

export {
    Wrap,
    ProductImg,
    Div,
    ProductName,
    SellerName,
    Price,
    Won,
    DeliveryText,
    CountContainer,
    TotalWrap,
    TotalTitle,
    TotalAmount,
    Number,
    TotalPrice,
    TotalWon,
    BtnContainer,
    ColorBtn,
    GrayBtn,
};
