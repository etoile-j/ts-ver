export const LOGIN_TYPE = {
    BUYER: 'BUYER',
    SELLER: 'SELLER',
} as const;

export const ORDER_KIND = {
    CART_ORDER: 'cart_order',
    CART_ONE_ORDER: 'car_one_order',
    DIRECT_ORDER: 'direct_order',
} as const;

export const REGEX = {
    ONLY_NUMBER: /^[0-9]+$/,
    ONLY_LETTER: /^[ㄱ-ㅎ가-힣a-zA-Z]+$/,
} as const;
