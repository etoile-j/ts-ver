import { useEffect, useRef } from 'react';
import { ReactElement } from 'react';
import {
    Div,
    Container,
    Wrap,
    CloseBtn,
    Content,
    BtnLeft,
    BtnRight,
} from './ModalStyle';

interface IModal {
    close: React.MouseEventHandler<HTMLButtonElement>;
    ok?: () => void;
    leftBtn?: string;
    rightBtn: string;
    text?: string;
    text2?: string;
    component?: ReactElement;
    leftNone?: string;
}

const Modal = (modal: IModal) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const body = document.querySelector('body') as HTMLElement;
        body.style.overflow = 'hidden';
        return () => {
            body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        const modalDiv = modalRef.current!;
        modalDiv.tabIndex = 0;
        modalDiv.focus();
    }, []);

    return (
        <Div>
            <Container>
                <Wrap role="dialog">
                    <CloseBtn onClick={modal.close} />
                    <Content ref={modalRef}>
                        {modal.component}
                        <div>
                            <p>{modal.text}</p>
                            <p>{modal.text2}</p>
                        </div>
                        <div>
                            <BtnLeft
                                onClick={modal.close}
                                style={{
                                    display: modal.leftNone,
                                }}
                            >
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
