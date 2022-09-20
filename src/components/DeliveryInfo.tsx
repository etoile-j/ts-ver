import styled from 'styled-components';

interface styledCompo {
    width: string;
}

const Legend = styled.div`
    padding: 40px 0 8px;
    border-top: 2px solid #c4c4c4;
    border-bottom: 2px solid #c4c4c4;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
`;

const Line = styled.div`
    /* width: 100px; */
    padding: 8px 0;
    border-bottom: 1px solid #c4c4c4;
`;

const Label = styled.label`
    display: inline-block;
    width: 170px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const Input = styled.input`
    width: ${(props: styledCompo) => props.width};
    height: 40px;
    padding-left: 15px;
    border: 1px solid #c4c4c4;
    font-size: 19px;
`;
const AddressInput = styled(Input)`
    margin: 8px 0;
`;

const Hyphen = styled.span`
    padding: 0 10px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const PostCodeBtn = styled.button`
    background-color: #6997f7;
    width: 154px;
    padding: 10px 0;
    margin-left: 10px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const DeliveryInfo = () => {
    return (
        <>
            <fieldset>
                <Legend>
                    <legend>주문자 정보</legend>
                </Legend>
                <Line>
                    <Label>이름</Label>
                    <Input type="text" width="334px" />
                </Line>
                <Line>
                    <Label>휴대폰</Label>
                    <span>
                        <Input type="text" width="80px" />
                        <Hyphen>-</Hyphen>
                        <Input type="text" width="100px" />
                        <Hyphen>-</Hyphen>
                        <Input type="text" width="100px" />
                    </span>
                </Line>
                <Line>
                    <Label>이메일</Label>
                    <Input type="email" width="334px" />
                </Line>
            </fieldset>
            <fieldset>
                <Legend>
                    <legend>배송지 정보</legend>
                </Legend>
                <Line>
                    <Label>수령인</Label>
                    <Input type="text" width="334px" />
                </Line>
                <Line>
                    <Label>휴대폰</Label>
                    <span>
                        <Input type="text" width="80px" />
                        <Hyphen>-</Hyphen>
                        <Input type="text" width="100px" />
                        <Hyphen>-</Hyphen>
                        <Input type="text" width="100px" />
                    </span>
                </Line>
                <Line>
                    <Label>배송주소</Label>
                    <Input type="text" width="170px" />
                    <PostCodeBtn>우편번호 조회</PostCodeBtn>
                    <br />
                    <Label></Label>
                    <AddressInput type="text" width="600px" />
                    <br />
                    <Label></Label>
                    <Input type="text" width="600px" />
                </Line>
                <Line>
                    <Label>배송 메시지</Label>
                    <Input type="text" width="600px" />
                </Line>
            </fieldset>
        </>
    );
};
export default DeliveryInfo;
