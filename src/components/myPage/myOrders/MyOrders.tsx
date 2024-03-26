import { useEffect, useState } from 'react';
import { getOrders } from 'apis/order';
import { IOrderInfo } from 'GlobalType';
import MyOrder from './MyOrder';
import { Wrap, TitleLi, Content } from './Style';

const MyOrders = () => {
    const [orderList, setOrderList] = useState<IOrderInfo[]>([]);

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
