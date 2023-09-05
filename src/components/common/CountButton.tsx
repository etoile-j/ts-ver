import { useState } from 'react';
import { Count, CountBtn, CountBtnplus } from './CountButtonStyle';
import Modal from 'components/modal/Modal';
import ModalContainer from 'components/modal/ModalContainer';

interface IProductDetail {
    stocks: number | undefined;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CountButton = (props: IProductDetail) => {
    const { stocks, count, setCount } = props;
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    };

    const handlePlusBtn = () => {
        if (count === stocks) {
            return handleModal();
        }
        if (count < stocks!) setCount(count + 1);
    };

    const handleMinusBtn = () => {
        if (count === 1) {
            return;
        }
        setCount(count - 1);
    };

    return (
        <>
            <div>
                <CountBtn onClick={handleMinusBtn} aria-label="수량 빼기">
                    -
                </CountBtn>
                <Count aria-label={`현재 수량 ${count}`}>{count}</Count>
                <CountBtnplus onClick={handlePlusBtn} aria-label="수량 더하기">
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
