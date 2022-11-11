import { useLocation } from 'react-router-dom';
import Header from 'components/common/Header';
import Notification from 'components/common/Notification';
import styled from 'styled-components';

const Main = styled.main`
    position: relative;
    max-width: 1280px;
    margin: 0 20px;
`;

interface IInfo {
    created_at: string;
    order_number: number;
}

const CompletePayment = () => {
    const info: IInfo = useLocation().state;

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
                    subText2={`주문일자 : ${info.created_at
                        .slice(0, 19)
                        .replace('T', ' ')}`}
                    rightText="메인으로"
                    rightBtn={() => (window.location.href = '/')}
                    leftNone="none"
                />
            </Main>
        </>
    );
};
export default CompletePayment;
