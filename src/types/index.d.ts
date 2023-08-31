module 'GlobalType' {
    interface IProduct {
        product_id: string;
        image: string;
        store_name: string;
        product_name: string;
        price: number;
        shipping_fee: number;
        shipping_method: 'PARCEL' | 'DELIVERY';
        stock: number;
        quantity: number;
    }
}
