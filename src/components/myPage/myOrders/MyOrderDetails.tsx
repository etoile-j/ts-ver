import { useEffect, useState } from 'react';
import { getProductDetail } from 'apis/products';
import { IOrderInfo, IProduct } from 'GlobalType';
import { PAYMENT_METHOD } from 'constants/index';
import MyOrderDetailsProduct from './MyOrderDetailsProduct';
import { Section, Container, Title, Ul, List, ListTitle } from './MyOrderDetailsStyle';

interface IMyOrderDetailsProps {
    order: IOrderInfo;
    leadItemDetails: IProduct | undefined;
}

const MyOrderDetails = ({ order, leadItemDetails }: IMyOrderDetailsProps) => {
    const { receiver, address, address_message, payment_method, order_items, order_quantity } =
        order;
    const paymentDateTime = order.created_at.slice(0, 19).replace('T', ' ');
    const phone = order.receiver_phone_number.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');

    const [allItemDetails, setAllItemDetails] = useState([leadItemDetails]);

    useEffect(() => {
        const getOtherItemsDetails = async () => {
            try {
                const otherItemIds = order_items.slice(1);

                const otherItemsDetails = await Promise.all(
                    otherItemIds.map((itemId) => getProductDetail(itemId)),
                );
                return otherItemsDetails;
            } catch (err) {
                console.error(err);
            }
        };

        if (order_items.length > 1) {
            const concatItemsDetails = async () => {
                const otherItemsDetails = await getOtherItemsDetails();
                setAllItemDetails([...allItemDetails, ...otherItemsDetails!]);
            };
            concatItemsDetails();
        }
    }, []);

    return (
        <Section>
            <Container>
                <Title>주문 상품 정보</Title>
                <Ul>
                    {allItemDetails.map((product, idx) => (
                        <div key={product?.product_id}>
                            <MyOrderDetailsProduct
                                productDetails={product}
                                quantity={order_quantity[idx]}
                            />
                        </div>
                    ))}
                </Ul>
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
