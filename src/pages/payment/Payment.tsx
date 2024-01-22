import { useLocation, useNavigate } from 'react-router-dom';
import { DeepPartial, FieldValues, useForm } from 'react-hook-form';
import { postOrder } from 'apis/order';
import { IDirectOrderInfo } from 'GlobalType';
import { ORDER_KIND } from 'constants/index';
import DeliveryInfo from 'components/payment/DeliveryInfo';
import FinalPayment from 'components/payment/FinalPayment';
import Footer from 'components/common/Footer';
import Header from 'components/common/header/Header';
import OrderTable from 'components/payment/OrderTable';
import { Main, Total, Section, Container, Heading } from './style';
import PaymentMethod from 'components/payment/PaymentMethod';

interface IPaymentInputs {
    name: string;
    phone1: number;
    phone2: number;
    phone3: number;
    address1: string;
    address2: string;
    deliveryMessage: string;
    paymentMethod: 'CARD' | 'DEPOSIT' | 'PHONE_PAYMENT' | 'NAVERPAY' | 'KAKAOPAY';
    agreement: HTMLInputElement;
}

const Payment = ({ defaultValues }: DeepPartial<FieldValues>) => {
    const navigate = useNavigate();
    const orderDetail: IDirectOrderInfo = useLocation().state;
    const { product_id, order_kind, total_price, total_shipping, total } = orderDetail;
    const orderProductsDetail = useLocation().state.order_product;
    const {
        register,
        handleSubmit,
        formState: { isValid, errors },
    } = useForm({ mode: 'onChange', defaultValues });

    const onSubmit = async (data: IPaymentInputs) => {
        try {
            const requestData = {
                product_id,
                quantity: orderProductsDetail[0].quantity,
                order_kind,
                total_price:
                    order_kind === ORDER_KIND.CART_ORDER
                        ? total_price + total_shipping
                        : total,
                receiver: data.name,
                receiver_phone_number: data.phone1 + data.phone2 + data.phone3,
                address: `${data.address1} ${data.address2}`,
                address_message: data.deliveryMessage,
                payment_method: data.paymentMethod,
            };

            const response = await postOrder(requestData);

            if (response) {
                navigate('/complete_payment', {
                    state: {
                        created_at: response.created_at,
                        order_number: response.order_number,
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <Header />
            <Main>
                <h2>주문/결제하기</h2>
                <section>
                    <Heading>주문 목록</Heading>
                    <OrderTable orderProductsDetail={orderProductsDetail} />
                    <Total>
                        총 주문금액
                        <strong>
                            {order_kind === ORDER_KIND.CART_ORDER
                                ? (total_price + total_shipping).toLocaleString('ko-KR')
                                : total.toLocaleString('ko-KR')}
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
                            <PaymentMethod register={register} />
                        </section>
                        <Section>
                            <Heading>최종결제 정보</Heading>
                            <FinalPayment
                                singleOrderDetail={orderProductsDetail}
                                order_kind={order_kind}
                                total_price={total_price}
                                total_shipping={total_shipping}
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
