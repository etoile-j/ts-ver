import { Section, Container, Title, Ul, Li, LeftSide } from './MyOrderDetailsStyle';

interface IOrderList {
    address: string;
    address_message: string;
    created_at: string;
    order_items: number[];
    order_number: number;
    order_quantity: number[];
    payment_method: string;
    receiver: string;
    receiver_phone_number: string;
    total_price: number;
}

const MyOrderDetails = ({ order }: { order: IOrderList }) => {
    const 결제일시 = order.created_at.slice(0, 19).replace('T', ' ');
    const 연락처 = order.receiver_phone_number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

    return (
        <Section>
            <Container>
                <Title>배송지 정보</Title>
                <Ul>
                    <Li>
                        <LeftSide>수령인</LeftSide> {order.receiver}
                    </Li>
                    <Li>
                        <LeftSide>연락처</LeftSide> {연락처}
                    </Li>
                    <Li>
                        <LeftSide>배송 주소</LeftSide> {order.address}
                    </Li>
                    <Li>
                        <LeftSide>배송 메시지</LeftSide> {order.address_message}
                    </Li>
                </Ul>
                <Title>결제 정보</Title>
                <Ul>
                    <Li>
                        <LeftSide>결제일시</LeftSide> {결제일시}
                    </Li>
                    <Li>
                        <LeftSide>결제수단</LeftSide> {order.payment_method}
                    </Li>
                </Ul>
            </Container>
        </Section>
    );
};
export default MyOrderDetails;
