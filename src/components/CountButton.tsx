import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';

const Count = styled.button`
    width: 50px;
    height: 50px;
    border-top: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
`;

const CountBtn = styled.button.attrs({ type: 'button' })`
    position: relative;
    width: 50px;
    height: 50px;
    margin: 30px 0;
    border: 1px solid #c4c4c4;
    border-radius: 5px 0 0 5px;
    color: transparent;
    font-weight: 500;
    font-size: 18px;
    ::before {
        content: '';
        background-color: #c4c4c4;
        position: absolute;
        top: 24px;
        left: 15px;
        width: 18px;
        height: 2px;
    }
`;

const CountBtnplus = styled(CountBtn)`
    border-radius: 0 5px 5px 0;
    ::after {
        content: '';
        background-color: #c4c4c4;
        position: absolute;
        top: 16px;
        left: 23px;
        width: 2px;
        height: 18px;
    }
`;

interface IProductDetailProps {
    stocks?: number | undefined;
    count?: number | undefined;
    setCount?: Dispatch<SetStateAction<number>> | undefined;
}

const CountButton = (props: IProductDetailProps) => {
    const { stocks, count, setCount } = props;
    const [disabledP, setDisabledP] = useState(false);
    const [disabledM, setDisabledM] = useState(false);

    console.log(stocks);
    console.log('count', count);
    const plusBtn = () => {
        if (disabledM === true) {
            setDisabledM(false);
        }
        if (count === stocks) {
            alert('재고가 없습니다.');
            setDisabledP(true);
        } else {
            setCount!(count! + 1);
        }
    };

    const minusBtn = () => {
        if (disabledP === true) {
            setDisabledP(false);
            setCount!(count! - 1);
        } else if (count === 2) {
            //이거거어어어 고치고 싶다^^.........
            setDisabledM((isState) => !isState);
        }
        setCount!(count! - 1);
    };

    return (
        <div>
            <CountBtn
                // onClick={() => setCount(count - 1)}
                onClick={minusBtn}
                disabled={disabledM}
            >
                -
            </CountBtn>
            <Count>{count}</Count>
            <CountBtnplus onClick={plusBtn} disabled={disabledP}>
                +
            </CountBtnplus>
        </div>
    );
};
export default CountButton;
