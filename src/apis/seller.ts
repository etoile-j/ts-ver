import { axiosApi } from './axiosInstance';

export const getProductListOfId = async (pageNum: number) => {
    try {
        const response = await axiosApi.get(`/seller/?page=${pageNum}`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const postProduct = async (requestData: {}) => {
    try {
        const response = await axiosApi.post('/products/', requestData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data.product_id;
    } catch (err) {
        console.error(err);
    }
};

export const patchProductInfo = async (productId: number, requestData: {}) => {
    try {
        await axiosApi.patch(`/products/${productId}/`, requestData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
    } catch (err) {
        console.error(err);
    }
};

export const deleteProduct = async (productId: string) => {
    try {
        await axiosApi.delete(`/products/${productId}/`);
    } catch (err) {
        console.error(err);
    }
};
