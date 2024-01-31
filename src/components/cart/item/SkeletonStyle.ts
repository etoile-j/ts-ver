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

const ProductImg = styled.div`
    background-color: #f1f3f4;
    width: 160px;
    height: 160px;
    margin-right: 36px;
    border-radius: 10px;
`;

const SellerName = styled.div`
    background-color: #f1f3f4;
    margin-top: 5px;
    width: 120px;
    height: 15px;
    border-radius: 3px;
`;

const ProductName = styled.p`
    background-color: #f1f3f4;
    margin: 10px 0;
    width: 170px;
    height: 24px;
    border-radius: 3px;
`;

const Price = styled.div`
    background-color: #f1f3f4;
    width: 80px;
    height: 20px;
    border-radius: 3px;
`;

const DeliveryText = styled.div`
    background-color: #f1f3f4;
    position: absolute;
    bottom: 10px;
    width: 110px;
    height: 15px;
    border-radius: 3px;
`;

const InPrice = styled.div`
    background-color: #f1f3f4;
    margin: 0 auto;
    width: 90px;
    height: 25px;
    margin-bottom: 26px;
    border-radius: 3px;
`;

const OrderBtn = styled.button`
    background-color: var(--point-color);
    width: 130px;
    padding: 10px 0;
    border-radius: 5px;
    color: var(--white);
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
    InPrice,
    OrderBtn,
    DeleteBtn,
};
