import { axiosApi } from './axiosInstance';

export const getProductDetail = async (productId: string) => {
    try {
        const response = await axiosApi.get(`/products/${productId}/`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};
