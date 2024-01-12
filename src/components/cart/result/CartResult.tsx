import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICheckedItems, IProduct } from 'GlobalType';
import { putCartItemQuantity } from 'apis/cart';
import { ORDER_KIND } from 'constants/index';
import {
    Container,
    List,
    CartResultTitle,
    CartResultTitleAmount,
    Price,
    Minus,
    Plus,
    Result,
    ResultPrice,
    Won,
    OrderBtnBig,
} from './CartResultStyle';

const CartResult = ({
    checkedItems,
    cartProductDetails,
}: {
    checkedItems: ICheckedItems[];
    cartProductDetails: IProduct[];
}) => {
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalShipping, setTotalShipping] = useState(0);

    useEffect(() => {
        setTotalPrice(checkedItems.reduce((acc, item) => acc + item.price * item.quantity, 0));
        setTotalShipping(checkedItems.reduce((acc, item) => acc + item.shipping_fee, 0));
    }, [checkedItems]);

    const nonexistentProducts = () => {
        const productIdSet = new Set(checkedItems.map(({ product_id }) => product_id));
        const nonexistentProductId = cartProductDetails.filter(
            ({ product_id }) => !productIdSet.has(product_id),
        );

        return nonexistentProductId.map(({ quantity, product_id, cart_item_id }) => ({
            is_active: false,
            product_id,
            cart_item_id,
            quantity,
        }));
    };

    const updateInactiveItems = async () => {
        const inactiveItems = nonexistentProducts();
        await Promise.all(inactiveItems.map(async (item) => await putCartItemQuantity(item)));
    };

    const handleSubmit = async () => {
        if (checkedItems.length < cartProductDetails.length) {
            await updateInactiveItems();
        }
        // 여기서 체크 안 한 상품들을 is_active를 false로 만들어줘야
        navigate('/payment', {
            state: {
                order_kind: ORDER_KIND.CART_ORDER,
                total_price: totalPrice,
                total_shipping: totalShipping,
                order_product: checkedItems,
            },
        });
    };

    return (
        <>
            <Container>
                <List>
                    <CartResultTitle>총 상품금액</CartResultTitle>
                    <Price>{totalPrice.toLocaleString('ko-KR')}</Price>원
                    <Minus />
                </List>
                <List>
                    <CartResultTitle>상품 할인</CartResultTitle>
                    <Price>0</Price>원
                    <Plus />
                </List>
                <List>
                    <CartResultTitle>배송비</CartResultTitle>
                    <Price>{totalShipping.toLocaleString('ko-KR')}</Price>원
                </List>
                <Result>
                    <CartResultTitleAmount>결제 예정 금액</CartResultTitleAmount>
                    <ResultPrice>
                        {(totalPrice + totalShipping).toLocaleString('ko-KR')}
                    </ResultPrice>
                    <Won>원</Won>
                </Result>
            </Container>
            <OrderBtnBig
                onClick={handleSubmit}
                style={{
                    backgroundColor: checkedItems.length ? '#6997f7' : '#c4c4c4',
                    cursor: checkedItems.length ? 'pointer' : 'default',
                }}
                disabled={!checkedItems.length}
            >
                주문하기
            </OrderBtnBig>
        </>
    );
};
export default CartResult;
