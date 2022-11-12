import {
    Container,
    WhiteWrap,
    Div,
    PaymentDiv,
    H4,
    Price,
    PaymentPrice,
    GrayWrap,
    GrayBtn,
} from './FinalPaymentInfoStyle';

interface IDirectOrder {
    quantity: number;
    shipping_fee: number;
    price: number;
}

const FinalPaymentInfo = ({
    info,
    type,
    price,
    shipping,
    register,
    isValid,
}: IDirectOrder | any) => {
    console.log('info', info);

    return (
        <>
            <Container>
                <WhiteWrap>
                    <Div>
                        <H4>- 상품금액</H4>
                        <Price>
                            {type === 'cart_order'
                                ? price.toLocaleString('ko-KR')
                                : (
                                      info[0].price * info[0].quantity
                                  ).toLocaleString('ko-KR')}
                            <span>원</span>
                        </Price>
                    </Div>
                    <Div>
                        <H4>- 할인금액</H4>
                        <Price>
                            0<span>원</span>
                        </Price>
                    </Div>
                    <Div>
                        <H4>- 배송비</H4>
                        <Price>
                            {type === 'cart_order'
                                ? shipping.toLocaleString('ko-KR')
                                : info[0].shipping_fee.toLocaleString('ko-KR')}
                            <span>원</span>
                        </Price>
                    </Div>
                    <PaymentDiv>
                        <H4>- 결제금액</H4>
                        <PaymentPrice>
                            {type === 'cart_order'
                                ? (price + shipping).toLocaleString('ko-KR')
                                : (
                                      info[0].price * info[0].quantity +
                                      info[0].shipping_fee
                                  ).toLocaleString('ko-KR')}
                            <span>원</span>
                        </PaymentPrice>
                    </PaymentDiv>
                </WhiteWrap>
                <GrayWrap>
                    <label>
                        <input
                            type="checkbox"
                            {...register('agreement', {
                                required: true,
                            })}
                        />
                        주문내용을 확인하였으며, 정보제공에 동의합니다.
                    </label>
                    <GrayBtn
                        type="submit"
                        disabled={isValid ? false : true}
                        color={isValid ? '#6997f7' : '#c4c4c4'}
                    >
                        결제하기
                    </GrayBtn>
                </GrayWrap>
            </Container>
        </>
    );
};
export default FinalPaymentInfo;
