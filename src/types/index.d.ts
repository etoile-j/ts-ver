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

    // pages/Payments.tsx
    interface IDirectOrderInfo extends IProduct {
        order_kind: string;
        total: number;
        total_price: number;
        total_shipping: number;
    }

    interface ICartData {
        cart_item_id: number;
        product_id: number;
        quantity: number;
    }

    interface ISearch {
        [keyword: string]: string;
    }

    interface ILoginType {
        typeBuyers?: boolean;
    }

    // seller
    interface IProductSeller {
        product_id?: number;
        image?: string;
        product_name?: string;
        price?: number;
        shipping_method?: 'PARCEL' | 'DELIVERY';
        shipping_fee?: number;
        stock?: number;
    }
}
