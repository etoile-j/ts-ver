import { useEffect } from 'react';
import { getProductDetail } from 'apis/products';
import { IProduct, ICheckedItems } from 'GlobalType';
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
    cartCount: number | null;
    checkedItems: ICheckedItems[];
    setCheckedItems: React.Dispatch<React.SetStateAction<ICheckedItems[]>>;
    cartProductDetails: IProduct[];
    setCartProductDetails: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const CartItems = ({
    cartCount,
    cartData,
    cartProductDetails,
    setCartProductDetails,
    checkedItems,
    setCheckedItems,
}: ICartItemsProps) => {
    useEffect(() => {
        const getProductsDetail = async () => {
            try {
                const productsDetail = cartData?.map((item) =>
                    getProductDetail(item.product_id.toString()),
                );

                const result = await Promise.all(
                    productsDetail?.map(async (productDetail, idx) => {
                        const resolvedProductDetail = await productDetail;
                        return {
                            ...resolvedProductDetail,
                            quantity: cartData[idx].quantity,
                            cart_item_id: cartData[idx].cart_item_id,
                        };
                    }),
                );

                setCartProductDetails(result);
                makeAllCheck(result);
            } catch (error) {
                console.error(error);
            }
        };
        cartCount && getProductsDetail();
    }, [cartData]);

    const makeAllCheck = async (productDetails: ICheckedItems[]) => {
        const allItems = productDetails.map(
            ({ product_id, quantity, price, shipping_fee }) => {
                return { product_id, quantity, price, shipping_fee };
            },
        );
        setCheckedItems(allItems);
    };

    return cartCount === 0 ? (
        <NoneCartItem />
    ) : (
        <>
            {cartProductDetails?.map((item) => {
                return (
                    <Container key={item.cart_item_id}>
                        <CartItem
                            detail={item}
                            checkedItems={checkedItems}
                            setCheckedItems={setCheckedItems}
                        />
                    </Container>
                );
            })}
            {/* {cartData?.map((cartData: ICartData) => {
                return (
                    <Container key={cartData.cart_item_id}>
                        <CartItem
                            product_id={cartData.product_id}
                            quantity={cartData.quantity}
                            cart_item_id={cartData.cart_item_id}
                            checkedItems={checkedItems}
                            setCheckedItems={setCheckedItems}
                            // changeActive={changeActive}
                            // handleAllCheck={handleAllCheck}
                            // allSwitch={allSwitch}
                            // setCheckedproduct={setCheckedproduct}
                            // putInfo={putInfo}
                        />
                    </Container>
                );
            })} */}
        </>
    );
};
export default CartItems;
