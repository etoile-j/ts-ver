interface IPaymentMethod {
    [key: string]: string;
}

export const LOGIN_TYPE = {
    BUYER: 'BUYER',
    SELLER: 'SELLER',
} as const;

export const ORDER_KIND = {
    CART_ORDER: 'cart_order',
    CART_ONE_ORDER: 'cart_one_order',
    DIRECT_ORDER: 'direct_order',
} as const;

export const FORM_MSG = {
    REQUIRED: '필수 정보입니다.',
    ONLY_NUMBER: '숫자만 입력 가능합니다.',
    INSUFFICIENT_LENGTH: '모두 입력해 주세요.',
} as const;

export const PAYMENT_METHOD: IPaymentMethod = {
    CARD: '신용/체크카드',
    DEPOSIT: '무통장 입금',
    PHONE_PAYMENT: '휴대폰 결제',
    NAVERPAY: '네이버페이',
    KAKAOPAY: '카카오페이',
} as const;

export const REGEX = {
    ONLY_NUMBER: /^[0-9]+$/,
    ONLY_LETTER: /^[ㄱ-ㅎ가-힣a-zA-Z]+$/,
} as const;

export const ITEMS_PER_PAGE = 15 as const;
