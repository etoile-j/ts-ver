import styled from 'styled-components';

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

export { Container, OrderBtnBig };
