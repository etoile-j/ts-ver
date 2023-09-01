import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { postOrder } from 'apis/order';
import { IDirectOrderInfo } from 'GlobalType';
import DeliveryInfo from 'components/payment/DeliveryInfo';
import FinalPaymentInfo from 'components/payment/FinalPaymentInfo';
import Footer from 'components/common/Footer';
import Header from 'components/common/header/Header';
import OrderTable from 'components/payment/OrderTable';
import {
    Main,
    Total,
    Section,
    Container,
    Wrap,
    Heading,
    RadioInput,
    Label,
    KakkoLabel,
} from './style';

interface IPaymentInputs {
    name: string;
    phone1: number;
    phone2: number;
    phone3: number;
    address1: string;
    address2: string;
    deliveryMessage: string;
    paymentMethod:
        | 'CARD'
        | 'DEPOSIT'
        | 'PHONE_PAYMENT'
        | 'NAVERPAY'
        | 'KAKAOPAY';
    agreement: HTMLInputElement;
}

const Payment = ({ defaultValues }: any) => {
    const navigate = useNavigate();
    const info: IDirectOrderInfo = useLocation().state;
    const order = useLocation().state.order_product;
    const {
        register,
        handleSubmit,
        formState: { isValid, errors },
    } = useForm({ mode: 'onChange', defaultValues });

    const onSubmit = (data: IPaymentInputs) => {
        handleOrder(data);
    };

    const handleOrder = async (data: IPaymentInputs) => {
        const requestData = {
            product_id: info.product_id,
            quantity: order[0].quantity,
            order_kind: info.order_kind,
            total_price:
                info.order_kind === 'cart_order'
                    ? info.total_price + info.total_shipping
                    : info.total,
            receiver: data.name,
            receiver_phone_number: data.phone1 + data.phone2 + data.phone3,
            address: data.address1 + ' ' + data.address2,
            address_message: data.deliveryMessage,
            payment_method: data.paymentMethod,
        };
        const responseData = await postOrder(requestData);
        if (responseData) {
            navigate('/complete_payment', {
                state: {
                    created_at: responseData.created_at,
                    order_number: responseData.order_number,
                },
            });
        }
    };

    return (
        <>
            <Header />
            <Main>
                <h2>주문/결제하기</h2>
                <section>
                    {/* <Heading>주문 목록</Heading> */}
                    <OrderTable info={order} />
                    <Total>
                        총 주문금액
                        <strong>
                            {info.order_kind === 'cart_order'
                                ? (
                                      info.total_price + info.total_shipping
                                  ).toLocaleString('ko-KR')
                                : info.total.toLocaleString('ko-KR')}
                            <span>원</span>
                        </strong>
                    </Total>
                </section>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section>
                        <Heading>배송 정보</Heading>
                        <DeliveryInfo register={register} errors={errors} />
                    </section>
                    <Container>
                        <section>
                            <Heading>결제수단</Heading>
                            <Wrap>
                                <Label>
                                    <RadioInput
                                        value="CARD"
                                        {...register('paymentMethod', {
                                            required: true,
                                        })}
                                    />
                                    신용/체크카드
                                </Label>
                                <Label>
                                    <RadioInput
                                        value="DEPOSIT"
                                        {...register('paymentMethod', {
                                            required: true,
                                        })}
                                    />
                                    무통장 입금
                                </Label>
                                <Label>
                                    <RadioInput
                                        value="PHONE_PAYMENT"
                                        {...register('paymentMethod', {
                                            required: true,
                                        })}
                                    />
                                    휴대폰 결제
                                </Label>
                                <Label>
                                    <RadioInput
                                        value="NAVERPAY"
                                        {...register('paymentMethod', {
                                            required: true,
                                        })}
                                    />
                                    네이버페이
                                </Label>
                                <KakkoLabel>
                                    <RadioInput
                                        value="KAKAOPAY"
                                        {...register('paymentMethod', {
                                            required: true,
                                        })}
                                    />
                                    카카오페이
                                </KakkoLabel>
                            </Wrap>
                        </section>
                        <Section>
                            <Heading>최종결제 정보</Heading>
                            <FinalPaymentInfo
                                info={order}
                                type={info.order_kind}
                                price={info.total_price}
                                shipping={info.total_shipping}
                                register={register}
                                isValid={isValid}
                            />
                        </Section>
                    </Container>
                </form>
            </Main>
            <Footer />
        </>
    );
};
export default Payment;
