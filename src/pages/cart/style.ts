import MinusIcon from '../../assets/icon-minus-line.svg';
import PlusIcon from '../../assets/icon-plus-line.svg';
import styled from 'styled-components';

interface styledCompo {
    width?: string;
}

const Main = styled.main`
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
`;

const TitleLi = styled.li`
    display: flex;
    background: #f2f2f2;
    padding: 19px 0 18px;
    margin-bottom: 35px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;
const Content = styled.span`
    position: relative;
    display: inline-block;
    width: ${(props: styledCompo) => props.width};
    text-align: center;
`;

const Container = styled.li`
    display: flex;
    align-items: center;
    height: 200px;
    margin-bottom: 10px;
    border: 2px solid #c4c4c4;
    border-radius: 10px;
`;

const OrderBtn = styled.button`
    background-color: #6997f7;
    width: 130px;
    padding: 10px 0;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const OrderBtnBig = styled(OrderBtn)`
    display: block;
    width: 220px;
    padding: 19px 0;
    margin: 0 auto;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;

const CartResult = styled.ul`
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
    Main,
    TitleLi,
    Content,
    Container,
    OrderBtn,
    OrderBtnBig,
    CartResult,
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
