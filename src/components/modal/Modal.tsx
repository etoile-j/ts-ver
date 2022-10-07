import { useEffect } from 'react';
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
    background-color: #ffffff;
    width: 360px;
    height: 200px;
    padding: 45px 0 40px;
    text-align: center;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    animation: ${fadeIn} 0.15s ease-in-out;
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
    width: 210px;
    height: 110px;
    margin: 0 auto;
    line-height: 20px;
`;

const BtnLeft = styled.button.attrs({
    type: 'button',
})`
    width: 100px;
    padding: 9px 0;
    margin-right: 10px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    color: #767676;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    box-sizing: border-box;
`;
const BtnRight = styled(BtnLeft)`
    background-color: #6997f7;
    padding: 10px 0;
    margin-right: 0px;
    border: none;
    color: #ffffff;
`;

interface IModal {
    close: React.MouseEventHandler<HTMLButtonElement>;
    ok: React.MouseEventHandler<HTMLButtonElement>;
    leftBtn: string;
    rightBtn: string;
    text?: string;
}

const Modal = (modal: IModal) => {
    useEffect(() => {
        const body = document.querySelector('body') as HTMLElement;
        body.style.overflow = 'hidden';
        return () => {
            body.style.overflow = 'auto';
        };
    }, []);

    return (
        <Div>
            <Container>
                <Wrap>
                    <CloseBtn onClick={modal.close} />
                    <Content>
                        <p>{modal.text}</p>
                        <div>
                            <BtnLeft onClick={modal.close}>
                                {modal.leftBtn}
                            </BtnLeft>
                            <BtnRight onClick={modal.ok}>
                                {modal.rightBtn}
                            </BtnRight>
                        </div>
                    </Content>
                </Wrap>
            </Container>
        </Div>
    );
};
export default Modal;
