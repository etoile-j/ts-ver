import { axiosApi } from './axiosInstance';

export const postOrder = async (requestData: {}) => {
    try {
        const response = await axiosApi.post('/order/', requestData);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};

export const getOrders = async () => {
    try {
        const response = await axiosApi.get('/order/');
        return response.data;
    } catch (err) {
        console.error(err);
    }
};
