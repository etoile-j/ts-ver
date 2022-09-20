import DeliveryInfo from 'components/DeliveryInfo';
import FinalPaymentInfo from 'components/FinalPaymentInfo';
import Footer from 'components/Footer';
import Header from 'components/Header';
import OrderTable from 'components/OrderTable';
import styled from 'styled-components';

const Section = styled.section`
    /* width: 1280px; */
`;

const Wrap = styled.div`
    padding: 18px 0;
    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;
`;

const Heading = styled.h3`
    padding-bottom: 18px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
`;

const RadioiInput = styled.input.attrs({
    type: 'radio',
    name: 'paymentMethod',
})`
    margin: 0 10px 0 20px;
`;

const Payment = () => {
    return (
        <>
            <Header />
            <main>
                <h2>주문/결제하기</h2>
                <Section>
                    {/* <Heading>주문 목록</Heading> */}
                    <OrderTable />
                </Section>
                <Section>
                    <Heading>배송 정보</Heading>
                    <DeliveryInfo />
                </Section>
                <Section>
                    <Heading>결제수단</Heading>
                    <Wrap>
                        <label>
                            <RadioiInput />
                            신용/체크카드
                        </label>
                        <label>
                            <RadioiInput />
                            무통장 입금
                        </label>
                        <label>
                            <RadioiInput />
                            휴대폰 결제
                        </label>
                        <label>
                            <RadioiInput />
                            네이버페이
                        </label>
                        <label>
                            <RadioiInput />
                            카카오페이
                        </label>
                    </Wrap>
                </Section>
                <Section>
                    <Heading>최종결제 정보</Heading>
                    <FinalPaymentInfo />
                </Section>
            </main>
            <Footer />
        </>
    );
};
export default Payment;
