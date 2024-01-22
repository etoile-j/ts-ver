import {
    Content,
    Wrap,
    ProductImg,
    SellerName,
    ProductName,
    Price,
    DeliveryText,
    InPrice,
    OrderBtn,
    DeleteBtn,
} from './SkeletonStyle';

const Skeleton = () => {
    return (
        <>
            <Content width="90px">
                <input type="checkbox" />
            </Content>
            <Content width="611px">
                <Wrap>
                    <ProductImg />
                    <div>
                        <SellerName />
                        <ProductName />
                        <Price />
                        <DeliveryText />
                    </div>
                </Wrap>
            </Content>
            <Content width="248px" />
            <Content width="329px">
                <InPrice />
                <OrderBtn>주문하기</OrderBtn>
                <DeleteBtn aria-label="삭제" />
            </Content>
        </>
    );
};
export default Skeleton;
