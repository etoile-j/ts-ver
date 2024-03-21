import { useEffect, useState } from 'react';
import { getProductDetail } from 'apis/products';
import { IProduct } from 'GlobalType';
import MyOrderDetails from './MyOrderDetails';
import ViewDetailIcon from 'assets/icon-view-details.svg';
import {
    Content,
    Container,
    ProductWrap,
    ProductImg,
    StrongNumber,
    ViewDetailButton,
    ViewDetailImg,
} from './Style';

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

const MyOrder = ({ order }: { order: IOrderList }) => {
    const { created_at, order_items, total_price } = order;
    const [leadItemDetails, setLeadItemDetails] = useState<IProduct>();
    const orderCount = order_items.length;

    useEffect(() => {
        const updateItemDetail = async () => {
            const itemDetailData = await getProductDetail(order_items[0]);
            setLeadItemDetails(itemDetailData);
        };
        updateItemDetail();
    }, []);

    const showMyOrderDetails = () => {};

    return (
        <Container>
            <Content width="270px">{created_at.slice(0, 10)}</Content>
            <Content width="550px">
                <ProductWrap>
                    <ProductImg src={leadItemDetails?.image} />
                    <em>
                        {leadItemDetails?.product_name}
                        {orderCount > 1 && (
                            <>
                                {' '}
                                외 <StrongNumber> {orderCount - 1}</StrongNumber>개
                            </>
                        )}
                    </em>
                </ProductWrap>
            </Content>
            <Content width="280px">{total_price.toLocaleString('ko-KR')}</Content>
            <Content width="150px" onClick={showMyOrderDetails}>
                <ViewDetailButton>
                    <ViewDetailImg src={ViewDetailIcon} />
                </ViewDetailButton>
            </Content>
        </Container>
    );
};
export default MyOrder;
