import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0.5;
    }
    to {
        opacity: 1;
    }
`;

const Container = styled.div`
    position: relative;
    z-index: 10;
    right: 40px;
    background-color: #ffffff;
    width: 113px;
    height: 104px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    animation: ${fadeIn} 0.15s ease-in-out;
`;

const Button = styled.button.attrs({
    type: 'button',
})`
    width: 95px;
    padding: 9px;
    margin-bottom: 5px;
    color: #767676;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    :hover {
        background-color: #7fb5ff;
        color: #ffffff;
    }
`;

export { Container, Button };
