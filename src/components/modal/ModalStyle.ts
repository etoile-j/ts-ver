import CloseIcon from '../../assets/icon-delete.svg';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0.5;
    }
    to {
        opacity: 1;
    }
`;

const Div = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
`;

const Container = styled.div`
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Wrap = styled.div`
    position: relative;
    background-color: var(--white);
    width: 360px;
    height: 200px;
    padding: 45px 0 40px;
    text-align: center;
    border: 1px solid var(--base-gray);
    border-radius: 8px;
    animation: ${fadeIn} 0.15s ease-in-out;
    box-shadow: rgb(0 0 0 / 20%) 0px 1px 5px -1px, rgb(0 0 0 / 10%) 0px -1px 2px -1px;
`;

const CloseBtn = styled.button`
    position: absolute;
    top: 18px;
    right: 18px;
    width: 22px;
    height: 22px;
    background-image: url(${CloseIcon});
    background-repeat: no-repeat;
    background-size: 22px 22px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 247px;
    height: 113px;
    margin: 0 auto;
    line-height: 20px;
`;

const BtnLeft = styled.button.attrs({
    type: 'button',
})`
    width: 100px;
    padding: 9px 0;
    margin-right: 10px;
    border: 1px solid var(--base-gray);
    border-radius: 5px;
    color: var(--dark-gray);
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    box-sizing: border-box;
`;
const BtnRight = styled(BtnLeft)`
    background-color: var(--point-color);
    padding: 10px 0;
    margin-right: 0px;
    border: none;
    color: var(--white);
`;

export { Div, Container, Wrap, CloseBtn, Content, BtnLeft, BtnRight };
