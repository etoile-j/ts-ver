module 'GlobalType' {
    interface IProduct {
        cart_item_id: number;
        product_id: number;
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
        is_active?: boolean;
    }

    interface ICheckedItems {
        product_id: number;
        quantity: number;
        price: number;
        shipping_fee: number;
        image?: string;
        store_name?: string;
        product_name?: string;
    }

    interface IPostCart {
        product_id?: string;
        quantity: number;
        check: boolean;
    }

    interface IOrderInfo {
        address: string;
        address_message: string;
        created_at: string;
        order_items: number[];
        order_number: number;
        order_quantity: number[];
        payment_method: string;
        receiver: string;
        receiver_phone_number: string;
        total_price: number;
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

    type FieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
        TFieldValues,
        FieldError
    >;
}
