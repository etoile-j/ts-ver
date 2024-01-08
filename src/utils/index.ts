import { IProduct } from 'GlobalType';

export const filterAllItems = (productDetails: IProduct[]) => {
    return productDetails.map((item) => {
        return {
            product_id: item.product_id,
            quantity: item.quantity,
            price: item.price,
            shipping_fee: item.shipping_fee,
            image: item.image,
            store_name: item.store_name,
            product_name: item.product_name,
        };
    });
};
