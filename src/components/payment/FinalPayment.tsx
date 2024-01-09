import { IProduct } from 'GlobalType';
import { ORDER_KIND } from 'constants/index';
import { FieldValues, UseFormRegister } from 'react-hook-form';
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
} from './FinalPaymentStyle';

interface IFinalPaymentProps {
    singleOrderDetail: IProduct[];
    order_kind: string;
    total_price: number;
    total_shipping: number;
    register: UseFormRegister<FieldValues>;
    isValid: boolean;
}

const FinalPaymentInfo = (finalPaymentprops: IFinalPaymentProps) => {
    const { singleOrderDetail, order_kind, total_price, total_shipping, register, isValid } =
        finalPaymentprops;
    const { price, quantity, shipping_fee } = singleOrderDetail[0];

    return (
        <Container>
            <WhiteWrap>
                <Div>
                    <H4>- 상품금액</H4>
                    <Price>
                        {order_kind === ORDER_KIND.CART_ORDER
                            ? total_price.toLocaleString('ko-KR')
                            : (price * quantity).toLocaleString('ko-KR')}
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
                        {order_kind === ORDER_KIND.CART_ORDER
                            ? total_shipping.toLocaleString('ko-KR')
                            : shipping_fee.toLocaleString('ko-KR')}
                        <span>원</span>
                    </Price>
                </Div>
                <PaymentDiv>
                    <H4>- 결제금액</H4>
                    <PaymentPrice>
                        {order_kind === ORDER_KIND.CART_ORDER
                            ? (total_price + total_shipping).toLocaleString('ko-KR')
                            : (price * quantity + shipping_fee).toLocaleString('ko-KR')}
                        <span>원</span>
                    </PaymentPrice>
                </PaymentDiv>
            </WhiteWrap>
            <GrayWrap>
                <label>
                    <input type="checkbox" {...register('agreement', { required: true })} />
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
    );
};
export default FinalPaymentInfo;
