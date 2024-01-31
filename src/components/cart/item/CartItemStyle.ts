import DeleteIcon from '../../../assets/icon-delete.svg';
import styled from 'styled-components';

interface styledCompo {
    width?: string;
}

const Content = styled.span`
    position: relative;
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;

const Wrap = styled.div`
    display: flex;
    text-align: left;
`;

const ProductImg = styled.img.attrs({ alt: '상품 이미지' })`
    width: 160px;
    height: 160px;
    margin-right: 36px;
    border-radius: 10px;
    object-fit: contain;
`;

const SellerName = styled.p`
    margin-top: 5px;
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const ProductName = styled.p`
    margin: 10px 0;
    font-family: 'SpoqaHanSansNeo-Regular';
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

const Price = styled.span`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const DeliveryText = styled.p`
    position: absolute;
    bottom: 10px;
    color: #767676;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
`;

const Count = styled.button`
    width: 50px;
    height: 50px;
    border-top: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    @media screen and (max-width: 830px) {
        width: 41px;
        height: 41px;
        font-size: 16px;
        line-height: 20px;
    }
`;

const CountBtn = styled.button.attrs({ type: 'button' })`
    position: relative;
    width: 50px;
    height: 50px;
    margin: 30px 0;
    border: 1px solid #c4c4c4;
    border-radius: 5px 0 0 5px;
    color: transparent;
    font-weight: 500;
    font-size: 18px;
    @media screen and (max-width: 830px) {
        width: 41px;
        height: 41px;
        font-size: 16px;
    }
    ::before {
        content: '';
        background-color: #c4c4c4;
        position: absolute;
        top: 24px;
        left: 15px;
        width: 18px;
        height: 2px;
        @media screen and (max-width: 830px) {
            top: 19px;
            left: 13px;
            width: 14px;
        }
    }
`;

const CountBtnplus = styled(CountBtn)`
    border-radius: 0 5px 5px 0;
    ::after {
        content: '';
        background-color: #c4c4c4;
        position: absolute;
        top: 16px;
        left: 23px;
        width: 2px;
        height: 18px;
        @media screen and (max-width: 830px) {
            top: 13px;
            left: 19px;
            height: 14px;
        }
    }
`;

const InPrice = styled.p`
    margin-bottom: 26px;
    color: red;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`;

const OrderBtn = styled.button`
    background-color: var(--point-color);
    width: 130px;
    padding: 10px 0;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const DeleteBtn = styled.button.attrs({ type: 'button' })`
    position: absolute;
    top: -40px;
    right: 14px;
    width: 22px;
    height: 22px;
    background-image: url(${DeleteIcon});
    background-repeat: no-repeat;
    background-size: 22px 22px;
`;

export {
    Content,
    Wrap,
    ProductImg,
    SellerName,
    ProductName,
    Price,
    DeliveryText,
    Count,
    CountBtn,
    CountBtnplus,
    InPrice,
    OrderBtn,
    DeleteBtn,
};
