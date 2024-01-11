import { useEffect } from 'react';
import { getProductDetail } from 'apis/products';
import { IProduct, ICheckedItems, ICartData } from 'GlobalType';
import { filterAllItems } from 'utils';
import CartItem from './item/CartItem';
import NoneCartItem from './item/NoneCartItem';
import { Container } from './style';

interface ICartItemsProps {
    cartData: ICartData[];
    cartCount: number | null;
    checkedItems: ICheckedItems[];
    setCheckedItems: React.Dispatch<React.SetStateAction<ICheckedItems[]>>;
    cartProductDetails: IProduct[];
    setCartProductDetails: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const CartItems = (CartItemsProps: ICartItemsProps) => {
    const {
        cartCount,
        cartData,
        cartProductDetails,
        setCartProductDetails,
        checkedItems,
        setCheckedItems,
    } = CartItemsProps;

    useEffect(() => {
        const updateProductDetails = async () => {
            const result = (await getProductsDetail()) as IProduct[];

            setCartProductDetails(result);
            const allItems = filterAllItems(result);
            setCheckedItems(allItems);
        };

        if (cartCount) updateProductDetails();
    }, [cartData]);

    const getProductsDetail = async () => {
        try {
            const productsDetail = cartData?.map((item) => getProductDetail(item.product_id));
            const resolvedProductsDetail = await Promise.all(productsDetail);

            return resolvedProductsDetail.map((productDetail, idx) => ({
                ...productDetail,
                quantity: cartData[idx].quantity,
                cart_item_id: cartData[idx].cart_item_id,
            }));
        } catch (error) {
            console.error(error);
        }
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
        </>
    );
};
export default CartItems;
