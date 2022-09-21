import styled from 'styled-components';
import Check_off from '../assets/icon-check-off.svg';

interface styledCompo {
    width: string;
}

const Form = styled.form`
    width: 100%;
    z-index: 2;
    background-color: #ffffff;
    position: relative;
    top: -20px;
    padding: 35px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
`;

const Div = styled.div`
    position: relative;
    margin-top: 12px;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 10px;
    color: #767676;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;
const PasswordLabel = styled(Label)`
    ::after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 28px;
        height: 28px;
        top: 43px;
        right: 16px;
        background-image: url(${Check_off});
        background-repeat: no-repeat;
        background-size: 28px 28px;
    }
`;

const Input = styled.input`
    width: ${(props: styledCompo) => props.width};
    padding: 16px 15px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const CheckBtn = styled.button`
    background-color: #6997f7;
    padding: 17px 31px;
    margin-left: 12px;
    border-radius: 5px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
`;

const CautionText = styled.strong`
    display: inline-block;
    margin-top: 10px;
    color: red;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

const PassText = styled(CautionText)`
    color: #6997f7;
`;

const Fieldset = styled.fieldset`
    margin-top: 50px;
`;

const At = styled.span`
    margin: 0 11px;
    color: #767676;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

const PhoneNumber = styled.div`
    display: flex;
    justify-content: space-between;
`;

const JoinContent = () => {
    return (
        <Form>
            <fieldset>
                <Div>
                    <Label>아이디</Label>
                    <Input type="text" name="paymentMethod" width="346px" />
                    <CheckBtn>중복확인</CheckBtn>
                </Div>
                <CautionText>이미 사용 중인 아이디입니다.</CautionText>
                <PassText>사용 가능한 아이디입니다:)</PassText>
                <Div>
                    <PasswordLabel>비밀번호</PasswordLabel>
                    <Input type="password" name="paymentMethod" width="100%" />
                </Div>
                <Div>
                    <PasswordLabel>비밀번호 재확인</PasswordLabel>
                    <Input type="password" name="paymentMethod" width="100%" />
                </Div>
                <CautionText>비밀번호가 일치하지 않습니다.</CautionText>
            </fieldset>
            <Fieldset>
                <div>
                    <Label>이름</Label>
                    <Input type="text" name="paymentMethod" width="100%" />
                </div>
                <Div>
                    <Label>휴대폰번호</Label>
                    <PhoneNumber>
                        <Input type="text" name="paymentMethod" width="152px" />
                        <Input type="text" name="paymentMethod" width="152px" />
                        <Input type="text" name="paymentMethod" width="152px" />
                    </PhoneNumber>
                </Div>
                <Div>
                    <Label>이메일</Label>
                    <Input type="text" name="paymentMethod" width="220px" />
                    <At>@</At>
                    <Input type="text" name="paymentMethod" width="220px" />
                </Div>
            </Fieldset>
        </Form>
    );
};
export default JoinContent;
