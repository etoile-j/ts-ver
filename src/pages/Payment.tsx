import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from 'constants/constants';
import DeliveryInfo from 'components/payment/DeliveryInfo';
import FinalPaymentInfo from 'components/payment/FinalPaymentInfo';
import Footer from 'components/common/Footer';
import Header from 'components/common/Header';
import OrderTable from 'components/payment/OrderTable';
import styled from 'styled-components';

const Main = styled.main`
    max-width: 1300px;
    min-width: 767px;
    margin: 0 auto;
    padding: 0 20px;
`;

const Total = styled.div`
    text-align: right;
    margin: 30px 0 90px;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    & > strong {
        margin-left: 10px;
        color: red;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
    }
`;

const Section = styled.section`
    margin-left: 40px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
`;

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 15px 0;
    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;
    line-height: 30px;
`;

const Heading = styled.h3`
    padding-bottom: 18px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
`;

const RadioiInput = styled.input.attrs({
    type: 'radio',
    name: 'paymentMethod',
})`
    margin: 0 10px 0 8px;
`;

const Label = styled.label`
    width: 126px;
`;

const KakkoLabel = styled(Label)`
    margin-right: 30px;
`;

interface IDirectOrder {
    product_id: number;
    quantity: number;
    order_kind: string;
    image: string;
    store_name: string;
    product_name: string;
    shipping_fee: number;
    price: number;
    total: number;
    total_price: number;
    total_shipping: number;
}

const Payment = ({ defaultValues }: any) => {
    const navigate = useNavigate();
    const info: IDirectOrder = useLocation().state;
    const order = useLocation().state.order_product;
    console.log(info);
    console.log(order);

    type Inputs = {
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
    };
    const methods = useForm({ mode: 'onChange', defaultValues });
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = methods;

    console.log(isValid);

    const onSubmit = (data: Inputs) => {
        console.log('훅폼', data, data.address2);
        handleOrder(data);
    };

    const token = localStorage.getItem('token');

    const handleOrder = async (data: Inputs) => {
        try {
            const url: string = BASE_URL + '/order/';
            const response = await axios.post(
                url,
                {
                    product_id: info.product_id,
                    quantity: order[0].quantity,
                    order_kind: info.order_kind,
                    total_price:
                        info.order_kind === 'cart_order'
                            ? info.total_price + info.total_shipping
                            : info.total,
                    receiver: data.name,
                    receiver_phone_number:
                        data.phone1 + data.phone2 + data.phone3,
                    address: data.address1 + ' ' + data.address2,
                    address_message: data.deliveryMessage,
                    payment_method: data.paymentMethod,
                },
                {
                    headers: {
                        Authorization: `JWT ${token}`,
                    },
                },
            );
            console.log(response);
            if (response.status === 200) {
                navigate('/complete_payment', {
                    state: {
                        created_at: response.data.created_at,
                        order_number: response.data.order_number,
                    },
                });
            }
        } catch (err) {
            console.error(err);
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
                        <DeliveryInfo register={register} />
                    </section>
                    <Container>
                        <section>
                            <Heading>결제수단</Heading>
                            <Wrap>
                                <Label>
                                    <RadioiInput
                                        value="CARD"
                                        {...register('paymentMethod', {
                                            required: true,
                                        })}
                                    />
                                    신용/체크카드
                                </Label>
                                <Label>
                                    <RadioiInput
                                        value="DEPOSIT"
                                        {...register('paymentMethod', {
                                            required: true,
                                        })}
                                    />
                                    무통장 입금
                                </Label>
                                <Label>
                                    <RadioiInput
                                        value="PHONE_PAYMENT"
                                        {...register('paymentMethod', {
                                            required: true,
                                        })}
                                    />
                                    휴대폰 결제
                                </Label>
                                <Label>
                                    <RadioiInput
                                        value="NAVERPAY"
                                        {...register('paymentMethod', {
                                            required: true,
                                        })}
                                    />
                                    네이버페이
                                </Label>
                                <KakkoLabel>
                                    <RadioiInput
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
