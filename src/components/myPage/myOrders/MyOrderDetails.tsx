import { IOrderInfo } from 'GlobalType';
import { PAYMENT_METHOD } from 'constants/index';
import { Section, Container, Title, Ul, List, ListTitle } from './MyOrderDetailsStyle';

const MyOrderDetails = ({ order }: { order: IOrderInfo }) => {
    const { receiver, address, address_message, payment_method, created_at } = order;
    const paymentDateTime = created_at.slice(0, 19).replace('T', ' ');
    const phone = order.receiver_phone_number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

    return (
        <Section>
            <Container>
                <Title>배송지 정보</Title>
                <Ul>
                    <List>
                        <ListTitle>수령인</ListTitle> {receiver}
                    </List>
                    <List>
                        <ListTitle>연락처</ListTitle> {phone}
                    </List>
                    <List>
                        <ListTitle>배송 주소</ListTitle> {address}
                    </List>
                    <List>
                        <ListTitle>배송 메시지</ListTitle> {address_message}
                    </List>
                </Ul>
                <Title>결제 정보</Title>
                <Ul>
                    <List>
                        <ListTitle>결제일시</ListTitle> {paymentDateTime}
                    </List>
                    <List>
                        <ListTitle>결제수단</ListTitle> {PAYMENT_METHOD[payment_method]}
                    </List>
                </Ul>
            </Container>
        </Section>
    );
};
export default MyOrderDetails;
