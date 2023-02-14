import { axiosApi } from './axiosInstance';

export const getCartItem = async () => {
    try {
        const response = await axiosApi.get('/cart/');
        console.log(response);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const postCartItem = async (requestData: {}) => {
    try {
        const response = await axiosApi.post('/cart/', requestData);
        console.log(response);
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
        console.log(response);
    } catch (err) {
        console.error(err);
    }
};

export const deleteCartItem = async (cartItemId: number) => {
    try {
        const response = await axiosApi.delete(`/cart/${cartItemId}/`);
        console.log(response);
    } catch (err) {
        console.error(err);
    }
};
