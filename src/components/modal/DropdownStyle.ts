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
    position: absolute;
    z-index: 10;
    right: -1px;
    background-color: var(--white);
    width: 113px;
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
    color: var(--dark-gray);
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid var(--white);
    border-radius: 5px;
    :hover {
        background-color: #7fb5ff;
        color: var(--white);
    }
`;

export { Container, Button };
