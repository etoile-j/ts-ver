import { useLocation } from 'react-router-dom';
import Header from 'components/common/Header';
import styled from 'styled-components';

const Main = styled.main`
    max-width: 1280px;
    margin: 0 20px;
`;

const OrderNum = styled.p``;

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
                <h2>주문이 완료되었습니다.</h2>
                <OrderNum>
                    주문번호 :{' '}
                    {info.created_at.slice(0, 10).replaceAll('-', '')} - 0000
                    {info.order_number}
                </OrderNum>
            </Main>
        </>
    );
};
export default CompletePayment;
