import styled from 'styled-components';

interface styledCompo {
    color?: string;
}

const Container = styled.div`
    width: 480px;
    border: 2px solid #6997f7;
    border-radius: 10px;
    @media screen and (max-width: 820px) {
        width: 425px;
    }
`;

const WhiteWrap = styled.div`
    padding: 34px 30px 0;
`;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;
const PaymentDiv = styled(Div)`
    position: relative;
    margin: 49px 0 25px;
`;

const H4 = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const Price = styled.strong`
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    & > span {
        margin-left: 4px;
        color: #767676;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
    }
`;

const PaymentPrice = styled(Price)`
    color: red;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    ::before {
        content: '';
        display: inline-block;
        position: absolute;
        background: #c4c4c4;
        width: 100%;
        height: 1px;
        top: -29px;
        right: 0;
    }
`;

const GrayWrap = styled.div`
    background-color: #f2f2f2;
    padding: 30px 30px 34px;
    border-radius: 10px;
    text-align: center;
`;

const GrayBtn = styled.button`
    background-color: ${(props: styledCompo) => props.color};
    width: 220px;
    padding: 19px 0;
    margin-top: 30px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;

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
