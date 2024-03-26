import { useEffect, useState } from 'react';
import { getProductDetail } from 'apis/products';
import { IOrderInfo, IProduct } from 'GlobalType';
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

const MyOrder = ({ order }: { order: IOrderInfo }) => {
    const { created_at, order_items, total_price } = order;
    const orderCount = order_items.length;
    const [leadItemDetails, setLeadItemDetails] = useState<IProduct>();
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const updateItemDetail = async () => {
            const itemDetailData = await getProductDetail(order_items[0]);
            setLeadItemDetails(itemDetailData);
        };
        updateItemDetail();
    }, []);

    const showMyOrderDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <>
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
                        <ViewDetailImg
                            src={ViewDetailIcon}
                            style={{ transform: showDetails ? 'rotate(180deg)' : 'none' }}
                        />
                    </ViewDetailButton>
                </Content>
            </Container>
            {showDetails && <MyOrderDetails order={order} />}
        </>
    );
};
export default MyOrder;
