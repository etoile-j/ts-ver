import styled from 'styled-components';

const Container = styled.div`
    width: 480px;
    border: 2px solid #6997f7;
    border-radius: 10px;
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
    background-color: #c4c4c4;
    width: 220px;
    padding: 19px 0;
    margin-top: 30px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;

const FinalPaymentInfo = () => {
    return (
        <>
            <Container>
                <WhiteWrap>
                    <Div>
                        <H4>- 상품금액</H4>
                        <Price>
                            34500<span>원</span>
                        </Price>
                    </Div>
                    <Div>
                        <H4>- 할인금액</H4>
                        <Price>
                            34500<span>원</span>
                        </Price>
                    </Div>
                    <Div>
                        <H4>- 배송비</H4>
                        <Price>
                            34500<span>원</span>
                        </Price>
                    </Div>
                    <PaymentDiv>
                        <H4>- 결제금액</H4>
                        <PaymentPrice>
                            37600<span>원</span>
                            {/* `${dd}원` */}
                        </PaymentPrice>
                    </PaymentDiv>
                </WhiteWrap>
                <GrayWrap>
                    <label>
                        <input type="checkbox" />
                        주문내용을 확인하였으며, 정보제공에 동의합니다.
                    </label>
                    <GrayBtn>결제하기</GrayBtn>
                </GrayWrap>
            </Container>
        </>
    );
};
export default FinalPaymentInfo;
