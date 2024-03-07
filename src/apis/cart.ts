import { axiosApi } from './axiosInstance';
import { ICartData, IPostCart } from 'GlobalType';

export const getCartItem = async () => {
    try {
        const response = await axiosApi.get('/cart/');
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const postCartItem = async (requestData: IPostCart) => {
    try {
        const response = await axiosApi.post('/cart/', requestData);
        return response.status;
    } catch (err) {
        console.error(err);
    }
};

export const putCartItemQuantity = async ({
    quantity,
    product_id,
    cart_item_id,
    is_active = true,
}: ICartData) => {
    try {
        await axiosApi.put(`/cart/${cart_item_id}/`, {
            product_id,
            quantity,
            is_active,
        });
    } catch (err) {
        console.error(err);
    }
};

export const deleteCartItem = async (cartItemId: number) => {
    try {
        await axiosApi.delete(`/cart/${cartItemId}/`);
    } catch (err) {
        console.error(err);
    }
};
