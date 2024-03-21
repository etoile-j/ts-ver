import { useEffect, useState } from 'react';
import { getOrders } from 'apis/order';
import { Wrap, TitleLi, Content } from './Style';
import MyOrder from './MyOrder';

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

const MyOrders = () => {
    const [orderList, setOrderList] = useState<IOrderList[]>([]);

    useEffect(() => {
        const updateOrderList = async () => {
            const ordersData = await getOrders();
            setOrderList(ordersData.results);
        };
        updateOrderList();
    }, []);

    return (
        <Wrap>
            <h3>주문 내역</h3>
            <TitleLi>
                <Content width="270px">주문일자</Content>
                <Content width="550px">주문정보</Content>
                <Content width="280px">상품구매금액</Content>
                <Content width="150px" />
            </TitleLi>
            {orderList.map((order) => (
                <MyOrder order={order} key={order.order_number} />
            ))}
        </Wrap>
    );
};
export default MyOrders;
