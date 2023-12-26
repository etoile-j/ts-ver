import styled from 'styled-components';
import MinusIcon from '../../../assets/icon-minus-line.svg';
import PlusIcon from '../../../assets/icon-plus-line.svg';

const Container = styled.ul`
    display: flex;
    background: #f2f2f2;
    align-items: center;
    height: 150px;
    margin: 80px 0 40px;
    padding: 0 10px;
    border-radius: 10px;
`;

const List = styled.li`
    position: relative;
    width: 320px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
`;

const CartResultTitle = styled.p`
    margin-bottom: 12px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;
const CartResultTitleAmount = styled(CartResultTitle)`
    margin-bottom: 5px;
    font-weight: 700;
`;

const Price = styled.strong`
    margin-right: 2px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;

const Minus = styled.div`
    position: absolute;
    right: -15px;
    top: 15px;
    background-color: #ffffff;
    width: 30px;
    height: 30px;
    background-image: url(${MinusIcon});
    background-repeat: no-repeat;
    background-size: 17px 17px;
    background-position: center;
    border-radius: 50%;
`;
const Plus = styled(Minus)`
    background-image: url(${PlusIcon});
`;

const Result = styled(List)`
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;
const ResultPrice = styled.strong`
    color: red;
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    @media screen and (max-width: 830px) {
        font-size: 30px;
        line-height: 38px;
    }
`;
const Won = styled.span`
    color: red;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    @media screen and (max-width: 830px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

export {
    Container,
    List,
    CartResultTitle,
    CartResultTitleAmount,
    Price,
    Minus,
    Plus,
    Result,
    ResultPrice,
    Won,
};
