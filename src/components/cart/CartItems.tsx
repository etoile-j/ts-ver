import CartItem from './item/CartItem';
import NoneCartItem from './item/NoneCartItem';
import { Container } from './style';

type ICartData = {
    cart_item_id: number;
    is_active: boolean;
    product_id: number;
    quantity: number;
};

interface ICartItemsProps {
    cartData: ICartData[];
    cartCount: any;
}

const CartItems = ({ cartCount, cartData }: ICartItemsProps) => {
    return !cartCount ? (
        <NoneCartItem />
    ) : (
        <>
            {cartData?.map((cartData: ICartData) => {
                return (
                    <Container key={cartData.cart_item_id}>
                        <CartItem
                            product_id={cartData.product_id}
                            quantity={cartData.quantity}
                            cart_item_id={cartData.cart_item_id}
                            // checkItems={checkItems}
                            // setCheckItems={setCheckItems}
                            // changeActive={changeActive}
                            // setTotalPrice={setTotalPrice}
                            // setTotalShipping={setTotalShipping}
                            // handleAllCheck={handleAllCheck}
                            // allSwitch={allSwitch}
                            // setCheckedproduct={setCheckedproduct}
                            // putInfo={putInfo}
                        />
                    </Container>
                );
            })}
        </>
    );
};
export default CartItems;
