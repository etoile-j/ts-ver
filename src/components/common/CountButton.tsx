import { Dispatch, SetStateAction, useState } from 'react';
import { Count, CountBtn, CountBtnplus } from './CountButtonStyle';
import Modal from 'components/modal/Modal';
import ModalContainer from 'components/modal/ModalContainer';

interface IProductDetailProps {
    stocks?: number | undefined;
    count?: number | undefined;
    setCount?: Dispatch<SetStateAction<number>> | undefined;
}

const CountButton = (props: IProductDetailProps) => {
    const { stocks, count, setCount } = props;
    const [disabledP, setDisabledP] = useState(false);
    const [disabledM, setDisabledM] = useState(false);
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    };

    const plusBtn = () => {
        if (disabledM === true) {
            setDisabledM(false);
        }
        if (count === stocks) {
            handleModal();
            setDisabledP(true);
        } else {
            setCount!(count! + 1);
        }
    };

    const minusBtn = () => {
        if (disabledP === true) {
            setDisabledP(false);
            setCount!(count! - 1);
        } else if (count === 1) {
            setDisabledM((isState: boolean) => !isState);
        } else if (count! > 1) {
            setCount!(count! - 1);
        }
    };

    return (
        <>
            <div>
                <CountBtn
                    onClick={minusBtn}
                    disabled={disabledM}
                    aria-label="수량 빼기"
                >
                    -
                </CountBtn>
                <Count aria-label={`현재 수량 ${count}`}>{count}</Count>
                <CountBtnplus
                    onClick={plusBtn}
                    disabled={disabledP}
                    aria-label="수량 더하기"
                >
                    +
                </CountBtnplus>
            </div>
            {modal && (
                <ModalContainer>
                    <Modal
                        close={handleModal}
                        ok={handleModal}
                        rightBtn="확인"
                        text="현재 재고보다 더 많은 수량을"
                        text2="담을 수 없습니다."
                        leftNone="none"
                    />
                </ModalContainer>
            )}
        </>
    );
};
export default CountButton;
