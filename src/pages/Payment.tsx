import { useLocation } from 'react-router-dom';
import DeliveryInfo from 'components/DeliveryInfo';
import FinalPaymentInfo from 'components/FinalPaymentInfo';
import Footer from 'components/Footer';
import Header from 'components/Header';
import OrderTable from 'components/OrderTable';
import styled from 'styled-components';

const Main = styled.main`
    max-width: 1280px;
    margin: 0 20px;
`;

const Section = styled.section`
    margin-left: 40px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
`;

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 15px 0;
    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;
    line-height: 30px;
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
    margin: 0 10px 0 8px;
`;

const Label = styled.label`
    width: 126px;
`;

const KakkoLabel = styled(Label)`
    margin-right: 30px;
`;

interface IDirectOrder {
    product_id: number;
    totalCount: number;
    order_kind: string;
    image: string;
    SellerName: string;
    productName: string;
    shippingFee: number;
    price: number;
}

const Payment = () => {
    const info: IDirectOrder = useLocation().state;

    return (
        <>
            <Header />
            <Main>
                <h2>주문/결제하기</h2>
                <section>
                    {/* <Heading>주문 목록</Heading> */}
                    <OrderTable info={info} />
                </section>
                <section>
                    <Heading>배송 정보</Heading>
                    <DeliveryInfo />
                </section>
                <Container>
                    <section>
                        <Heading>결제수단</Heading>
                        <Wrap>
                            <Label>
                                <RadioiInput value="CARD" />
                                신용/체크카드
                            </Label>
                            <Label>
                                <RadioiInput value="DEPOSIT" />
                                무통장 입금
                            </Label>
                            <Label>
                                <RadioiInput value="PHONE_PAYMENT" />
                                휴대폰 결제
                            </Label>
                            <Label>
                                <RadioiInput value="NAVERPAY" />
                                네이버페이
                            </Label>
                            <KakkoLabel>
                                <RadioiInput value="KAKAOPAY" />
                                카카오페이
                            </KakkoLabel>
                        </Wrap>
                    </section>
                    <Section>
                        <Heading>최종결제 정보</Heading>
                        <FinalPaymentInfo info={info} />
                    </Section>
                </Container>
            </Main>
            <Footer />
        </>
    );
};
export default Payment;
