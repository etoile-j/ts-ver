import { Dispatch, SetStateAction, useState } from 'react';
import { Count, CountBtn, CountBtnplus } from './CountButtonStyle';

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
            setDisabledM((isState: boolean) => !isState);
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
