import { axiosApi } from './axiosInstance';

export const getCartItem = async () => {
    try {
        const response = await axiosApi.get('/cart/');
        return response.data.results;
    } catch (err) {
        console.error(err);
    }
};

export const postCartItem = async (requestData: {}) => {
    try {
        const response = await axiosApi.post('/cart/', requestData);
        return response.status;
    } catch (err) {
        console.error(err);
    }
};

export const putCartItemQuantity = async (
    bool: boolean,
    cartItemId?: number,
    count?: number,
    productId?: number,
) => {
    try {
        const response = await axiosApi.put(`/cart/${cartItemId}/`, {
            product_id: productId,
            quantity: count,
            is_active: bool,
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
