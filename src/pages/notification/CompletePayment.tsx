import { useLocation } from 'react-router-dom';
import { goToRoute } from 'utils';
import Header from 'components/common/header/Header';
import Notification from 'components/common/Notification';
import { Main } from './style';

const CompletePayment = () => {
    const info: { created_at: string; order_number: number } = useLocation().state;

    return (
        <>
            <Header />
            <Main>
                <Notification
                    mainText="주문이 완료되었습니다."
                    subText1={`주문번호 :${' '}
                    ${info.created_at.slice(0, 10).replaceAll('-', '')} - 0000${
                        info.order_number
                    }`}
                    subText2={`주문일자 : ${info.created_at.slice(0, 19).replace('T', ' ')}`}
                    rightText="메인으로"
                    rightBtn={() => goToRoute()}
                    leftNone="none"
                />
            </Main>
        </>
    );
};
export default CompletePayment;
